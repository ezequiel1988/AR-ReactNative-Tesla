import React from "react";
import HelloWorldSceneAR from "../../HelloWorldSceneAR";
import ARCarDemo from '../../arCar';
import { ViroARSceneNavigator } from 'react-viro';
import { inject, observer, Provider } from "mobx-react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  Text
} from "react-native";


class ARScreen extends React.Component{

  render() { 
    if(this.props.assets.mostrarViro) {
     return this.getViro();
    } else {
      return this.getSpinner();
    }
  }

    getViro = () => {
          return(
              <ViroARSceneNavigator  initialScene={{
                scene: ARCarDemo,
              }} apiKey="474AEC79-2875-4AB1-8FF7-F2702E7069BB" viroAppProps={this.props} />
          )
      }

      getSpinner = () => {
          return <ImageBackground
                  style={styles.imgBackground}
                  source={require("../../assets/background.png")}
                >
                <View style={styles.spinnerContainer}>
                  <View style={styles.spinner}>
                    <Image style={{width:65, height:65, marginLeft:15, marginTop:15}} source={require("../../assets/spinner.gif")} />
                  </View>
                </View>
              </ImageBackground>
      
        }

        _exitViro = () => {
          this.props.assets.mostrarViro = false;
        }
      }

      const styles = StyleSheet.create({
        imgBackground: {
          width: "100%",
          height: "100%"
        },

        spinnerContainer: {
          flex:1,
          flexDirection:"row",
          justifyContent:"center",
          alignContent:"center",
         
        },
        spinner: {
          width:100,
          height:100,
          top: "60%"
        },
        exitButton : {
          height: 50,
          width: 100,
          paddingTop:10,
          paddingBottom:10,
          marginTop: 10,
          marginBottom: 10,
          backgroundColor:'#68a0cf',
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#fff',
          position:"absolute"
        }
      });

export default inject("assets")(observer(ARScreen))