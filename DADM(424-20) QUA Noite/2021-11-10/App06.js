import React from 'react';
import { ScrollView, Text, Image, StyleSheet } from 'react-native';

const Estilos = StyleSheet.create(
  {
    container: { padding: 10 },
    titulo: { fontSize: 24, fontWeight: 'bold', margin: 10, textAlign: 'center' },
    imagem: { margin: 20, alignSelf: 'center' },
    paragrafo: { fontSize: 14, margin: 10, lineHeight: 17, textAlign: 'justify' }
  }
)

const Logotipo = {
  uri: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Javascript-736400_960_720.png',
  width: 150,
  height: 150
}

const App = () => {
  return(
    <ScrollView>
      <Text style={Estilos.titulo}>Aprenda JavaScript</Text>

      <Image source={Logotipo} style={Estilos.imagem} />

      <Text style={Estilos.paragrafo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur fringilla purus eu condimentum. Suspendisse tincidunt egestas purus, id dictum orci commodo non. Integer et elit dapibus, pharetra nisl viverra, lacinia felis. Morbi varius scelerisque magna, non iaculis sapien pulvinar eget. Donec ex erat, laoreet eu urna ac, tincidunt consequat dui. Proin sodales lacinia felis at dapibus. Etiam eget augue eget nisl ornare vehicula eget in sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque imperdiet faucibus libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus consequat tristique est, non dapibus nulla ultricies sed. Mauris ex turpis, congue ac rutrum consectetur, dapibus sed lacus.</Text>

      <Text style={Estilos.paragrafo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur fringilla purus eu condimentum. Suspendisse tincidunt egestas purus, id dictum orci commodo non. Integer et elit dapibus, pharetra nisl viverra, lacinia felis. Morbi varius scelerisque magna, non iaculis sapien pulvinar eget. Donec ex erat, laoreet eu urna ac, tincidunt consequat dui. Proin sodales lacinia felis at dapibus. Etiam eget augue eget nisl ornare vehicula eget in sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque imperdiet faucibus libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus consequat tristique est, non dapibus nulla ultricies sed. Mauris ex turpis, congue ac rutrum consectetur, dapibus sed lacus.</Text>

      <Text style={Estilos.paragrafo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur fringilla purus eu condimentum. Suspendisse tincidunt egestas purus, id dictum orci commodo non. Integer et elit dapibus, pharetra nisl viverra, lacinia felis. Morbi varius scelerisque magna, non iaculis sapien pulvinar eget. Donec ex erat, laoreet eu urna ac, tincidunt consequat dui. Proin sodales lacinia felis at dapibus. Etiam eget augue eget nisl ornare vehicula eget in sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque imperdiet faucibus libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus consequat tristique est, non dapibus nulla ultricies sed. Mauris ex turpis, congue ac rutrum consectetur, dapibus sed lacus.</Text>

      <Text style={Estilos.paragrafo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur fringilla purus eu condimentum. Suspendisse tincidunt egestas purus, id dictum orci commodo non. Integer et elit dapibus, pharetra nisl viverra, lacinia felis. Morbi varius scelerisque magna, non iaculis sapien pulvinar eget. Donec ex erat, laoreet eu urna ac, tincidunt consequat dui. Proin sodales lacinia felis at dapibus. Etiam eget augue eget nisl ornare vehicula eget in sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque imperdiet faucibus libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus consequat tristique est, non dapibus nulla ultricies sed. Mauris ex turpis, congue ac rutrum consectetur, dapibus sed lacus.</Text>

      <Text style={Estilos.paragrafo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur fringilla purus eu condimentum. Suspendisse tincidunt egestas purus, id dictum orci commodo non. Integer et elit dapibus, pharetra nisl viverra, lacinia felis. Morbi varius scelerisque magna, non iaculis sapien pulvinar eget. Donec ex erat, laoreet eu urna ac, tincidunt consequat dui. Proin sodales lacinia felis at dapibus. Etiam eget augue eget nisl ornare vehicula eget in sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque imperdiet faucibus libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus consequat tristique est, non dapibus nulla ultricies sed. Mauris ex turpis, congue ac rutrum consectetur, dapibus sed lacus.</Text>

      <Text style={Estilos.paragrafo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur fringilla purus eu condimentum. Suspendisse tincidunt egestas purus, id dictum orci commodo non. Integer et elit dapibus, pharetra nisl viverra, lacinia felis. Morbi varius scelerisque magna, non iaculis sapien pulvinar eget. Donec ex erat, laoreet eu urna ac, tincidunt consequat dui. Proin sodales lacinia felis at dapibus. Etiam eget augue eget nisl ornare vehicula eget in sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque imperdiet faucibus libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus consequat tristique est, non dapibus nulla ultricies sed. Mauris ex turpis, congue ac rutrum consectetur, dapibus sed lacus.</Text>
    </ScrollView>
  )
}

export default App;