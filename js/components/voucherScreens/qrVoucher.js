import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";
import { observer, inject } from "mobx-react";

class VoucherQR extends React.Component {
  state = {
    showPass: true
  };
  render() { console.log("log desde QRscreen", this.props)
    if(this.props.assets.showQR) {
      return this.getQR();
    } else {
      return this.getSpinner();
       }
     }
    getQR = () => {
      return(
      <ImageBackground
        style={styles.backgorund}
        source={require("../../assets/bg-general.png")}
      >
        <View
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            height: "100%",
            padding: 5,
            opacity: 0.9
          }}
        >
          <View style={{ flex: 1, flexDirection: "column" }}>
            <View
              style={{
                width: "100%",
                backgroundColor: "#fff",
                height: "100%",
                borderRadius: 10
              }}
            >
            <View style={{flexDirection:"row", justifyContent:"flex-end", marginRight:8, marginTop:5}}>
                      <TouchableWithoutFeedback
                        onPress={() => this.props.navigation.navigate("HomeVoucher")}
                        >
                        <Image
                            style={{
                            width: 35,
                            height: 35,
                            }}
                            source={require("../../assets/cross.png")}
                        />
                      </TouchableWithoutFeedback>
                    </View>
              <View>
                <Text style={styles.titleText}>
                  {this.props.assets.infoModelo3d.data.Content.name}
                </Text>
              </View>

              <View>
                <Text style={styles.vaucherValidoText}>
                  Este vaucher es válido desde el{" "}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: "black",
                    fontSize: 12,
                    fontWeight: "700",
                    textAlign: "center"
                  }}
                >
                  {`${this.props.assets.infoModelo3d.data.Content.catchDate} hasta ${this.props.assets.infoModelo3d.data.Content.expirationDate}`}
                </Text>
              </View>

              <View>
                <Text
                  style={{
                    color: "black",
                    fontSize: 12,
                    fontWeight: "700",
                    textAlign: "center",
                    marginTop:20,
                    marginBottom:15
                  }}
                >
                Tu código único de canje es
                </Text>
              </View>
              

              <View style={{alignItems:"center"}}>
                <TouchableOpacity onPress={() => this.setState({showPass: !this.state.showPass})} style={styles.button1}>
                <Text
                    style={{
                    color: "#fff",
                    fontWeight: "bold",
                    textAlign: "center",
                    marginTop:"4%"
                    
                    }}
                >
                    {this.state.showPass ? "TOCA PARA REVELAR" : this.props.assets.infoModelo3d.data.Content.exchangeCode}
                </Text>
                </TouchableOpacity>
              </View>

            <View style={{ alignItems:"center"}}>
              <Image
                style={{
                  width: 250,
                  height: 250,
                }}
                source={{uri:`file:///data/data/com.viro/files${ this.props.assets.infoModelo3d.data.Content.instanceId}.png`}}
              />
            </View>

              <View>
                <Text style={{textAlign:"center", fontSize:10}}>Este código puede usarse una sola vez</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
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
}

export default inject("assets")(observer(VoucherQR));

const styles = StyleSheet.create({
  imgBackground: {
    width: "100%",
    height: "100%"
  },

  spinnerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center"
  },
  spinner: {
    width: 100,
    height: 100,
    top: "60%"
  },
  backgorund: {
    width: "100%",
    height: "100%"
  },
  titleText: {
    color: "black",
    fontSize: 23,
    fontWeight: "bold",
    textAlign: "center",
    marginTop:25
  },
  descriptionText: {
    color: "red",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 15
  },
  terminosYCondiciones: {
    color: "red",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 15
  },
  vaucherValidoText: {
    color: "black",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 25
  },
  button1: {
    width: 180,
    height: 35,
    borderRadius: 20,
    backgroundColor: "#C40233",
  },
  input: {
    height: 40,
    borderRadius: 10,
    backgroundColor: "#fff",
    width: "50%",
    opacity: 0.6,
    marginBottom: 10
  }
});
