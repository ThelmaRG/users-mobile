import React from "react";
import { Modal, Text, View } from "react-native";
import PropTypes from 'prop-types';
import estilos from "../estilos/EstilosComponenteAlerta";

const ComponenteAlertaModal = ({ mostrarModal, accionCerrar, titulo, mensaje }) => {
    return (
        <View style={estilos.contenedorPrincipal}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={mostrarModal}
                onRequestClose={accionCerrar}
            >
                <View style={estilos.contenedorPrincipal}>
                    <View style={estilos.modal}>
                        <Text>{titulo}</Text>
                        <Text style={estilos.modalTexto}>{mensaje}</Text>
                    </View>
                </View>
            </Modal>

        </View>
    );
};


ComponenteAlertaModal.propTypes = {
    titulo: PropTypes.string,
    mostrarModal: PropTypes.bool,
    accionCerrar: PropTypes.func,
    mensaje: PropTypes.string
};


export default ComponenteAlertaModal;

