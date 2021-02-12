/**
 * Hoja de estilos tarjeta detalles
 * @author Thelma Romero
 * @version 1.0 - 12/02/2021
 */


// SE DECLARAN ESTILOS
export default {
    contenedorPrincipal: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        marginVertical: 5
    },
    contenedorImagen: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    contenedorInformacion: {
        flex: 7,
        padding: 0,
        marginLeft: 20
    },
    imagen:{
        width: 80,
        height: 80,
        borderRadius: 50, 
        margin: 5 
    },
    texto:{
        fontSize: 18,
        color: '#130535',
        fontWeight: 'bold'
    }

};
