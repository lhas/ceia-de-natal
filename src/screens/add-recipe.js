import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
} from 'react-native';
import firebase from 'react-native-firebase';
import { Container, Header, View, Button, Icon, Form, Item, Input, H1, H2, H3, Text, Card, CardItem, Right, List, ListItem, Body, Thumbnail, Left, } from 'native-base';

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

export default class AddRecipeScreen extends Component {
  state = {
    name: '',
    ingredient: '',
    ingredients: [],
  };

  handleChangeIngredient = (text) => {
    this.setState({
      ingredient: text,
    });
  }

  handleSubmitIngredient = () => {
    const ingredient = {
      name: this.state.ingredient,
    };
    this.setState({
      ingredient: '',
      ingredients: [
        ...this.state.ingredients,
        ingredient,
      ],
    });
  }

  handleDeleteIngredient = (name) => {
    const ingredients = this.state.ingredients.filter(v => v.name !== name);
    this.setState({
      ingredients,
    });
  }

  render() {
    const { recipes, ingredient, ingredients } = this.state;
    return (
      <Container style={{ padding: 20 }}>
        <Form>
          <Item>
            <Input placeholder="Nome" />
          </Item>
          <Item>
            <View style={{ flex: 1, flexDirection: 'row', marginTop: 20, }}>
              <Input value={this.state.ingredient} onChangeText={(text) => this.handleChangeIngredient(text)} placeholder="Nome do Ingrediente" />
              <Button onPress={this.handleSubmitIngredient}>
                <Text><Icon name="add" style={{color: '#FFF'}} /></Text>
              </Button>
            </View>
          </Item>
        </Form>
        <List>
          {ingredients.map(v => (
          <ListItem key={v.name} avatar>
            <Body>
              <Text note>{v.name}</Text>
            </Body>
            <Right>
              <Button onPress={() => this.handleDeleteIngredient(v.name)} danger>
                <Text><Icon name="trash" style={{color: '#FFF'}} /></Text>
              </Button>
            </Right>
          </ListItem>
          ))}
        </List>
    </Container>
    );
  }
}