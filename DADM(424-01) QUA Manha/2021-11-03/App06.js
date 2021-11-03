import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TextInput } from 'react-native';

const Estilos = StyleSheet.create(
    {
        titulo: { fontWeight: 'bold', fontSize: 30, textAlign: 'center', marginBottom: 20, marginTop: 20 },
        subtitulo: { fontWeight: 'bold', fontSize: 20, textAlign: 'center', marginTop: 10 },
        container: { backgroundColor: '#dddddd' },
        imagem: { width: 200, height: 200, marginTop: 10, marginBottom: 10, alignSelf: 'center' },
        campo: { borderWidth: 1, borderColor: 'gray', height: 40, width: 200, alignSelf: 'center', marginTop: 10, color: '#003399', fontFamily: 'verdana', fontSize: 15 }
    }
)

const App = () => {
    return(
        <ScrollView>
            <Text style={Estilos.titulo}>Sistema Solar</Text>

            <View style={Estilos.container}>
                <Text style={Estilos.subtitulo}>Planeta Terra</Text>
                <Image style={Estilos.imagem} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Blue_Marble_Eastern_Hemisphere.jpg'}} />
            </View>

            <TextInput style={Estilos.campo} placeholder="Deixe uma mensagem" />
        </ScrollView>
    )
}

export default App;