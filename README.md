# Prueba Técnica React Native SPSolutions

## Índice de contenido

- [Prueba Técnica React Native SPSolutions](#prueba-técnica-react-native-spsolutions)
  - [Índice de contenido](#índice-de-contenido)
  - [Requisitos: Tecnologías / IDES / Sistemas Operativos](#requisitos-tecnologías--ides--sistemas-operativos)
  - [Estructura de carpetas del proyecto](#estructura-de-carpetas-del-proyecto)
  - [Despliegue de proyecto en Android con Windows](#despliegue-de-proyecto-en-android-con-windows)


## Requisitos: Tecnologías / IDES / Sistemas Operativos

- Node JS (versión 10.16.3)
- npm (versión 6.14.4)
- react-native-cli (versión 2.0.1)
- gradlew (versión 6.0.1)
- java (versión 1.8.0_231) ó OpenJDK8 [LTS] OpenJ9
- Visual Studio Code (versión: 1.45.1)
- Android Studio (versión 3.6.3)

## Estructura de carpetas del proyecto

- src
	-	**componentes** (Componentes desarrollados en React Native)
    -	**estilos** (Estilos de elementos visuales dentro de cada pantalla o componente)
	-	**navegaciones** (Controlan las navegaciones entre pantallas y componentes)
	-	**pantallas** (Pantallas / Vistas)
	-	**recursos** (Recursos multimedia)
	-	**servicios** (Clases de llamadas y consultas de Servicios REST)
	-	**utilerias** (Constantes, valores, propiedades que serán utilizados en cualquier parte del código fuente)
				

## Despliegue de proyecto en Android con Windows

- Es requerido contar con un emulador o bien un dispositivo físico listo para el despliegue. [Consultar el siguiente enlace: [https://reactnative.dev/docs/running-on-device](https://reactnative.dev/docs/running-on-device)]
- Luego de contar con un emulador o dispositivo físico listo, ejecutar en el siguiente orden los comandos en una terminal BASH:
    - OPCIÓN 1: Sobre la ruta /users-mobile/, ejecutar el siguiente comando: npm install && cd android/ && ./gradlew clean && cd .. && react-native run-android
    - OPCIÓN 2: Sobre la ruta /users-mobile/, ejecutar en el siguiente orden los comandos:
        - 1. npm install
        - 2. cd android/
        - 3. ./gradlew clean
        - 4. cd ..
        - 5. react-native run-android

