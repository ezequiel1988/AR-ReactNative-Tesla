import React from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";
import { Icon } from "native-base";
import { observer, inject } from "mobx-react";
import Modal from "react-native-modalbox";
import { observable } from "mobx";
import FetchUser from "../../restProviders/peticiones";

class InicioSesion extends React.Component {

  constructor() {
    super();
    this.state = {
      mostrarSpinner : true,
      
    }
    this.getComponent = this.getComponent.bind(this);
    this.getSpinner = this.getSpinner.bind(this);
  }

  onChangeEmail = text => {
    this.props.assets.email = text;
  };

  onChangePassword = text => {
    this.props.assets.password = text;
    
  };

 loginUser() {
        this.setState({mostrarSpinner: false});
        this.props.assets.guardarSesionEnStorage();
        setTimeout(() => {
          this.props.navigation.navigate("homeUsuario");
          this.setState({mostrarSpinner: true});
        }, 2000)
}
  render() {
    if (this.state.mostrarSpinner) {
      return this.getComponent()
    } else {
      return this.getSpinner()
    }
  }

    getComponent() {
    return (
      <ImageBackground
        style={styles.imgBackground}
        source={require("../../assets/pexels.jpeg")}
      >
        <View style={styles.container}>
          <View>
            <Text
              style={{
                left: "25%",
                fontWeight: "bold",
                fontSize: 25,
                color: "#fff",
                marginBottom: 15
              }}
            >
              Iniciar sesión
            </Text>
          </View>
          <Text style={styles.text}>Correo electrónico</Text>
          <TextInput
            onChangeText={text => this.onChangeEmail(text)}
            value={this.props.assets.email}
            name="email"
            keyboardType="email-address"
            style={styles.input}
          />
          <Text style={{ color: "#fff", fontSize: 15, marginTop: 15 }}>
            Contraseña
          </Text>
          <TextInput
            onChangeText={text => this.onChangePassword(text)}
            value={this.props.assets.password}
            name="password"
            secureTextEntry={this.props.assets.showPass}
            textContentType="password"
            style={styles.input}
          />
          <View style={styles.icon}>
            <Icon
              color="grey"
              size={24}
              onPress={() =>
                (this.props.assets.showPass = !this.props.assets.showPass)
              }
              name={this.props.assets.showPass ? "ios-eye" : "ios-eye-off"}
            />
          </View>
          <View style={{ marginTop: "15%" }}>
            <TouchableOpacity style={styles.button} onPress={()=> this.loginUser()}>
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  textAlign: "center",
                  marginTop: 12
                }}
              >
                INICIAR SESIÓN
              </Text>
            </TouchableOpacity>
          </View>
         
        </View>
        <Modal
          style={[styles.modal, styles.modal3]}
          position={"center"}
          ref={"modal3"}
          isOpen={this.props.assets.modalVisible}
        >
          <Text
            style={styles.textModal}
          >{`*${this.props.assets.errorMessage}`}</Text>
        </Modal>
      </ImageBackground>
    );
  }


  getSpinner() {
    return <ImageBackground
            style={styles.imgBackground}
            source={require("../../assets/pexels.jpeg")}
          >
          <View style={styles.spinnerContainer}>
            <View style={styles.spinner}>
              <Image style={{width:65, height:65, marginLeft:15, marginTop:15}} source={require("../../assets/spinner.gif")} />
            </View>
          </View>
        </ImageBackground>

  }
}

export default inject("assets")(observer(InicioSesion));

const styles = StyleSheet.create({
  imgBackground: {
    width: "100%",
    height: "100%"
  },
  container: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    top: "10%",
    left: "5%"
  },
  text: {
    color: "#fff",
    fontSize: 15,
    marginTop: 20
  },
  textModal: {
    color: "red",
    fontSize: 15,
    fontWeight: "bold"
  },
  input: {
    height: 40,
    borderRadius: 10,
    backgroundColor: "#fff",
    width: "90%",
    opacity: 0.6,
    marginBottom: 10
  },
  button: {
    width: 170,
    height: 40,
    borderRadius: 20,
    left: "20%",
    backgroundColor: "#4682b4"
  },
  buttonModal: {
    width: 170,
    height: 45,
    borderRadius: 20,
    backgroundColor: "#9932cc",
    marginTop: 10
  },
  modal: {
    justifyContent: "center",
    alignItems: "center"
  },
  modal3: {
    height: 200,
    width: 250,
    borderRadius: 15
  },
  icon: {
    left: "80%",
    bottom: 42
  },
  spinnerContainer: {
    flex:1,
    flexDirection:"row",
    justifyContent:"center",
    alignContent:"center",
   
  },
  spinner: {
    width:100,
    height:100,
    top: "60%"
  }
});
