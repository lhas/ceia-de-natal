import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import firebase from 'react-native-firebase';

export default class StartScreen extends Component {
  state = {
    isAuthenticated: false,
  };

  componentDidMount() {
    firebase.auth().signInAnonymously()
      .then(() => {
        console.log('logou!');
        this.setState({
          isAuthenticated: true,
        });
      });
  }

  handleStartButton = () => {

  }

  render() {
    // If the user has not authenticated
    if (!this.state.isAuthenticated) {
      return <Text>Loading...</Text>;
    }
    return (
      <View>
        <Text>
          Ceia de Natal
        </Text>
        <Button title="Iniciar" onPress={this.handleStartButton} />
      </View>
    );
  }
}