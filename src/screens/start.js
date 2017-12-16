import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import firebase from 'react-native-firebase';

const styles = {
  startButton: {
  },
  container: {
    padding: 20,
  },
  recipeCard: {
    backgroundColor: '#FFF',
    marginTop: 10,
    marginBottom: 10,
    padding: 15,
    elevation: 4,
  }
};

export default class StartScreen extends Component {
  state = {
    recipes: {},
  };

  async componentDidMount() {
    await this.fetchRecipes();
  }

  async fetchRecipes() {
    const recipes = await firebase.database().ref('recipes').once('value');
    this.setState({
      recipes: recipes.val(),
    });
  }

  handleStartButton = () => {

  }

  render() {
    const { recipes } = this.state;
    return (
      <View style={styles.container}>
        <Text>Receitas:</Text>
        {Object.keys(recipes).map(v => (
          <View style={styles.recipeCard} key={recipes[v].name}>
            <Text>{recipes[v].name}</Text>
          </View>
        ))}
      </View>
    );
  }
}