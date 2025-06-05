import { useRouter } from 'expo-router';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { colors } from '../utils/theme';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌧️ Monitor de Deslizamentos</Text>
      <Text style={styles.subtitle}>
        Bem-vindo! Este aplicativo simula sensores inteligentes para prever riscos de deslizamentos.
      </Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Inserir Dados"
          onPress={() => router.push('../inserir')}
          color={colors.primary}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Histórico"
          onPress={() => router.push('../historico')}
          color={colors.primary}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Ações de Mitigação"
          onPress={() => router.push('../acoes')}
          color={colors.primary}
        />
      </View>
    </View>
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
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: colors.primary,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
    color: colors.textPrimary,
  },
  buttonContainer: {
    marginVertical: 8,
  },
});
