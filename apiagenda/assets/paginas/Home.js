import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Alert } from 'react-native';
import { visualizarTodosContatos } from './ModelContato';

export default function Home({ navigation }) {
  const [dadosContatos, setDadosContatos] = useState([]);

  async function buscarContatos() {
    const resultado = await visualizarTodosContatos();
    if (resultado) {
      setDadosContatos(resultado);
    } else {
      Alert.alert('Sem contatos');
      setDadosContatos('');
    }
  }

  useEffect(async () => {
    const resp = await buscarContatos();
    setDadosContatos(resp);
  }, [])


  return (
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
          <TouchableOpacity style={estilo.buscarDados}>
            <Text style={estilo.botaoTextoDados}>{item.id}</Text>
            <Text style={estilo.botaoTextoDados}>{item.nome}</Text>
            <Text style={estilo.botaoTextoDados}>{item.fone}</Text>
            <Text style={estilo.botaoTextoDados}>{item.email}</Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00CED1',
  },
  botaoCadastrar: {
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
  },
  textCadastrar: {
    textAlign: 'center',
    fontSize: 25,
    color: 'white',
  },
  titulo: {
    textAlign: 'center',
    top: 125,
    fontSize: 50,
    backgroundColor: '#00FFFF',
    borderRadius: 50,
    width: 300,
    left: 45,
  }
});

