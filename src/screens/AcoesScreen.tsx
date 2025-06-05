import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import VoltarButton from '../components/VoltarButton';
import { colors } from '../utils/theme';

export default function AcoesScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Ações de Mitigação</Text>

      <Text style={styles.text}>
        Em caso de risco de deslizamento elevado, considere as seguintes ações:
      </Text>

      <Text style={styles.action}>• Evacuar áreas vulneráveis imediatamente.</Text>
      <Text style={styles.action}>• Monitorar continuamente os sensores ambientais.</Text>
      <Text style={styles.action}>• Implementar barreiras físicas para contenção.</Text>
      <Text style={styles.action}>• Comunicar autoridades e população local.</Text>
      <Text style={styles.action}>• Revisar projetos de drenagem e estabilização de solo.</Text>

      <VoltarButton />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    color: colors.primary,
  },
  text: {
    fontSize: 16,
    marginBottom: 12,
    color: colors.textPrimary,
  },
  action: {
    fontSize: 16,
    marginBottom: 8,
    color: colors.textPrimary,
  },
});
