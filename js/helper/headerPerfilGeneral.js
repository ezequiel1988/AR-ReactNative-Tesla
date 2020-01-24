import React from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight
} from "react-native";
import FotoPerfil from "../components/home/fotoPerfil";

import { inject, observer } from "mobx-react";



class HeaderPerfilGeneral extends React.Component {


  render() {
    console.log(this.props, 'props del header')
     return (
        <View>
        <View  style={{height:45}}>
            <Image style={styles.imgBackground} source={require("../assets/top.png")}/>
          <View style={{top:"3%"}}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('PerfilGeneral')} underlayColor='#fff' style={{height:40, width: 40}}>
              <FotoPerfil />
            </TouchableHighlight>
          </View>
          <View style={{left:"87%", bottom:"60%"}}>
            <Image style={{width:30, height:30}} source={require("../assets/mensajes-off.png")} />
          </View>
          <View style={styles.title}>
            <Text style={styles.text}>KCHAPP</Text>
          </View>
        </View>
      </View>
     )
}
}

      const styles = StyleSheet.create({
        imgBackground: {
          width: "100%",
          height: "100%",
          position:"absolute"
        },
        text:{
          fontWeight: 'bold',
          marginLeft: "35%",
          color:"#fff",
          fontSize:20
        },
        title: {
          bottom:"130%",
          marginLeft:15
        }
      });

export default inject('assets')(observer(HeaderPerfilGeneral));