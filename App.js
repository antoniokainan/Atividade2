import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import Votacao from './Votacao';

export default class App extends Component{

  render(){
    return (
      <View style={styles.container}>
        <Votacao></Votacao>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
