import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const Estilos = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        botao: {
            backgroundColor: '#dddddd',
            padding: 10,
            marginBottom: 10
        }
    }
)

class App extends Component {
    state = {
        contador: 0
    }

    pressionar = () => {
        this.setState(
            {
                contador: this.state.contador + 1
            }
        )
    }

    render() {
        return(
            <View style={Estilos.container}>
                <TouchableOpacity style={Estilos.botao} onPress={this.pressionar}>
                    <Text>Clique Aqui</Text>
                </TouchableOpacity>

                <View>
                    <Text>Você clicou { this.state.contador } vezes</Text>
                </View>
            </View>
        )
    }
}

export default App;