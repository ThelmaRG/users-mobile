import NetInfo from "@react-native-community/netinfo";

//VARIABLES 
let respuestaErrorConexion = {}


/**
 * Metodo para validar la conexion a internet
 * @author Thelma Romero
 * @version 1.0 - 11/02/2021
 * @returns promesa con tipo de conexion a internet
 */
export function revisarConexion(){

    return new Promise((resolve, reject) => {

        NetInfo.fetch().then(state => {
            if (state.isConnected && state.isInternetReachable) {
                console.log("state")
                //SE RETORNA UN OBJETO PARA VALIDAR LA CONEXION
                let respuestaExitosa = {
                    tipoConexion: state.type,
                }
                //SE RETORNA UN RESOLVE
                console.log("state")
                resolve(respuestaExitosa);
            } else {
                console.log('no conexion')
                //SE ARMA OBJETO DE RESPUESTA
                respuestaErrorConexion = {
                    msgErrorConexionTitulo: 'Error de conexión',
                    mensajeConexion: 'Asegurate de estar conectado a una red con internet'
                }

                //SE ENVIA REJECT CON ERROR
                reject(respuestaErrorConexion)
            }
        });
    });
}