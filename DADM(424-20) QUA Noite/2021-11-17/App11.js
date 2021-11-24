import React from 'react';
import { View } from 'react-native';

const App = () => {
  return(
    <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ backgroundColor: 'silver', flex: 3 }}></View>
        <View style={{ backgroundColor: 'gray', flex: 5 }}></View>
        <View style={{ backgroundColor: 'black', flex: 2 }}></View>
    </View>
  )
}

export default App;