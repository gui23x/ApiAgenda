import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const navegacao = createNativeStackNavigator();

import Home from  '../paginas/Home';
import cadastrarContato from  '../paginas/CadastroContato';

export default function Rotas() {
    return (
        <NavigationContainer>
        <navegacao.Navigator>
            <navegacao.Screen name="Home" component={Home}/>
            <navegacao.Screen name="cadastrarContato" component={cadastrarContato}/>
        </navegacao.Navigator>
        </NavigationContainer>
  );
}