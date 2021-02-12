/**
 * @description Navegacion principal de la app
 * @author Thelma Romero
 * @version 1.0 - 11/02/2021
 */

import React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from '@react-navigation/stack';

import PantallaUsuarios from '../pantallas/PantallaUsuarios';
import PantallaDetallesUsuarios from '../pantallas/PantallaDetalleUsuarios';


//ESTILOS DE LA NAVEGACIÓN GENERAL  
const navigationOptions = {
    headerStyle: {
        backgroundColor: '#f2f2f2',
    },
    headerTintColor: "#130535",
    headerTitleStyle: {
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: 25,
        color: '#130535',
    },
    headerTitleAlign: "center",
    headerBackTitleVisible: false
};

//SE GENERA VARIABLE DE STACK 
const Stack = createStackNavigator();

/**
* @description Funcion principal de la navegacion
* @author Thelma Romero
* @version 1.0 - 11/02/2021
*/
const NavegacionPrincipal = () => {
  
    let initialRouteName = "Inicio";

    return (
        <Stack.Navigator
            initialRouteName={initialRouteName}
            screenOptions={{
                ...navigationOptions,
                title: 'Usuarios',
            }}>
            <Stack.Screen
                name="Inicio"
                component={PantallaUsuarios}
                options={{
                    title: 'Usuarios',
                }}
            />
            <Stack.Screen
                name="Detalles"
                component={PantallaDetallesUsuarios}
                options={{
                    title: 'Detalles',
                }}
            />
            
        </Stack.Navigator>
    );
};

NavegacionPrincipal.propTypes = {
    route: PropTypes.any,
};

//SE EXPORTA LA NAVEGACION DEL USUARIO NO FIRMADO
export default NavegacionPrincipal;
