import React from 'react';
import Login from "../components/Login";
import CrearCuenta1 from "../components/pantallasDeRegistro/crearCuenta1";
import CrearCuenta2 from "../components/pantallasDeRegistro/crearCuenta2";
import CrearCuenta3 from "../components/pantallasDeRegistro/crearCuenta3";
import CrearCuenta4 from "../components/pantallasDeRegistro/crearCuenta4";
import CrearCuenta5 from "../components/pantallasDeRegistro/crearCuenta5";
import InicioSesion from "../components/pantallaInicioSesion/InicioSesion"
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Contraseña from "../components/pantallaInicioSesion/Contraseña";
import HeaderComponent from '../helper/fondoDePantalla';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import HomeUsuario from '../components/home/homeUsuario';
import IndexVaucher from '../components/voucherScreens';
import ARSrceen from '../components/arScreens/ARSrceen';
import TabBar from '../helper/tabBarComponent'
import PerfilGeneral from '../components/perfil/perfilGeneral';
import EditPerfil from '../components/perfil/editPerfil';
import IndexPerfil from '../components/perfil';
import Headerperfil from '../helper/headerperfil';
import HeaderPerfilGeneral from '../helper/headerPerfilGeneral';


const LoginRegistro = createStackNavigator(
  {
    Home: {
      screen: Login,
      navigationOptions: {
        header: null
      }
    },
    registroEmail: {
      screen: CrearCuenta1,
      navigationOptions: {
        headerTransparent:true,
        headerTintColor:"#fff"
      }
    },
    registroContraseña: {
      screen: CrearCuenta2,
      navigationOptions: {
        headerTransparent:true,
        headerTintColor:"#fff"
      }
    },
    fechaNacimiento: {
      screen: CrearCuenta3,
      navigationOptions: {
        headerTransparent:true,
        headerTintColor:"#fff"
      }
    },
    registroGenero: {
      screen: CrearCuenta4,
      navigationOptions: {
        headerTransparent:true,
        headerTintColor:"#fff"
      }
    },
    crearCuenta: {
      screen: CrearCuenta5,
      navigationOptions: {
        headerTransparent:true,
        headerTintColor:"#fff"
      }
    },
    inicioSesion: {
      screen: InicioSesion,
      navigationOptions: {
        headerTransparent:true,
        headerTintColor:"#fff",
        headerStyle:{
          zIndex:0
        }
        
      }
    },
    ReestablecerContraseña: {
      screen: Contraseña,
      navigationOptions: {
        headerTransparent:true,
        headerTintColor:"#fff"
      }
    },
    PerfilGeneral: { screen: PerfilGeneral,navigationOptions: {
      header: props => <HeaderPerfilGeneral {...props} />,
      style:{
        position:"absolute"
      }
    }
  },
  EditarPerfil: { screen: EditPerfil, navigationOptions: {
    header: props => <Headerperfil {...props} />,
    style:{
      position:"absolute"
    }
  }
},
  homeUsuario: {
    screen: createMaterialTopTabNavigator(
      {
        Home: { screen: HomeUsuario},
        Camara: { screen: ARSrceen},
        Perfil: { screen: EditPerfil},
 
      },
      {
      swipeEnabled:true,
      tabBarComponent: props => <TabBar {...props} />,
      tabBarPosition:"bottom",      
    }),
    navigationOptions: {
      header: props => <HeaderComponent {...props} />,
      style:{
        position:"absolute"
      }
    }
  },
  
  },
  {
    initialRouteName: 'Home',
  },

  
);




const AppContainer = createAppContainer(LoginRegistro);
export default AppContainer