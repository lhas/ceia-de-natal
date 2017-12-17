import React, { Component } from 'react';
import {
  StackNavigator,
} from 'react-navigation';
import StartScreen from './src/screens/start';
import AddRecipeScreen from './src/screens/add-recipe';
  
const App = StackNavigator({
  Home: {
    screen: StartScreen,
    navigationOptions: {
      headerTitle: 'Ceia de Natal',
    },
  },
  AddRecipe: {
    screen: AddRecipeScreen,
    navigationOptions: {
      headerTitle: 'Adicionar Receita',
    },
  },
});

export default App;
