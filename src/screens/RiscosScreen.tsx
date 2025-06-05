import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import VoltarButton from '../components/VoltarButton';
import { getSensorData } from '../storage/sensorStorage';
import { SensorData } from '../types/SensorData';
import { calcularRisco } from '../utils/riscoCalculator';
import { colors } from '../utils/theme';

export default function RiscosScreen() {
  const [ultimoDado, setUltimoDado] = useState<SensorData | null>(null);
  const [risco, setRisco] = useState<'Baixo' | 'Médio' | 'Alto'>('Baixo');

  useEffect(() => {
    async function carregarUltimoDado() {
      const dados = await getSensorData();
      if (dados.length > 0) {
        const ultimo = dados[dados.length - 1];
        setUltimoDado(ultimo);
        setRisco(calcularRisco(ultimo));
      }
    }
    carregarUltimoDado();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Último Monitoramento</Text>
      {ultimoDado ? (
        <>
          <Text style={styles.text}>Umidade do Solo: {ultimoDado.umidade}%</Text>
          <Text style={styles.text}>Inclinação: {ultimoDado.inclinacao}°</Text>
          <Text style={styles.text}>
            Risco de Deslizamento:{' '}
            <Text style={[styles.risco, riscoStyles[risco]]}>{risco}</Text>
          </Text>
          <Text style={styles.text}>
            Timestamp: {new Date(ultimoDado.timestamp).toLocaleString()}
          </Text>
        </>
      ) : (
        <Text style={styles.text}>Nenhum dado disponível.</Text>
      )}

      <VoltarButton />
    </ScrollView>
  );
}

const riscoStyles = StyleSheet.create({
  Baixo: { color: colors.success, fontWeight: 'bold' },
  Médio: { color: colors.warning, fontWeight: 'bold' },
  Alto: { color: colors.danger, fontWeight: 'bold' },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginBottom: 8,
    color: colors.textPrimary,
  },
  risco: {
    fontWeight: 'bold',
  },
});
