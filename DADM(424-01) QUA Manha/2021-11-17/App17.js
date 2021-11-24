import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Clubes from './clubes.js';

const Stack = createStackNavigator();

const TelaInicial = ({navigation}) => {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Seja bem-vindo(a)!!!</Text>
            <Button 
                title="Sobre o App"
                onPress={() => navigation.navigate('Sobre')}
            />
            <Button
                title="Clubes de Comédia"
                onPress={() => navigation.navigate('Clubes')}
            />
        </View>
    );
}

const TelaSobre = () => {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Meu App!!!</Text>
            <Text>Versão 1.0</Text>
            <Text>Desenvolvido por Jota Pê</Text>
        </View>
    );
}

const App = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Início">
                <Stack.Screen name="Início" component={TelaInicial} />
                <Stack.Screen name="Sobre" component={TelaSobre} />
                <Stack.Screen name="Clubes" component={Clubes} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;