import React from "react";
import { Text, View, Button, StyleSheet, ImageBackground, TextInput, TouchableOpacity } from "react-native";
import { observer, inject } from "mobx-react";

class CrearCuenta1 extends React.Component {
  onChangeEmail = text => {
    this.props.user.email = text;
    this.props.user.validarEmail(text);
  };

  nextView = () => {
    if (this.props.user.emailError.length == 1) {
      this.props.navigation.navigate("registroContraseña");
    } else {
      return null;
    }
  };

  render() { console.log(this.props.user.email)
    return (
      <ImageBackground
        style={styles.imgBackground}
        source={require("../../assets/pexels.jpeg")}
      >
        <View style={styles.container}>
          <Text style={styles.text}>¿Cuál es tu correo electrónico?</Text>
          <TextInput
            onChangeText={text => this.onChangeEmail(text)}
            value={this.props.user.email}
            keyboardType="email-address"
            style={styles.input}
          />
          <View
            style={
              this.props.user.emailError.length == 1 ||
              this.props.user.emailError.length == 0
                ? { display: "none" }
                : styles.textHelper
            }
          >
            <Text
              style={{
                color: "red",
                fontSize: 13,
                textAlign: "center",
                fontWeight: "bold"
              }}
            >
              {this.props.user.emailError}
            </Text>
          </View>
          <Text style={{ color: "#fff", fontSize: 12 }}>
            Tendrás que confirmar esta dirección de correo electrónico
          </Text>
          <View
            style={
              this.props.user.emailError.length == 1 ||
              this.props.user.emailError.length == 0
                ? { marginTop: 75 }
                : { marginTop: 55 }
            }
          >
            <TouchableOpacity
              style={
                this.props.user.emailError.length == 1 ||
                this.props.user.emailError.length == 0
                  ? styles.button
                  : styles.buttonDisabled
              }
              onPress={this.nextView}
            >
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  textAlign: "center",
                  marginTop: 12
                }}
              >
                SIGUIENTE
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default inject("user")(observer(CrearCuenta1));

const styles = StyleSheet.create({
  imgBackground: {
    width: "100%",
    height: "100%"
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    top: "16%",
    left: "5%"
  },
  text: {
    color: "#fff",
    fontSize: 15,
    marginTop: 20,
    marginBottom: 20
  },
  input: {
    height: 40,
    borderRadius: 10,
    backgroundColor: "#fff",
    width: "90%",
    opacity: 0.6,
    marginBottom: 5
  },
  button: {
    width: 170,
    height: 45,
    borderRadius: 20,
    left: "20%",
    backgroundColor: "#2E8B57"
  },
  buttonDisabled: {
    width: 170,
    height: 45,
    borderRadius: 20,
    left: "20%",
    backgroundColor: "#000099"
  },
  textHelper: {
    justifyContent: "center",
    alignItems: "center",
    height: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    width: "57%",
    opacity: 0.5
  }
});
