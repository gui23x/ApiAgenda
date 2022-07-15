import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity,TextInput} from 'react-native';
import { visualizarTodosContatos } from './ModelContato';

export default function CadastrarContatos({navigation}) {
   return(
       <View style={estilo.container}>
       <TextInput style={estilo.texto}
           placeholder= "Digite o código do Contato"
       />
       <TextInput style={estilo.texto}
           placeholder='Digite o Nome do Contato'
       />
       <TextInput style={estilo.texto}
           placeholder='Digite o Telefone do Contato'
       />
       <TextInput style={estilo.texto}
           placeholder='Digite o E-mail do Contato'
       />
       <TouchableOpacity style={estilo.botao}>
           <Text style={estilo.titulobotao}>Salvar</Text>
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
        marginLeft:30,
        fontSize: 20,
        padding:10,
        marginTop:35,
        borderColor: 'black',
        borderRadius: 20,
        backgroundColor: 'white',
        color: 'black',
        width: 340,
    },
    botao:{
        marginTop :50,
        backgroundColor: 'black',
        borderRadius: 50,
        left: 100,
        width: 180,
        height: 50,
        textAlign: 'center',
        fontSize: 20,
    },
    titulobotao:{
        textAlign: 'center',
        top: 10,
        fontSize: 20,
        color: 'white',
        
    }

});