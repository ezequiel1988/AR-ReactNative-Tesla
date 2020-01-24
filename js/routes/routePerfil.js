import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PerfilGeneral from '../components/perfil/perfilGeneral';
import EditPerfil from '../components/perfil/editPerfil';
import HeaderComponent from '../helper/fondoDePantalla';
import InicioSesion from '../components/pantallaInicioSesion/InicioSesion';

const perfil = createStackNavigator(
    {
    
      inicioDeSesion: {screen: InicioSesion,
        navigationOptions: {
          headerTransparent:true,
          headerTintColor:"#fff",
          headerStyle:{
            zIndex:0
          }
          
        }},
      PerfilGeneral: { screen: PerfilGeneral,navigationOptions: {
        header: props => <HeaderComponent {...props} />,
        style:{
          position:"absolute"
        }
      }
    },
      EditarPerfil: { screen: EditPerfil, navigationOptions: {
        header: props => <HeaderComponent {...props} />,
        style:{
          position:"absolute"
        }
      }
    },
     
    },
    {
      mode: 'modal'
    });

    const PerfilContainer = createAppContainer(perfil);
    export default PerfilContainer;