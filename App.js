// import React from '../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import React, { Component } from 'react'
import {  View ,Text} from 'react-native';
import Calculator from './src/Calculator'

export default class App extends Component {
  render() {
    return (
      <View style = {{flex:1}}>
        <Calculator />
      </View>
    );
  }
}

