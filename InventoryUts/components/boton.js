import React from 'react';
import {  Text, TouchableOpacity, StyleSheet } from 'react-native';


export function BotonPrestamo(props){
    const {onPress, text}= props
    return (
        <TouchableOpacity
            style = {{
                ...styles.button,
                backgroundColor: '#0a0a0a'
            }}
            onPress={onPress}
        >
            <Text
                style ={{
                    ...styles.buttonText,
                    color: '#f1f1f1'
                }}
            > 
                {text}
            </Text>
        </TouchableOpacity>
    )
};


  
const styles = StyleSheet.create({
    button:{
        alignSelf: 'center',
        borderRadius: 10,
        paddingVertical: 15,
        width: '35%',
        marginVertical: 8,
        marginHorizontal: 10
    },

    buttonText: {
        textAlign: 'center',
    }
 })


