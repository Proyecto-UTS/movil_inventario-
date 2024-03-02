import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function BotonAzure({ handleLogout }) {
  return (
    <View onPress={handleLogout}>
      <Text style={styles.customButton}>Cerrar Sesión</Text>
    </View>
  );
}


const styles = StyleSheet.create({
    customButton: {
      backgroundColor: 'green',
      borderRadius: 10,
      padding: 13,
      alignItems: 'center',
      width: 200,
    },
    buttonText: {
      color: 'white',
      fontSize:17,
    },
  });
export default BotonAzure;
