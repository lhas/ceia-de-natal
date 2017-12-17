import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
} from 'react-native';
import firebase from 'react-native-firebase';
import { Container, Content, Header, View, Button, Icon, Fab, Left, Right, Card, CardItem, List, ListItem, SwipeRow, H2, Body, } from 'native-base';

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

  render() {
    const { recipes } = this.state;
    return (
      <Container>
      <H2 style={{margin: 20}}>Sua Cesta de Receitas</H2>
      <Content>
      <List>
        <SwipeRow
        body={
          <View style={{padding: 5}}>
            <Text>Você ainda não possui nenhuma receita</Text>
          </View>
        }
      />
      </List>
      </Content>
      <H2 style={{ margin: 20, }}>Receitas Disponíveis</H2>
      <Content>
      <List>
        {Object.keys(recipes).map((v) => (
          <SwipeRow
          key={recipes[v].name}
          rightOpenValue={-75}
          body={
            <View style={{padding: 5}}>
              <Text>{recipes[v].name}</Text>
            </View>
          }
          right={
            <Button danger onPress={() => alert('Trash')}>
              <Icon active name="trash" />
            </Button>
          }
        />
        ))}
        </List>
      </Content>
      <Fab
        active={this.state.active}
        direction="up"
        containerStyle={{ }}
        style={{ backgroundColor: 'green' }}
        position="bottomRight"
        onPress={() => this.props.navigation.navigate('AddRecipe')}>
        <Icon name="add" />
      </Fab>
    </Container>
    );
  }
}