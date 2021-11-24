import React from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';

const Estilos = StyleSheet.create(
  {
    container: { flex: 1, paddingTop: 25, backgroundColor: 'silver' },
    titulo: { fontSize: 28, fontWeight: 'bold', margin: 10, textAlign: 'center' },
    item: { padding: 10, fontSize: 18, height: 40, borderBottomWidth: 1 },
    tituloSecao: { fontSize: 20, fontWeight: 'bold', fontStyle: 'italic', backgroundColor: 'gray', color: 'white', padding: 10 }
  }
)

const App = () => {
  return(
    <View style={Estilos.container}>
        <Text style={Estilos.titulo}>Lista de Bandas</Text>

        <SectionList 
            sections={[
                {title: 'Rock Internacional', data: ['Oasis', 'The Cure', 'Guns and Roses', 'The Smiths', 'The Beatles']},
                {title: 'Rock Nacional', data: ['Legião Urbana', 'Nenhum de Nós', 'Los Hermanos', 'Paralamas do Sucesso', 'Ultraje a Rigor', 'Biquini Cavadão', 'Netos da Dona Neves']},
                {title: 'Samba e Pagode', data: ['Raça Negra', 'Grupo Raça', 'Grupo Pirraça', 'Fundo de Quintal', 'Os Travessos']},
                {title: 'Outros Ritmos', data: ['Fala Mansa', 'Bonde do Tigrão', 'Os Havaianos']}
            ]}

            renderItem={
                ({item}) => <Text style={Estilos.item}>{item}</Text>
            }

            renderSectionHeader={
                ({section}) => <Text style={Estilos.tituloSecao}>{section.title}</Text>
            }
        />
    </View>
  )
}

export default App;