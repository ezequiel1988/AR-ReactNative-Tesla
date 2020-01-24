import React from "react";
import { Text, View, Button, StyleSheet, ImageBackground, TextInput, TouchableOpacity } from "react-native";
import { observer, inject } from "mobx-react";
import { Icon } from "native-base";

class CrearCuenta2 extends React.Component {
  onChangePass = text => {
    this.props.user.password = text;
    this.props.user.validarPassword(text);
  };
  nextView = () => {
    if (this.props.user.passError.length == 1) {
      this.props.navigation.navigate("fechaNacimiento");
    } else {
      return null;
    }
  };
  render() {
    return (
      <ImageBackground
        style={styles.imgBackground}
        source={require("../../assets/pexels.jpeg")}
      >
        <View style={styles.container}>
          <Text style={styles.text}>Elige una contraseña</Text>
          <TextInput
            onChangeText={text => this.onChangePass(text)}
            value={this.props.user.password}
            textContentType="password"
            secureTextEntry={this.props.user.showPass}
            style={styles.input}
          />
          <View style={styles.icon}>
            <Icon
              color="grey"
              size={24}
              onPress={() =>
                (this.props.user.showPass = !this.props.user.showPass)
              }
              name={this.props.user.showPass ? "ios-eye" : "ios-eye-off"}
            />
          </View>
          <View
            style={
              this.props.user.passError.length == 1 ||
              this.props.user.passError.length == 0
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
              {this.props.user.passError}
            </Text>
          </View>
          <View
            style={
              this.props.user.passError.length == 1 ||
              this.props.user.passError.length == 0
                ? { marginTop: 70 }
                : { marginTop: 50 }
            }
          >
            <TouchableOpacity
              style={
                this.props.user.passError.length == 1 ||
                this.props.user.passError.length == 0
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
export default inject("user")(observer(CrearCuenta2));

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
    height: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    width: "60%",
    opacity: 0.5,
    bottom: "4%"
  },
  icon: {
    left: "80%",
    bottom: 38
  }
});
