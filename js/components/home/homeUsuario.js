import React from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  ImageBackground,
  Image
} from "react-native";
import { observer, inject } from "mobx-react";
import FotoPerfil from "./fotoPerfil";

class HomeUsuario extends React.Component {

  render() {
    return (
      <View style={{ backgroundColor:"#fff", height:"100%"}}>
        <View style={styles.view}>
          <View>
            <Image style={{width:40, height:40, borderRadius:40}} source={require("../../assets/pexels2.jpeg")} />
          </View>
          {/* <Text style={styles.texto}>{this.props.user.name}</Text> */}
          <Text style={styles.texto}>Micaela</Text>
          <Text style={styles.texto}></Text>
          
        </View>
        <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={require("../../assets/pexels2.jpeg")}
          />
        </View>
        </View>
    );
  }
 
}

export default inject("user", "assets")(observer(HomeUsuario));
  
const styles = StyleSheet.create({
  view: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
    left: 20,
    textAlign:"center",
  },
  imgView: {
    width: 340,
    margin:10,
    height: 200,
    marginTop: 20
  },
  img: {
    width: "100%",
    height: "100%"
  },
  texto: {
      marginTop:13,
      marginLeft:10
  }
});
