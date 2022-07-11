import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationConteiner } from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const navegacao = createNativeStackNavigator();

import Home from  '../paginas/Home';
import Cadastro from '../paginas/Cadastro';

export default function Rotas() {
    return (
    <NavigationConteiner>
        <nav.Navigator>
            <nav.Screen name="Home" component={Home}/>
            <nav.Screen name="Cadastro" component={Cadastro}/>
        </nav.Navigator>
    </NavigationConteiner>
  );
}