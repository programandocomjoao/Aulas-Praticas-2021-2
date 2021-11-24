import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './componentes/Home';
import Midias from './componentes/Midias';

const Stack = createStackNavigator();

const App = () => { 
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Midias" component={Midias} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;