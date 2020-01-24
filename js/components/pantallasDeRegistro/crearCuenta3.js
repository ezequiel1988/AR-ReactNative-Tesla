import React from "react";
import { Text, View, Button, StyleSheet, ImageBackground, TextInput, TouchableOpacity } from "react-native";
import { observer, inject } from "mobx-react";
import FormatDate from "../../helper/FormatDate";

class CrearCuenta3 extends React.Component {
  onChangeDate = date => {
    this.props.user.fechaNac = date;
  };

  nextView = () => {
    this.props.navigation.navigate("registroGenero");
  };
  render() {
    return (
      <ImageBackground
        style={styles.imgBackground}
        source={require("../../assets/pexels.jpeg")}
      >
        <View style={styles.container}>
          <Text style={styles.text}>¿Cuál es tu fecha de nacimiento?</Text>
          <FormatDate
            style={{
              width: 300,
              height: 40,
              borderRadius: 10,
              backgroundColor: "#fff",
              opacity: 0.6
            }}
            value={this.props.user.fechaNac}
            onChange={text => this.onChangeDate(text)}
            placeholder={"DD/MM/YYYY"}
          />
          <Text style={{ color: "#fff", fontSize: 12 }}></Text>
          <View style={{marginTop:"15%"}}>
            <TouchableOpacity style={styles.button} onPress={this.nextView}>
              <Text style={{ color: "#fff", fontWeight: "bold", textAlign:"center", marginTop:12 }}>
                SIGUIENTE
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default inject("user")(observer(CrearCuenta3));

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
    marginBottom: 10
  },
  button: {
    width: 170,
    height: 45,
    borderRadius: 20,
    left: "20%",
    backgroundColor: "#2E8B57",
  }
});
