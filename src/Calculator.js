import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputButton from './InputButton'


const inputButtons = [
    [1, 2, 3, '/'],
    [4, 5, 6, '*'],
    [7, 8, 9, '-'],
    [0, '.', '=', '+']
];

export default class Calculator extends Component{

    inputNumbers(){
        let views = [];
    
            for (var r = 0; r < inputButtons.length; r ++) {
                let row = inputButtons[r];
    
                let inputRow = [];
                for (var i = 0; i < row.length; i ++) {
                    let input = row[i];
    
                    inputRow.push(
                        <InputButton number={input} key={r + "-" + i} />
                    );
                }
    
                views.push(<View style={styles.inputRow} key={"row-" + r}>{inputRow}</View>)
            }
    
            return views;
        }

    render(){
        return(
            <View style = {styles.container}>
               <View style = {styles.resultDisplay}>
               
               </View>
                <View style = {styles.inputContainer}>
                    {this.inputNumbers()}
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container  : {
        flex:1

    },
    resultDisplay :{
        flex:2,
        backgroundColor:"red"
    },

   inputContainer :{
        flex:8,
        backgroundColor :"green"

    },

    inputRow: {
        flex: 1,
        flexDirection: 'row'
    }

})