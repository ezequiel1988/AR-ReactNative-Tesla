import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import * as Animatable from "react-native-animatable";
import Ionicons from 'react-native-vector-icons/Ionicons';




class NotInterna extends Component {

  constructor() {
    super();
    
    this.getComponent = this.getComponent.bind(this);
    this.getNull = this.getNull.bind(this);
  }

  
    render()  {
      if(true) {
        return this.getComponent()
      } else {
        return this.getNull()
      }
    }
        
     getComponent() { 
      return (
        <Animatable.View animation="bounceInDown">
        <ImageBackground
          style={{width:"100%", height:55}}
          source={require("../../assets/background.png")}>
        <View
          style={
            this.props.assets.nameCupones.length > 1
              ? styles.viewDiv1
              : styles.viewDiv2
          }
        >
        
          <View style={{ flexDirection: "row", alignItems: "center", top: 8, left:'20%' }}>
          <Ionicons name='ios-camera' size={20} color='#fff' /> 
            <Text onPress={this.props.openAR} style={styles.textoPrincipal}>
              Hay una sorpresa esperandote!
            </Text>
          </View>
          <Text onPress={this.props.openAR} style={styles.textoSecundario}>
            Abre la cámara ahora para descubrirlo!
          </Text>
        </View>
        </ImageBackground>
        </Animatable.View>
    );
  }

  getNull() {
    return (
      <View></View>
    )
  }

}

const styles = StyleSheet.create({
  viewDiv1: {
    backgroundColor: "tomato",
    borderRadius: 10,
    height: 60
  },
  viewDiv2: {
    backgroundColor: "tomato",
    borderRadius: 10,
    height: 60
  },
  textoPrincipal: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 5
  },
  textoSecundario: {
    color: "#fff",
    fontSize: 12,
    marginLeft: 10,
    top: 10
  },
  img: {
    width: 25,
    height: 25,
    marginLeft: 5,
    padding: 10
  }
});

export default inject("assets")(observer(NotInterna));
