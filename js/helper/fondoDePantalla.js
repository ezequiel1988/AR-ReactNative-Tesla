import React from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  PanResponder,
  Animated,
  TouchableHighlight
} from "react-native";
import FotoPerfil from "../components/home/fotoPerfil";
import assetsStore from "../store/AssetsStore";
import NotInterna from "../components/notificaciones/notificacioInterna";
import { inject, observer } from "mobx-react";
import Ionicons from 'react-native-vector-icons/Ionicons';


var sharedProps = {
  apiKey:"474AEC79-2875-4AB1-8FF7-F2702E7069BB",
}
var UNSET = "UNSET";
var AR_NAVIGATOR_TYPE = "AR";
var defaultNavigatorType = UNSET;

class HeaderComponent extends React.Component {

  constructor() {
    super();
    this.state = {
      pan: new Animated.ValueXY(),
      opacity: new Animated.Value(1),
      store: assetsStore,
      navigatorType : defaultNavigatorType,
      sharedProps : sharedProps,

    }
    // Initialize PanResponder with move handling
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, gesture) => true,
      onPanResponderRelease: (e, gesture) => {
        if (gesture.moveY > -16) {
          Animated.timing(this.state.opacity, {
          toValue: 0,
          duration: 100
        }).start()
      } else {
        Animated.spring(this.state.pan, {
          toValue: { x: 0, y: 0 },
          friction: 5
        }).start();
      }
      },
      onPanResponderMove: Animated.event([
        null, { dx: null, dy:this.state.pan.y }
      ])
    });

  }

  render() {
     return (
      <View>
          <Animated.View {...this.panResponder.panHandlers}
            style={{transform: this.state.pan.getTranslateTransform(), opacity: this.state.opacity, position:"absolute", zIndex:1, width:"100%"}}>                
          <NotInterna openAR={() => this.props.navigation.navigate("Finder")} />
          </Animated.View>
       
        <View  style={{height:50 ,backgroundColor:'#6495ED'}}>
          <View style={{top:"7%"}}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('PerfilGeneral')} underlayColor='#fff' style={{height:40, width: 40}}>
            <Image style={{width:40, height:40, borderRadius:40}} source={require("../assets/pexels2.jpeg")} />
            </TouchableHighlight>
          </View>
          <View style={{left:"87%", bottom:"60%"}}>
            <Ionicons name='ios-chatboxes' size={30} color='#fff' /> 
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

export default (observer(HeaderComponent));