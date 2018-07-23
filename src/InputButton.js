import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class InputButton extends Component {
    render(){
        return (
            <View style = {styles.inputbuttonstyle}>
                <Text style={styles.inputbuttonText}>{this.props.number}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    inputbuttonstyle:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#91AA9D'
    },

    inputbuttonText : {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white'
    }
})