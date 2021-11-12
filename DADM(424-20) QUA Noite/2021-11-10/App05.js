import React from 'react';
import { View, Text, Image, TextInput, StyleSheet } from 'react-native';

const Estilos = StyleSheet.create(
  {
    titulo: { fontWeight: 'bold', fontSize: 30, textAlign: 'center', margin: 20 },
    caixa: { backgroundColor: 'black' },
    subtitulo: { fontWeight: 'bold', fontSize: 20, textAlign: 'center', margin: 10, color: 'white' },
    imagem: { width: 200, height: 200, margin: 10, alignSelf: 'center' },
    campo: { borderWidth: 1, borderColor: 'gray', height: 40, width: 200, alignSelf: 'center', margin: 10, color: '#003399', fontFamily: 'verdana', fontSize: 15 }
  }
)

const App = () => {
  return(
    <View>
      <Text style={Estilos.titulo}>Sistema Solar</Text>

      <View style={Estilos.caixa}>
        <Text style={Estilos.subtitulo}>Planeta Terra</Text>

        <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Blue_Marble_Eastern_Hemisphere.jpg'}} style={Estilos.imagem} />
      </View>

      <TextInput placeholder="Deixe uma mensagem" autoFocus style={Estilos.campo} />
    </View>
  )
}

export default App;