import React from 'react';
import { View, Text, Button, Image } from 'react-native';

const Clubes = () => {
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Rio Retrô Comedy Club</Text>
            <Text>Clube do Minhoca</Text>
            <Text>Acústico Business</Text>
            <Text>O Curtiço</Text>

            <Image 
                style={{ width: 300, height: 300, margin: 30 }}
                source={require('./imagens/rioretro.jpg')}
            />
        </View>
    );
}

export default Clubes;