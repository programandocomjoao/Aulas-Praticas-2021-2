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
      <Text>Olá {props.nome} {props.sobrenome}</Text>
    </View>
  )
}

const App = () => {
  return(
    <View>
      <Saudacao nome="Rachel" sobrenome="Cavalcanti" />
      <Saudacao nome="Andrew" sobrenome="Soares" />
      <Saudacao nome="Thiago" sobrenome="Lima" />
      <Saudacao nome="Gustavo" sobrenome="Salazar" />
      <Saudacao nome="Brenno" sobrenome="Almeida" />
    </View>
  )
}

export default App;