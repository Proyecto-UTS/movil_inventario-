import { View, StyleSheet } from 'react-native'
import React from 'react'

const layouts = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        padding:20,
        flex:1,
        width: '100%',
        alignItems: 'center',
        
    }
})

export default layouts