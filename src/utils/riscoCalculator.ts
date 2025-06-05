import { SensorData } from '../types/SensorData';

export function calcularRisco({ umidade, inclinacao }: SensorData): 'Baixo' | 'Médio' | 'Alto' {
  if (umidade > 70 && inclinacao > 30) {
    return 'Alto';   // com A maiúsculo
  }
  if (umidade > 50 && inclinacao > 20) {
    return 'Médio';  // com M maiúsculo e acento
  }
  return 'Baixo';    // com B maiúsculo
}
