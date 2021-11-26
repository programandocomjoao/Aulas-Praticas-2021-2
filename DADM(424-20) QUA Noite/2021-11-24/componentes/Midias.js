import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';

const Midias = () => {
    return(
        <View style={{ flex: 1 }}>
            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                <Image 
                    source={require('../imagens/logoUnigranrio.png')}
                    style={{ width: 300, height: 49 }}
                />               
            </View>

            <View style={{ flex: 3, alignItems: 'stretch', flexDirection: 'row' }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0080c0' }}>
                    <TouchableOpacity onPress={
                        () => { Linking.openURL('https://portal.unigranrio.edu.br') }
                    }>
                        <Image 
                        source={require('../imagens/iconeSite.png')}
                        style={{ width: 75, height: 75 }}
                        />   
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#eeeebb' }}>
                <TouchableOpacity onPress={
                        () => { Linking.openURL('https://maps.app.goo.gl/F55oFKTYJjA1aCib6') }
                    }>
                        <Image 
                        source={require('../imagens/iconeMaps.png')}
                        style={{ width: 75, height: 75 }}
                        />   
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ flex: 3, alignItems: 'stretch', flexDirection: 'row' }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink' }}>
                    <TouchableOpacity onPress={
                        //() => { Linking.openURL('mailto:') }
                        () => { Linking.openURL('mailto:atendimento@unigranrio.com.br') }
                    }>
                        <Image 
                        source={require('../imagens/iconeEmail.png')}
                        style={{ width: 75, height: 75 }}
                        />   
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightgreen' }}>
                    <TouchableOpacity onPress={
                        //() => { Linking.openURL('http://api.whatsapp.com/send?phone=552132194040&text=Prof. Joao eh o melhor') }
                        () => { Linking.openURL('http://api.whatsapp.com/send?phone=552132194040') }
                    }>
                        <Image 
                        source={require('../imagens/iconeWhatsapp.png')}
                        style={{ width: 75, height: 75 }}
                        />   
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ flex: 3, alignItems: 'stretch', flexDirection: 'row' }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
                    <TouchableOpacity onPress={
                        () => { Linking.openURL('http://instagram.com/unigranrio') }
                    }>
                        <Image 
                        source={require('../imagens/iconeInstagram.png')}
                        style={{ width: 75, height: 75 }}
                        />   
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightblue' }}>
                    <TouchableOpacity onPress={
                        () => { Linking.openURL('fb://page/111800282236339') }
                    }>
                        <Image 
                        source={require('../imagens/iconeFacebook.png')}
                        style={{ width: 75, height: 75 }}
                        />   
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Midias;
