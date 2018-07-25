import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

export default class InputButton extends Component {
    render(){
        return (
            // <View style = {styles.inputbuttonstyle}>
             <TouchableHighlight style={styles.inputbuttonstyle}
                                underlayColor="#193441"
                                onPress={this.props.onPress}>
                <Text style={styles.inputbuttonText}>{this.props.number}</Text>
            </TouchableHighlight>
            // </View>
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