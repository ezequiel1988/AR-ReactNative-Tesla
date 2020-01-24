import React from 'react';
import { Text, View, Button, StyleSheet, ImageBackground,TextInput } from 'react-native';
import { observer, inject } from 'mobx-react';


 class Contraseña extends React.Component {


  nextView = () => {
      this.props.navigation.navigate("Home")      
    }
    render() {
      return (
        <ImageBackground style={styles.imgBackground} source={require("../../assets/background.png")}>
        <View style={styles.container} >
        <View>
            <Text style={{left:"8%", fontWeight:"bold", fontSize:20, color:"#fff", marginBottom:20}}>Reestablecer tu contraseña</Text>
        </View>
        <View>
            <Text style={{color:"#fff", marginBottom:20}}>Ingresa tu dirección de correo electrónico que usaste para crear tú cuenta de Kchapp. Te enviaremos un correo electrónico con instrucciones para reestablecer tu contraseña</Text>
        </View>
          <Text style={styles.text}>Dirección de correo electrónico</Text>
          <TextInput keyboardType="email-address" style={styles.input}/>
           <View style={styles.button}>
            <Text onPress={this.nextView} style={{color:"#fff", marginLeft:"2%", marginTop:"15%", fontWeight:"bold"}}>ENVIAR CORREO DE RECUPERACIÓN</Text>
           </View> 
           <View>
               <Text style={{color:"#fff", left:"30%", fontSize:12}}>¿Necesitas ayuda?</Text>
           </View>
           <View>
               <Text style={{textDecorationLine:"underline", fontWeight:"bold", color:"#fff", left:"34%", fontSize:12}}>Haz click aquí</Text>
           </View>
        </View>
        </ImageBackground>

      )
    }
  }
  export default observer(Contraseña)

  const styles = StyleSheet.create({
    imgBackground: {
      width: "100%",
      height:"100%",
      
    },
    container: {
      flex:1,
      flexDirection:"column",
      justifyContent:"flex-start",
      alignItems:"flex-start",
      top:"10%",
      left:"5%"
    },
      text:{
      color:"#fff",
      fontSize:15,
      marginTop:20
    },
    input: {
        height:40,
        borderRadius:10,
        backgroundColor:"#fff",
        width:"90%",
        opacity:0.6,
    },
    button:{
        width:"75%",
        height:40,
        borderRadius:20,
        left:"4%",
        backgroundColor:"#9932cc",
        marginTop: "15%",
        marginBottom:20,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    }

  });
  