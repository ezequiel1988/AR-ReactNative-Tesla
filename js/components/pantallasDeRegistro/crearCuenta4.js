import React from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  ImageBackground,
  Picker, TouchableOpacity
} from "react-native";
import { observer, inject } from "mobx-react";

class CrearCuenta4 extends React.Component {
  onChangeGender = value => {
    this.props.user.gender = value;
  };

  nextView = () => {
    this.props.navigation.navigate("crearCuenta");
  };
  render() {
    return (
      <ImageBackground
        style={styles.imgBackground}
        source={require("../../assets/pexels.jpeg")}
      >
        <View style={styles.container}>
          <Text style={styles.text}>¿Cuál es tu género?</Text>
          <Picker
            type="dropdown"
            style={styles.picker}
            selectedValue={this.props.user.gender}
            onValueChange={itemValue => this.onChangeGender(itemValue)}
          >
            <Picker.Item label="Masculino" value={1} />
            <Picker.Item label="Femenino" value={2} />
            <Picker.Item label="No Binario" value={3} />
          </Picker>
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
export default inject("user")(observer(CrearCuenta4));

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
  picker: {
    height: 40,
    borderRadius: 10,
    backgroundColor: "#fff",
    width: "90%",
    opacity: 0.6,
    marginBottom: 10,
    overflow: "hidden"
  },
  button: {
    width: 170,
    height: 45,
    borderRadius: 20,
    left: "20%",
    backgroundColor: "#2E8B57",
  }
});
