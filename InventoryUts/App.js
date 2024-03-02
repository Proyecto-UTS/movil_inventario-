import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import AuthenticationScreen from './screens/AuthenticationScreen'; 

const uri = 'https://www.uts.edu.co/sitio/wp-content/uploads/2022/02/postal1-entrada.jpg'



export default function App() {
  return (
    <ImageBackground
      source={{ uri: 'https://www.uts.edu.co/sitio/wp-content/uploads/2022/02/postal1-entrada.jpg' }} 
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <AuthenticationScreen />
      </View>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
    width: '100%', 
    height: '100%',
  },
});









