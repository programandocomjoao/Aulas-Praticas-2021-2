import React from 'react';
import { View, Text, Button, Image } from 'react-native';

const Comediantes = () => {
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Afonso Padilha</Text>
            <Text>Diih Lopes</Text>
            <Text>Márcio Donato</Text>
            <Text>Thiago Ventura</Text>

            <Image 
                style={{ width: 300, height: 300, margin: 30 }}
                source={require('./imagens/4amigos.png')}
            />
        </View>
    );
}

export default Comediantes;