/**
 * @description Componente que muestra imagen y nombre de usuario
 * @author Thelma.Romero 
 * @version 1.0 - 11/02/2021
 */

/* SE REALIZAN IMPORTACIONES DE COMPONENTES */
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import estilos from '../estilos/EstilosComponenteTarjetaDetalles';

/**
* @description Funcion principal de la pantalla de usuarios
* @author Thelma.Romero
* @version 1.0 - 11/02/2021
*/
const ComponenteTarjetaDetalles = ({ nombre, imagen, apellido, accionTarjeta }) => {
    return (
        <TouchableOpacity style={estilos.contenedorPrincipal} onPress={accionTarjeta}>
            <View style={estilos.contenedorImagen}>
                <Image
                    resizeMode={'contain'}
                    source={{ uri: imagen }}
                    style={estilos.imagen}
                />
            </View>
            <View style={estilos.contenedorInformacion}>
                <Text style={estilos.texto}>{nombre + " " + apellido}</Text>
            </View>
        </TouchableOpacity>
    );
}

ComponenteTarjetaDetalles.propTypes = {
    nombre: PropTypes.string,
    imagen: PropTypes.string,
    apellido: PropTypes.string, 
    accionTarjeta: PropTypes.func
};


/* SE EXPORTA LA CLASE CON EL NOMBRE TAL CUAL ESTA DEFINIDO EN LA FUNCION PRINCIPAL DE LA CLASE */
export default ComponenteTarjetaDetalles;