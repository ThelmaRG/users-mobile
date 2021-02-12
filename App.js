/**
 * @description Clase principal global de la app
 * @author Thelma Romero
 * @version 1.0 - 11/02/2021
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RNBootSplash from "react-native-bootsplash";

import NavegacionPrincipal from './src/navegaciones/NavegacionPrincipal';


const Stack = createStackNavigator();

const App = () => {

  RNBootSplash.hide({ fade: true, duration: 250 });

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="NavegacionPrincipal"
          component={NavegacionPrincipal}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
