import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import homeScreens from '../screens/homescreens'
import Logout from './logout';

import {Image, View, Text} from "react-native";
import icon from './icon';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DrawerItemList } from "@react-navigation/drawer"

const Drawer = createDrawerNavigator();

function Home() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
      <Drawer.Screen name="Inicio" 
      options={{
        drawerIcon: ()=>(
          <Image
            source={icon.casa}
            
            resizeMode='contain'
            style={{
              height:24,
              width:24,
              tintColor:"#808080"
            }}
          />
        )
      }}
      component={homeScreens} />

<Drawer.Screen name="cerrar sesion" 
      options={{
        drawerIcon: ()=>(
          <Image
            source={icon.casa}
            
            resizeMode='contain'
            style={{
              height:24,
              width:24,
              tintColor:"#808080"
            }}
          />
        )
      }}
      component={Logout} />
      </Drawer.Navigator>
      
    </NavigationContainer>
  );
}

export default Home;