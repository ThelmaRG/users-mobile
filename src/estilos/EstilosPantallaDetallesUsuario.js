/**
 * Hoja de estilos pantalla detalles usuario
 * @author Thelma Romero
 * @version 1.0 - 12/02/2021
 */


// SE DECLARAN ESTILOS
export default {
    contenedorImagen: {
        flex: 4,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        width: 200,
        height: 200,
        borderRadius: 50,
        margin: 5
    },
    contenedorTexto: {
        flex: 2,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    contenedorBoton: {
        flex: 4,
        backgroundColor: '#f2f2f2',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    nombreUsuario: {
        fontSize: 25, 
        fontWeight: 'bold',
        color: '#130535'
    },
    emailUsuario:{
        fontSize: 20, 
        marginTop: 30,
        color: '#130535'
    }

};
