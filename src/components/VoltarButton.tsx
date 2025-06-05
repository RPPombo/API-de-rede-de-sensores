import { useRouter } from 'expo-router';
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { colors } from '../utils/theme';

export default function VoltarButton() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Button
        title="Voltar à Tela Inicial"
        onPress={() => router.replace('/')}
        color={colors.primary}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});
