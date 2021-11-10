import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

const Estilos = StyleSheet.create(
    {
        container: {flex: 1, paddingTop: 25, backgroundColor: 'silver'},
        titulo: {fontSize: 28, fontWeight: 'bold', paddingTop: 25, textAlign: 'center'},
        item: {padding: 10, fontSize: 18, height: 40, borderBottomWidth: 1}
    }
);

const App = () => {
    return(
        <View style={Estilos.container}>
            <Text style={Estilos.titulo}>Lista de Bandas</Text>

            <FlatList
                data = {[
                    {banda: 'Oasis'},
                    {banda: 'The Cure'},
                    {banda: 'Guns And Roses'},
                    {banda: 'The Smiths'},
                    {banda: 'The Beatles'},
                    {banda: 'Legião Urbana'},
                    {banda: 'Nenhum de Nós'},
                    {banda: 'Raça Negra'},
                    {banda: 'Fala Mansa'},
                    {banda: 'Los Hermanos'},
                    {banda: 'Grupo Raça'},
                    {banda: 'Grupo Pirraça'},
                    {banda: 'Fundo de Quintal'},
                    {banda: 'Paralamas do Sucesso'},
                    {banda: 'Ultraje a Rigor'},
                    {banda: 'Biquini Cavadão'},
                    {banda: 'Netos da Dona Neves'},
                ]}

                renderItem={
                    ({item}) => <Text style={Estilos.item}>{item.banda}</Text>
                }
            />
        </View>
    );
}

export default App;