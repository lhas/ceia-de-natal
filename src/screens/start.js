import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
} from 'react-native';
import firebase from 'react-native-firebase';
import { Container, Header, View, Button, Icon, Fab } from 'native-base';

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
      <Container>
      <View style={{ flex: 1, padding: 20 }}>
      {Object.keys(recipes).map(v => (
        <View style={styles.recipeCard} key={recipes[v].name}>
          <Text>{recipes[v].name}</Text>
        </View>
      ))}
        <Fab
          active={this.state.active}
          direction="up"
          containerStyle={{ }}
          style={{ backgroundColor: 'green' }}
          position="bottomRight"
          onPress={() => this.props.navigation.navigate('AddRecipe')}>
          <Icon name="add" />
        </Fab>
      </View>
    </Container>
    );
  }
}