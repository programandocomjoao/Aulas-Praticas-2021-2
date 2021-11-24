import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const TelaInicial = () => {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Seja bem-vindo(a)!!!</Text>
        </View>
    );
}

const App = () => {
  return(
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Início" component={TelaInicial} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;