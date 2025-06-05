import { useRouter } from 'expo-router';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function WelcomeScreen(): JSX.Element {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌧️ Monitor de Deslizamentos</Text>
      <Text style={styles.subtitle}>
        Bem-vindo! Este aplicativo simula sensores inteligentes para prever riscos de deslizamentos.
      </Text>

      <Button
        title="Começar Monitoramento"
        onPress={() => router.push('/inserir')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#e8f0fe',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#1e3a8a',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
    color: '#334155',
  },
});
