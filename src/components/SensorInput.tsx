import React from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';

interface SensorInputProps extends TextInputProps {
  label: string;
}

export default function SensorInput({ label, ...rest }: SensorInputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput 
        style={styles.input} 
        keyboardType="numeric" 
        {...rest} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 20 },
  label: { fontSize: 16, marginBottom: 6, color: '#334155' },
  input: {
    borderWidth: 1,
    borderColor: '#94a3b8',
    borderRadius: 6,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
});
