import AsyncStorage from '@react-native-async-storage/async-storage';
import { SensorData } from '../types/SensorData';

const STORAGE_KEY = '@sensor_data';

export async function saveSensorData(dado: SensorData): Promise<void> {
  try {
    const dadosString = await AsyncStorage.getItem(STORAGE_KEY);
    const dados: SensorData[] = dadosString ? JSON.parse(dadosString) : [];
    dados.push(dado);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(dados));
  } catch (error) {
    console.error('Erro ao salvar dados:', error);
    throw error;
  }
}

export async function getSensorData(): Promise<SensorData[]> {
  try {
    const dadosString = await AsyncStorage.getItem(STORAGE_KEY);
    if (!dadosString) return [];
    return JSON.parse(dadosString) as SensorData[];
  } catch (error) {
    console.error('Erro ao carregar dados:', error);
    return [];
  }
}
