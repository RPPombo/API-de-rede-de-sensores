import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Button, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import VoltarButton from '../components/VoltarButton';
import { saveSensorData } from '../storage/sensorStorage';
import { colors } from '../utils/theme';

export default function InserirScreen() {
  const [umidade, setUmidade] = useState('');
  const [inclinacao, setInclinacao] = useState('');
  const router = useRouter();

  const handleSalvar = async () => {
    const umidadeNum = Number(umidade);
    const inclinacaoNum = Number(inclinacao);

    if (
      isNaN(umidadeNum) ||
      isNaN(inclinacaoNum) ||
      umidadeNum < 0 ||
      umidadeNum > 100 ||
      inclinacaoNum < 0
    ) {
      Alert.alert('Erro', 'Por favor, insira valores válidos para umidade (0-100) e inclinação (>=0).');
      return;
    }

    try {
      await saveSensorData({ umidade: umidadeNum, inclinacao: inclinacaoNum, timestamp: Date.now() });
      Alert.alert('Sucesso', 'Dados salvos com sucesso!');
      setUmidade('');
      setInclinacao('');
      router.push('../riscos');
    } catch (error) {
      Alert.alert('Erro', 'Falha ao salvar dados.');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}
    >
      <Text style={styles.title}>Inserir Dados Ambientais</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Umidade do Solo (%)</Text>
        <TextInput
          keyboardType="numeric"
          value={umidade}
          onChangeText={setUmidade}
          style={styles.input}
          placeholder="Ex: 60"
          placeholderTextColor="#a1a1aa"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Inclinação (°)</Text>
        <TextInput
          keyboardType="numeric"
          value={inclinacao}
          onChangeText={setInclinacao}
          style={styles.input}
          placeholder="Ex: 25"
          placeholderTextColor="#a1a1aa"
        />
      </View>

      <Button title="Salvar Dados" onPress={handleSalvar} color={colors.primary} />

      <VoltarButton />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: colors.primary,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    color: colors.textPrimary,
  },
  input: {
    backgroundColor: colors.inputBackground,
    borderColor: colors.inputBorder,
    borderWidth: 1,
    borderRadius: 6,
    padding: 12,
    fontSize: 16,
    color: colors.textPrimary,
  },
});
