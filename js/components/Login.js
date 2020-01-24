import React from "react";
import { Text, View, StyleSheet, ImageBackground,TouchableOpacity, Image } from "react-native";
import { observer, inject } from "mobx-react";

class Login extends React.Component {

  render() {
    return (
    
      <ImageBackground
        style={styles.imgBackground}
        source={require("../assets/pexels.jpeg")}>
        <View style={styles.container}>
          <Text style={styles.parrafo}>Todos los días una aventura</Text>
          <Text style={styles.parrafo}>por descubrir,</Text>
          <Text style={styles.parrafo}>Encuentra y captura todo eso</Text>
          <Text style={styles.parrafo}>que te gusta.</Text>
        </View>

        <View style={{ bottom: "10%", justifyContent:'center', alignContent:'center', alignItems:'center' }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("registroEmail")}
            style={{ height: 40, backgroundColor: "#c71585", width: "50%", borderRadius:20, marginBottom:20 }}
          >
            <Text
              style={{
                fontWeight: 'bold',
                color: "#fff",
               textAlign:'center',
               textAlignVertical:'center',
               top:10
              }}
            >
              REGISTRATE GRATIS
            </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={{ height: 40, backgroundColor: "#4682b4", width: "50%", borderRadius:20 }}
          >
            <Text
              style={{
                fontWeight: "600",
                color: "#fff",
                marginLeft: 90,
                marginTop: 16
              }}
            >
              INICIA SESIÓN CON FACEBOOK
            </Text>
          </TouchableOpacity> */}
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("inicioSesion")}
            style={{ height: 40, backgroundColor: "#4682b4", width: "50%", borderRadius:20 }}
          >
            <Text
              style={{
                fontWeight: 'bold',
                color: "#fff",
               textAlign:'center',
               top:10
              }}
            >
              INICIAR SESIÓN
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

export default inject("assets")(observer(Login))

const styles = StyleSheet.create({
  imgBackground: {
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    top: "20%"
  },
  parrafo: {
    textAlign: "center",
    lineHeight: 20,
    top: "27%",
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold"
  },
  inicioSesion: {
    color: "#fff",
    alignItems: "center"
  }
});
