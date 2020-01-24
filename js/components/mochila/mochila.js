import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableHighlight
} from "react-native";
import { observer, inject } from "mobx-react";


class Mochila extends React.Component {


  openVaucher(instanceId, vaucherImg) {  
    this.props.assets.showQR = false;
    this.props.assets.infoVoucherModelo3d(instanceId);
    this.props.navigation.navigate("HomeVoucher", {vaucherImg:vaucherImg});
  }
  render() {
    if(this.props.assets.mostrarMochila === 1) {
      return this.getSpinner();
  } else {
      return this.getMochila();
     }
   }

   getMochila = () => {

    return (
      <ImageBackground
        style={styles.backgorund}
        source={require("../../assets/bg-general.png")}
      >
        <View
          style={{
            backgroundColor: "#fff",
            top: 10,
            height: "94%",
            margin: 5,
            padding: 5,
            borderRadius: 10,
            opacity: 0.8
          }}
        >
          <View style={{ flexDirection: "column", flex: 1 }}>

          <View style={{flexDirection:"row", marginTop:5, justifyContent:"space-evenly", marginRight:"38%"}}>

          <View style={{}}>
            <Image style={{width:23, height:23, marginRight:"40%"}} source={require("../../assets/historial.png")} />
          </View>

          <View style={{}}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "red",
                  textAlign:"right"
                }}
              >
                Mochila
              </Text>
              </View>
            </View>
          
            <View style={{ flexDirection: "row",  flexWrap:"wrap" }}>
      
              {this.props.assets.urisMochila.map((el, index) => {
                return (
                  <View key={index}>
                    <TouchableHighlight                      
                      onPress={()=> this.openVaucher(el.instanceId, el.voucherImg, el.exchangeCode)}
                      underlayColor="#fff"
                      >
                      <Image
                        style={{
                          width: 100,
                          height: 100,
                          margin: 5,
                          marginLeft: 8
                        }}
                        source={{ uri: el.uri }}
                      />
                    </TouchableHighlight>
                    <View style={{width:85, marginLeft: 8}}>
                      <Text style={styles.text}>{el.name}</Text>
                    </View>
                  </View>
              )})}
            </View>
            <View style={{flexDirection:"row", justifyContent:"center", top:this.props.assets.urisMochila.length > 0 ? "80%" : "120%"}}>
              <Image resizeMode="contain" style={{width:20, height:20}} source={require("../../assets/aumentar-mochila.png")} />
              <Text style={{ color:"red", marginLeft:5}}>Aumentar mochila</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }

  getSpinner = () => {
    return(
      <ImageBackground
      style={styles.backgorund}
      source={require("../../assets/bg-general.png")}
    >
      <View
        style={{
          backgroundColor: "#fff",
          top: 10,
          height: "94%",
          margin: 5,
          padding: 5,
          borderRadius: 10,
          opacity: 0.8,
        }}
      >
        <View style={{flex:1, flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            <Image style={{width:65, height:65}} source={require("../../assets/spinner.gif")} />
        </View>

      </View>
    </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  backgorund: {
    width: "100%",
    height: "100%"
  },
  view: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginLeft: "3%",
    width: "94%",
    height: "70%",
    backgroundColor: "#fff",
    opacity: 0.3,
    borderRadius: 15,
    marginBottom: "5%",
    marginTop: "5%"
  },
  title: {
    color: "#f4511e",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    marginTop: "20%"
  },
  text:{
    color: "red",
    fontSize: 10,
    fontWeight: "bold",
    textAlign:"center",
  }
});

export default inject("assets")(observer(Mochila));
