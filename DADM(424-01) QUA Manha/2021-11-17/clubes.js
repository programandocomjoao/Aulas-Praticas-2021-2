import React from 'react';
import { View, Text, Button, Image } from 'react-native';

const Clubes = ({navigation}) => {
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Rio Retrô Comedy Club</Text>
            <Text>O Curtiço</Text>
            <Text>Acústico Business</Text>
            <Text>Clube dos Barbixas</Text>
        </View>
    );
}

export default Clubes;