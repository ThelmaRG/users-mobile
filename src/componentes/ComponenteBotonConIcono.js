/**
 * @description Componente de boton con icono
 * @author Thelma.Romero 
 * @version 1.0 - 11/02/2021
 */

/* SE REALIZAN IMPORTACIONES DE COMPONENTES */
import React from 'react';
import {Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import estilos from '../estilos/EstilosComponenteBotonConIcono';

/**
* @description Funcion principal del componente
* @author Thelma.Romero
* @version 1.0 - 11/02/2021
*/
const ComponenteBotonConIcono = ({ imagen, accionBoton, texto }) => {
    return (
        <TouchableOpacity
            onPress={accionBoton}
            style={estilos.contenedorCircular}>
            <Image
                resizeMode={'contain'}
                source={imagen}
                style={estilos.imagen}
            />
            <Text style={estilos.texto}>{texto}</Text>
        </TouchableOpacity>
    );
}

ComponenteBotonConIcono.propTypes = {
    imagen: PropTypes.number,
    texto: PropTypes.string,
    accionBoton: PropTypes.func
};


/* SE EXPORTA LA CLASE CON EL NOMBRE TAL CUAL ESTA DEFINIDO EN LA FUNCION PRINCIPAL DE LA CLASE */
export default ComponenteBotonConIcono;