import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const estilos = StyleSheet.create(
  {
    centralizadoh: {alignItems: 'center'}
  }
)

const Saudacao = (props) => {
  return(
    <View style={estilos.centralizadoh}>
      <Text>Olá {props.nome} {props.sobrenome}!!!</Text>
    </View>
  )
}

const App = () => {
  return(
    <View>
      <Saudacao nome="Gustavo" sobrenome="do Nascimento" />
      <Saudacao nome="João Victor" sobrenome="Martins" />
      <Saudacao nome="Vinicius" sobrenome="Ruas" />
      <Saudacao nome="Rodrigo" sobrenome="Werneck" />
      <Saudacao nome="Jacydabel" sobrenome="Velanes" />
    </View>
  )
}

export default App;