/**
 * @description Pantalla que muestra detalles de usuario
 * @author Thelma.Romero 
 * @version 1.0 - 11/02/2021
 */

/* SE REALIZAN IMPORTACIONES DE COMPONENTES */
import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import PropTypes from 'prop-types';

import ComponenteBotonConIcono from '../componentes/ComponenteBotonConIcono';
import estilosGenerales from '../estilos/EstilosGenerales';
import estilos from '../estilos/EstilosPantallaDetallesUsuario';

/**
* @description Funcion principal de la pantalla detalles de usuario
* @author Thelma.Romero
* @version 1.0 - 11/02/2021
*/
const PantallaDetallesUsuario = ({ route }) => {

    const { usuario } = route.params;


    async function enviarCorreo() {
        //CONSTANTES 
        const paraQuien = usuario.email;
        const titulo = "Prueba React Native SPS";
        const mensaje = "";
        const url =
            "mailto:" + paraQuien + "?subject=" + titulo + "&body=" + mensaje;

        // CONSTANTES PARA ENVIO DE EMAIL 
        const canOpen = Linking.canOpenURL(url);

        //SE VALIDA QUE SEA PERMITIDO 
        if (!canOpen) {
            console.log("Error")
        } else {
            return Linking.openURL(url);
        }

    }

    return (
        <View style={estilosGenerales.contenedorPrincipal}>
            <View style={estilos.contenedorImagen}>
                <Image
                    resizeMode={'contain'}
                    source={{ uri: usuario.avatar }}
                    style={estilos.avatar}
                />
            </View>
            <View style={estilos.contenedorTexto}>
                <Text style={estilos.nombreUsuario}>{usuario.first_name + " " + usuario.last_name}</Text>
                <Text style={estilos.emailUsuario}>{usuario.email}</Text>
            </View>
            <View style={estilos.contenedorBoton}>
                <ComponenteBotonConIcono
                    imagen={require('../recursos/imagenes/email.png')}
                    accionBoton={enviarCorreo}
                    texto={"Enviar correo"}
                />
            </View>
        </View>
    )
}

PantallaDetallesUsuario.propTypes = {
    navigation: PropTypes.any
};


/* SE EXPORTA LA CLASE CON EL NOMBRE TAL CUAL ESTA DEFINIDO EN LA FUNCION PRINCIPAL DE LA CLASE */
export default PantallaDetallesUsuario;