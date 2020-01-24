import React from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import { inject, observer } from "mobx-react";
import Modal from "react-native-modalbox";


class HeaderPerfil extends React.Component {

    openModal () {
        this.props.assets.abrirModal= true
    }
  render() {
     return (
      <View>
        <View  style={{height:40}}>
          <Image style={styles.imgBackground} source={require("../assets/top.png")}/>
          <View >
            <View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('PerfilGeneral')} style={{width:100, height:22, backgroundColor: "!trasparent"}}>
                    <Text style={{color:'#fff', marginTop:10, marginLeft:10}}>CANCELAR</Text>
                </TouchableOpacity>
            </View>
            
            <View style={styles.title}>
                <Text  style={styles.text}>KCHAPP</Text>
            </View>
            <View>
                 <TouchableOpacity onPress={() => this.openModal()} style={{left:"80%", bottom:"170%", width:65, height:22, backgroundColor: "#9932cc", borderRadius:12}}>   
                    <Text style={{color:'#fff', textAlign:'center', textAlignVertical:'center'}}>
                        LISTO
                    </Text>
                </TouchableOpacity>
            </View>
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
          bottom:"20%",
          marginLeft:35
        },
      });

export default inject("assets")(observer(HeaderPerfil));