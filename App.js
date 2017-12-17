import React, { Component } from 'react';
import {
  StackNavigator,
} from 'react-navigation';
import RecipesScreen from './src/screens/recipes';
import AddRecipeScreen from './src/screens/add-recipe';
  
const App = StackNavigator({
  Home: {
    screen: RecipesScreen,
    navigationOptions: {
      headerTitle: 'Ceia de Natal',
    },
  },
  AddRecipe: {
    screen: AddRecipeScreen,
    navigationOptions: {
      headerTitle: 'Nova Receita',
    },
  },
});

export default App;
