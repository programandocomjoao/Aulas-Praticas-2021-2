import React from 'react';
import { View, Text } from 'react-native';

const App = () => {
  return(
    <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
      <View 
        style={
          {backgroundColor: '#00ff00', flex: 1}
        }
      >
        <Text>Caixa 1</Text>
      </View>

      <View
        style={
          {backgroundColor: '#0000ff', flex: 3}
        }
      >
        <Text>Caixa 2</Text>
      </View>
    </View>
  )
}

export default App;