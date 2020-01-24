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
import Modal from "react-native-modalbox";

class VoucherScreen extends React.Component {

    state = {
        modalVisible:false,
    }

    nextScreen(instanceId, codigoQr) {
        this.props.assets.obtenerImagenQR(instanceId,codigoQr);
        this.props.navigation.navigate("QRVoucher");
    }

    eliminarObjeto(instanceId) {
      this.props.assets.borrarObjDeMochila(instanceId);
        this.props.assets.mostrarMochila = 1;
        this.setState({modalVisible:false});
        this.props.navigation.goBack();
    }

    goBack() {      
      this.props.navigation.navigate("Mochila")
    }

    render() { 
    if(this.props.assets.mostrarvoucherImg) {
        return this.getSpinner();
    } else {
        return this.getVoucher();
       }
     }

     getVoucher = () => {
        return(
            <ImageBackground
            style={styles.backgorund}
            source={require("../../assets/bg-general.png")}
          >
            <View
                style={{
                    backgroundColor: "rgba(0, 0, 0, 0.1)",
                    top: 5,
                    height: "100%",
                    padding:5,
                    opacity:0.9
                }}>
                <View style={{flex:1, flexDirection:"column"}}>
                <View style={{width:"100%", backgroundColor:"#fff", height:"98%", marginTop:5, borderRadius:10}}>
                    <Image
                        style={{
                        width: "100%",
                        height: "35%",
                        borderRadius:10,
                        }}
                        source={{uri: this.props.navigation.state.params.vaucherImg}}
                    />
                    <View
                      style={{bottom:"47%",width: 35, height: 35, flexDirection:"row", justifyContent:"center", left:"63%" , borderRadius:15}}>
                      <TouchableWithoutFeedback
                        onPress={() => this.props.navigation.navigate("Mochila")}
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
                    <Text style={styles.titleText}>{this.props.assets.infoModelo3d.data.Content.name}</Text>
                </View>

                <View>
                    <Text style={styles.descriptionText}>{this.props.assets.infoModelo3d.data.Content.description}</Text>
                </View>

                <View>
                    <Text style={styles.terminosYCondiciones}>Ver Términos y condiciones</Text>
                </View>

                <View>
                    <Text style={styles.vaucherValidoText}>Este vaucher es válido desde el </Text>
                </View>
                <View>
                    <Text style={styles.vaucherValidoText}>{`${this.props.assets.infoModelo3d.data.Content.catchDate} hasta ${this.props.assets.infoModelo3d.data.Content.expirationDate}`}</Text>
                </View>

            <View style={{marginTop:10}}>
            <View style={{alignItems:"center"}}>
                <TouchableOpacity onPress={() => this.nextScreen(this.props.assets.infoModelo3d.data.Content.instanceId, this.props.assets.infoModelo3d.data.Content.exchangeCode)} style={styles.button1}>
                <Text
                    style={{
                    color: "#fff",
                    fontWeight: "bold",
                    textAlign: "center",
                    marginTop:"3%"
                    
                    }}
                >
                    VER CÓDIGO DE CANJE
                </Text>
                </TouchableOpacity>
            </View>
            <View style={{alignItems:"center", marginTop:10}}>
                <TouchableOpacity style={styles.button2}>
                <Text
                    style={{
                    color: "#fff",
                    fontWeight: "bold",
                    textAlign: "center",
                    marginTop:"3%"
                    
                    }}
                >
                    VER CENTRO DE CANJE
                </Text>
                </TouchableOpacity>
            </View>

            <View style={{alignItems:"center", marginTop:10}}>
                <TouchableOpacity onPress={()=> this.setState({modalVisible:true})} style={styles.button3}>
                <Text
                    style={{
                    color: "#fff",
                    fontWeight: "bold",
                    textAlign: "center",
                    marginTop:"3%"
                    
                    }}
                >
                    ELIMINAR DE MI MOCHILA
                </Text>
                </TouchableOpacity>
            </View>
            </View>

                </View>
                </View>
            </View>
            <Modal
                style={[styles.modal, styles.modal3]}
                position={"center"}
                ref={"modal3"}
                isOpen={this.state.modalVisible}
                >
                <Text style={styles.textModal}>¿Estás seguro de que deseas eliminar este voucher de tu mochila? Si lo eliminas, no podrás recuperarlo</Text>
                
                <View style={{flexDirection:"row", marginTop:25}}>
                <TouchableOpacity onPress={()=> this.eliminarObjeto(this.props.assets.infoModelo3d.data.Content.instanceId)} style={styles.button4}>
                <Text
                    style={{
                    color: "#fff",
                    fontWeight: "bold",
                    textAlign: "center",
                    marginTop:"5%"
                    
                    }}
                >
                    SI, ELIMINAR
                </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.setState({modalVisible:false})} style={styles.button5}>
                <Text
                    style={{
                    color: "#fff",
                    fontWeight: "bold",
                    textAlign: "center",
                    marginTop:"5%"
                    
                    }}
                >
                   CANCELAR
                </Text>
                </TouchableOpacity>
                </View>
            </Modal>
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


const styles = StyleSheet.create({
    imgBackground: {
        width: "100%",
        height: "100%"
      },
      modal: {
        justifyContent: "center",
        alignItems: "center"
      },
      modal3: {
        height: 200,
        width: 300,
        borderRadius: 15
      },
      textModal: {
        fontSize: 12,
        fontWeight: "bold",
        textAlign:"center"
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
    backgorund: {
        width: "100%",
        height: "100%"
      },
      titleText: {
        color: "black",
        fontSize: 23,
        fontWeight: "bold",
        textAlign: "center",
      },
      descriptionText: {
        color: "red",
        fontSize: 12,
        fontWeight: "bold",
        textAlign:"center",
      },
      terminosYCondiciones: {
        color: "red",
        fontSize: 12,
        fontWeight: "700",
        textAlign:"center",
        marginTop: 10,
      },
      vaucherValidoText: {
        color: "black",
        fontSize: 12,
        fontWeight: "700",
        textAlign:"center",
        marginTop: 10,
      },
      button1: {
        width: 250,
        height: 35,
        borderRadius: 20,
        backgroundColor: "#C40233"
      },
      button2: {
        width: 250,
        height: 35,
        borderRadius: 20,
        backgroundColor: "#9932cc"
      },
      button3: {
        width: 250,
        height: 35,
        borderRadius: 20,
        backgroundColor: "#C40233"
      },
      button4: {
        width: 130,
        height: 35,
        borderRadius: 20,
        backgroundColor: "#C40233",
        marginRight:2
      },
      button5: {
        width: 130,
        height: 35,
        borderRadius: 20,
        backgroundColor: "#9932cc",
        marginLeft:2
      },
})

export default inject("assets")(observer(VoucherScreen))