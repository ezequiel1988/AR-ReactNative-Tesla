import React from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity
} from "react-native";
import { observer, inject } from "mobx-react";

class CrearCuenta5 extends React.Component {
  onChangeName = name => {
    this.props.user.name = name;
  };

  nextView = () => {
    this.props.user.postUser();
    this.props.navigation.navigate("Home");
  };
  render() {
    return (
      <ImageBackground
        style={styles.imgBackground}
        source={require("../../assets/pexels.jpeg")}
      >
        <View style={styles.container}>
          <Text style={styles.text}>Cómo te llamas?</Text>
          <TextInput
            onChangeText={text => this.onChangeName(text)}
            value={this.props.user.name}
            textContentType="emailAddress"
            style={styles.input}
          />
          <Text style={{ color: "#fff", fontSize: 12 }}>
            Este nombre aparecerá en la cuenta de la app
          </Text>
          <View style={{ marginTop: "15%" }}>
            <TouchableOpacity style={styles.button} onPress={this.nextView}>
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  textAlign: "center",
                  marginTop: 12
                }}
              >
                CREAR CUENTA
              </Text>
            </TouchableOpacity>
          </View>
         
        </View>
      </ImageBackground>
    );
  }
}
export default inject("user")(observer(CrearCuenta5));

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
    top: "20%",
    left: "5%"
  },
  text: {
    color: "#fff",
    fontSize: 15
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
    height: 45,
    borderRadius: 20,
    left: "20%",
    backgroundColor: "#2E8B57"
  }
});
