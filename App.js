import React, { Component } from 'react';
import {
  StackNavigator,
} from 'react-navigation';
import StartScreen from './src/screens/start';
  
const App = StackNavigator({
  Home: {
    screen: StartScreen,
    navigationOptions: {
      headerTitle: 'Ceia de Natal',
    },
  },
});

export default App;
