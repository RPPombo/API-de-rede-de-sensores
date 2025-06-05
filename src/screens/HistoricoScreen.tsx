import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import VoltarButton from '../components/VoltarButton';
import { getSensorData } from '../storage/sensorStorage';
import { SensorData } from '../types/SensorData';
import { colors } from '../utils/theme';

export default function HistoricoScreen() {
  const [dados, setDados] = useState<SensorData[]>([]);

  useEffect(() => {
    async function carregarDados() {
      const dadosCarregados = await getSensorData();
      setDados(dadosCarregados.reverse());
    }
    carregarDados();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Histórico de Monitoramento</Text>

      {dados.length === 0 ? (
        <Text style={styles.text}>Nenhum dado registrado.</Text>
      ) : (
        dados.map((item, index) => (
          <View key={index} style={styles.item}>
            <Text style={styles.text}>Data: {new Date(item.timestamp).toLocaleString()}</Text>
            <Text style={styles.text}>Umidade: {item.umidade}%</Text>
            <Text style={styles.text}>Inclinação: {item.inclinacao}°</Text>
          </View>
        ))
      )}

      <VoltarButton />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: colors.primary,
  },
  text: {
    fontSize: 16,
    color: colors.textPrimary,
  },
  item: {
    marginBottom: 16,
    padding: 12,
    backgroundColor: '#e2e8f0',
    borderRadius: 8,
  },
});
