import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ScrollView, Text, View, TouchableOpacity, FlatList, Alert } from 'react-native';
import { visualizarTodosContatos } from './ModelContato';

export default function Home({ navigation }) {
  const [dadosContatos, setDadosContatos] = useState([]);


  useEffect(async () => {
    const resp = await visualizarTodosContatos();
    setDadosContatos(resp);
  }, []);

  return (
    <ScrollView>
      
      <View style={estilo.container}>
      <Text style={estilo.titulo}>Contatos</Text>
      
      <TouchableOpacity style={estilo.botaoCadastrar} onPress={() => navigation.navigate('cadastrarContato')}>
        <Text style={estilo.textCadastrar}>Cadastrar</Text>
      </TouchableOpacity>
      
      <StatusBar style="auto" />
      
      <FlatList
        data={dadosContatos}
        keyExtractor={dadosContatos => dadosContatos.id}
        renderItem={({ item }) =>
        <View>
          <TouchableOpacity style={estilo.buscarDados}>
            <Text style={estilo.botaoTextoDados}>{item.id}</Text>
            <Text style={estilo.botaoTextoDados}>{item.Nome}</Text>
            <Text style={estilo.botaoTextoDados}>{item.Fone}</Text>
            <Text style={estilo.botaoTextoDados}>{item.Email}</Text>
          </TouchableOpacity>
          </View>
        }
        />
    </View>
    </ScrollView>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00CED1',
    
  },
  botaoCadastrar: {
    margin: 10,
    padding: 5,
    backgroundColor: 'black',
    borderRadius: 50,
    fontSize: 10,
    color: 'white',
    textAlign: 'center',
    left: 100,
    width: 180,
    height: 50,
    top:10,
  },
  textCadastrar: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    backgroundColor: '#00FFFF',
    borderRadius: 50,
    width: 300,
    left: 45,
    top:10,
    margin: 5,
  },
  botaoTextoDados:{
   fontSize: 25,
  },
  buscarDados:{
    backgroundColor: '#00FFFF',
    margin: 10,
    top: 10,
    width: 320,
    padding: 20,
    borderRadius: 15,
    textAlign: 'center',
    left: 26,
  }

});

