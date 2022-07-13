import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity,TextInput} from 'react-native';
import { visualizarTodosContatos } from './ModelContato';

export default function CadastrarContatos({navigation}) {
   return(
       <View style={estilo.container}>
       <TextInput
           placeholder= "Digite o código do Contato"
       />
       <TextInput
           placeholder='Digite o Nome do Contato'
       />
       <TextInput
           placeholder='Digite o Telefone do Contato'
       />
       <TextInput
           placeholder='Digite o E-mail do Contato'
       />
       <TouchableOpacity style={estilo.botao}>
           <Text>Salvar Contatos </Text>
       </TouchableOpacity>
       </View>
   );
}

const estilo = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#00CED1',
    },
    texto:{

    },
    botao:{
        margin: 5,
        padding: 5,
        backgroundColor: 'black',
        borderRadius: 50,
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        left: 100,
        width: 180,
        height: 50,
        top: 150,
    },

});