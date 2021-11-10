import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const Estilos = StyleSheet.create(
    {
        container: {padding: 10},
        campo: {borderWidth: 1, height: 40, marginTop: 30},
        texto: {padding: 10, fontSize: 32, alignSelf: 'center'}
    }
);

const App = () => {
    const [texto, setTexto] = useState('teste de react');

    return(
        <View style={Estilos.container}>
            <TextInput 
                style={Estilos.campo}
                placeholder="Digite o seu texto aqui!"
                defaultValue={texto}
                onChangeText={texto => setTexto(texto)}
            />

            <Text style={Estilos.texto}>
                {texto.split(' ').map((palavra) => palavra && '***')}
            </Text>
        </View>
    );
}

export default App;