import React, { Component } from "react";
import AppContainer from "./js/routes/Routes";
import { Provider } from "mobx-react";
import RegistroUsuario from "./js/store/RegistroUsuario";
import LoginUsuarioStore from "./js/store/LoginUsuario";
import assetsStore from "./js/store/AssetsStore";
import PerfilGeneral from "./js/components/perfil/perfilGeneral";
import EditPerfil from "./js/components/perfil/editPerfil";

export default class App extends Component {
  
  state = {
          store: assetsStore
        }


  render() { 
    return (
      <Provider
        assets={this.state.store}
        login={new LoginUsuarioStore()}
        user={new RegistroUsuario()}
      >
        <AppContainer  screenProps={assetsStore} />
       
      {/* <PerfilGeneral /> */}
        {/* <EditPerfil /> */}
      </Provider>
    );
  }

}
