import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const estilos = StyleSheet.create(
  {
    centralizadoh: {alignItems: 'center'}
  }
)

const Saudacao = () => {
  return(
    <View style={estilos.centralizadoh}>
      <Text>Olá Rachel</Text>
    </View>
  )
}

const App = () => {
  return(
    <View>
      <Saudacao />
      <Saudacao />
      <Saudacao />
      <Saudacao />
      <Saudacao />
    </View>
  )
}

export default App;