import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Universidade Católica de Pernambuco</Text>
      <Text>Curso: Sistemas para a Internet</Text>
      <Text>Disciplina: programação para Dispositivos móveis  </Text>
      <Text>Professor: Marcio Bueno</Text>
      <Text>Aluna: Gediane</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF69B4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
