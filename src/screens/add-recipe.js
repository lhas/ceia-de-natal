import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
} from 'react-native';
import firebase from 'react-native-firebase';
import { Container, Content, View, Button, Icon, Form, Item, Input, H1, H2, H3, Text, Card, CardItem, Right, List, ListItem, Body, Thumbnail, Left, } from 'native-base';

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
    
  handleChangeName = (text) => {
    this.setState({
      name: text,
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

  async handleSubmit() {
    firebase.database().ref(`recipes/${this.state.name}`).set(this.state).then(() => {
      this.props.navigation.navigate('Home');
    });
  }

  render() {
    const { recipes, ingredient, ingredients } = this.state;
    return (
    <Container style={{ padding: 20 }}>
      <Content>
        <Form>
          <Item>
            <Input value={this.state.name} onChangeText={(text) => this.handleChangeName(text)} placeholder="Nome" />
          </Item>
          <Item>
            <View style={{ flex: 1, flexDirection: 'row', marginTop: 20, }}>
              <Input value={this.state.ingredient} onChangeText={(text) => this.handleChangeIngredient(text)} placeholder="Nome do Ingrediente" />
              <Button transparent light onPress={this.handleSubmitIngredient}>
                <Text><Icon name="add" /></Text>
              </Button>
            </View>
          </Item>
        </Form>
        <List elevation={2} style={{ marginTop: 20, marginBottom: 20 }}>
          {ingredients.map(v => (
          <ListItem elevation={10} key={v.name} avatar>
            <Body style={{ borderBottomWidth: 0 }}>
              <Text>{v.name}</Text>
              <Text note>Ingrediente</Text>
            </Body>
            <Right style={{ borderBottomWidth: 0 }}>
              <Button transparent light onPress={() => this.handleDeleteIngredient(v.name)}>
                <Text><Icon name="trash" style={{color: '#f44336'}} /></Text>
              </Button>
            </Right>
          </ListItem>
          ))}
        </List>
        <Button style={{marginLeft: 20}} onPress={() => this.handleSubmit()} full success><Text>Adicionar Receita</Text></Button>
      </Content>
    </Container>
    );
  }
}