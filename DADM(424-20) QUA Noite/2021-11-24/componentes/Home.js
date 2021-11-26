import React from 'react';
import { View, Text, Button, Image } from 'react-native';

const Home = ({ navigation }) => {
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image 
                source={require('../imagens/logoUnigranrio.png')}
                style={{ width: 300, height: 49 }}
            />

            <Text style={{ padding: 20, textAlign: 'center', fontSize: 20 }}>A UNIGRANRIO É,DE NOVO, A MELHOR UNIVERSIDADE DO RJ PELO MEC.AGORA, TAMBÉM A 6ª MELHOR DO BRASIL.</Text>

            <Button 
                title="Mídias Sociais"
                onPress={
                    () => navigation.navigate('Midias')
                }
            />
        </View>
    );
}

export default Home;