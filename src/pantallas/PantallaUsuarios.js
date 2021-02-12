/**
 * @description Pantalla de usuarios que muestra lista de usuarios
 * @author Thelma.Romero 
 * @version 1.0 - 11/02/2021
 */

/* SE REALIZAN IMPORTACIONES DE COMPONENTES */
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, RefreshControl } from 'react-native';
import PropTypes from 'prop-types';
import ComponenteTarjetaDetalles from '../componentes/ComponenteTarjetaDetalles';
import { recuperarUsuarios } from '../servicios/ServicioUsuarios';
import ComponenteAlertaModal from '../componentes/ComponenteAlerta';

import estilos from '../estilos/EstilosGenerales';

/**
* @description Funcion principal de la pantalla de usuarios
* @author Thelma.Romero
* @version 1.0 - 11/02/2021
*/
const PantallaUsuarios = ({ navigation }) => {

    const [arregloUsuarios, setArregloUsuarios] = useState([]);
    const [mostrarAlerta, setMostrarAlerta] = useState(false);
    const [mensajeAlerta, setMensajeAlerta] = useState('');

    useEffect(() => {

        mostrarUsuarios();

    }, []);

    async function mostrarUsuarios() {
        await recuperarUsuarios().then(respuesta => {
            setArregloUsuarios(respuesta);
        }).catch(error => {
            console.log("ERROR PANTALLA USUARIOS: " + error);
            setMensajeAlerta(error);
            setMostrarAlerta(true);
        });
    }


    
    /**REFRESH CONTROL */
    const [refreshing, setRefreshing] = React.useState(false);

    /**FUNCION QUE REFRESCA LA PAGINA */
    const onRefresh = React.useCallback(() => {
        /**SE REFRESCA LA PANTALLA */
        setRefreshing(true);
        wait(3000).then(() => setRefreshing(false));
    }, [wait]);


    // eslint-disable-next-line react-hooks/exhaustive-deps
    function wait(timeout) {
        return new Promise(resolve => {
            {
                /** SE MANDA A LLAMAR AL SERVICIOS*/
                mostrarUsuarios()

            }
            setTimeout(resolve, timeout);
        });
    }

    return (
        <View style={estilos.contenedorPrincipal}>
            <FlatList
                contentContainerStyle={estilos.contenedorFlatList}
                data={arregloUsuarios}
                horizontal={false}
                showsVerticalScrollIndicator={false}
                numColumns={1}
                renderItem={
                    ({ item }) =>
                        <ComponenteTarjetaDetalles
                            nombre={item.first_name}
                            apellido={item.last_name}
                            imagen={item.avatar}
                            accionTarjeta={() => navigation.navigate("Detalles", { usuario: item })}
                        />

                }
                keyExtractor={item => item.id.toString()}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                ListEmptyComponent={
                    <View>
                        <Text>Sin resultados</Text>
                    </View>
                }
            />
            <ComponenteAlertaModal
                mostrarModal={mostrarAlerta}
                mensaje={mensajeAlerta}
                titulo={'Uh Oh!'}
                accionCerrar={()=>setMostrarAlerta(false)}
            />
        </View>
    )
}

PantallaUsuarios.propTypes = {
    navigation: PropTypes.any
};


/* SE EXPORTA LA CLASE CON EL NOMBRE TAL CUAL ESTA DEFINIDO EN LA FUNCION PRINCIPAL DE LA CLASE */
export default PantallaUsuarios;