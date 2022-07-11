import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Alert } from 'react-native';
import { visualizarContatos } from './ModelContato';

export default function Home() {
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
    <View style={styles.container}>
      <Text>Contatos</Text>

      <TouchableOpacity style={estilo.botaoCadastrar}>
        <text style={estilo.botaoTextCadastrar}>Cadastrar Contato</text>
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
    height: responsiveHeight(50),
    width: responsiveWidth(50),
  },
  botaoTextCadastrar: {
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    textAlign: 'center',
    height: responsiveHeight(8),
    width: responsiveWidth(42),
    shadowColor: '#470000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.2,
    elevation: 1,
    left: 8,
  },
  botaoTextoDados: {
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    textAlign: 'left',
    height: responsiveHeight(6),
    width: responsiveWidth(90),
    shadowColor: '#470000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.2,
    elevation: 1,
    left: 8,
  },
});

