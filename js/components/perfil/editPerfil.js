import React from 'react';
import { inject, observer } from 'mobx-react';
import { View, StyleSheet, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import Modal from 'react-native-modalbox';

class EditarPerfil extends React.Component {

    confirmarPerfil () {
        this.props.assets.abrirModal=false;
        this.props.navigation.navigate('homeUsuario')
    }
    render() {
        return(
            <View style={styles.containerGeneral}>
                <View style={styles.containerFoto}>
                    <Image style={styles.img}  source={require("../../assets/pexels2.jpeg")} />
                </View>
                
                <View style={{alignItems:'center', marginBottom:10}}>
                    <TouchableOpacity style={styles.buttonLogros}>
                        <Text
                        style={{
                            color: "#fff",
                            fontWeight: "bold",
                            textAlign: "center",
                            marginTop:"5%",
                            fontSize:10           
                        }}>
                            CAMBIAR FOTO PERFIL
                        </Text>
                    </TouchableOpacity>
                </View>
                    
                <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                    <Text style={{marginTop:5}}>Nombre</Text>
                    <TextInput value='Micaela Bordon' style={styles.styleInput}></TextInput>
                </View>
                    
                <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:5}}>
                    <Text style={{marginTop:5}}>Usuario</Text>
                    <TextInput value='mbordon' style={styles.styleInput}></TextInput>
                </View>

                <View style={{alignItems:'flex-start', marginLeft:5, marginTop:15, marginBottom:5}}>
                    <Text style={{fontWeight:'bold', fontSize:15}}>Tú información privada</Text>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-around', marginBottom:5}}>
                    <Text style={{marginTop:5}}>Dirección de email</Text>
                    <TextInput value='mbordón@gmail.com' style={styles.styleInputEmail}></TextInput>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-around', marginBottom:5}}>
                    <Text style={{marginTop:5}}>Fecha de nacimiento</Text>
                    <TextInput value='12/10/1985' style={styles.styleInputNac}></TextInput>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-around', marginBottom:5}}>
                    <Text style={{marginTop:5}}>Telefono</Text>
                    <TextInput value='+541144443333' style={styles.styleInputTel}></TextInput>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-around', marginBottom:5}}>
                    <Text style={{marginTop:5}}>Sexo</Text>
                    <TextInput value='mujer' style={styles.styleInputSexo}></TextInput>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                    <Text style={{marginTop:5}}>Estado y Ciudad</Text>
                    <TextInput value='CABA, Buenos Aires' style={styles.styleInputEst}></TextInput>
                </View>
                <Modal
                style={[styles.modal, styles.modal3]}
                position={"center"}
                ref={"modal3"}
                isOpen={this.props.assets.abrirModal}
                >
                <Text style={styles.textModal}>Tus datos han sido actualizados!</Text>
                
                <View style={{flexDirection:"row", marginTop:25}}>

                <TouchableOpacity onPress={() => this.confirmarPerfil()} style={styles.button5}>
                <Text
                    style={{
                    color: "#fff",
                    fontWeight: "bold",
                    textAlign: "center",
                    marginTop:"2%"
                    
                    }}
                >
                   OK
                </Text>
                </TouchableOpacity>
                </View>
            </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerGeneral: {
        flex:1,
        flexDirection:"column",
        backgroundColor:'#FCE7E7'
    },
    containerFoto:{
        alignItems:"center",
        marginBottom:25,
        marginTop:20
    },
      img: {
          width:50,
          height:50,
          borderRadius:50
      },
      buttonLogros: {
        width: 135,
        height: 25,
        borderRadius: 20,
        backgroundColor: "tomato",
        marginLeft:10,
        marginTop:5
      },
      styleInput:{
          backgroundColor: "#fff",
          height:35,
          borderRadius:5,
          opacity:0.4,
          width:'80%'
      },
      styleInputBio:{
        backgroundColor: "#fff",
        height:80,
        borderRadius:5,
        opacity:0.4,
        width:'80%'
    },
    styleInputEmail:{
        backgroundColor: "#fff",
        height:35,
        borderRadius:5,
        opacity:0.4,
        width:'60%',
        marginLeft:10
    },
    styleInputNac:{
        backgroundColor: "#fff",
        height:35,
        borderRadius:5,
        opacity:0.4,
        width:'60%'
    },
    styleInputTel:{
        backgroundColor: "#fff",
        height:35,
        borderRadius:5,
        opacity:0.4,
        width:'60%',
        marginLeft:76
    },
    styleInputSexo:{
        backgroundColor: "#fff",
        height:35,
        borderRadius:5,
        opacity:0.4,
        width:'60%',
        marginLeft:100

    },
    styleInputEst:{
        backgroundColor: "#fff",
        height:35,
        borderRadius:5,
        opacity:0.4,
        width:'60%',
        marginLeft:35

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
      button5: {
        width: '95%',
        height: 35,
        borderRadius: 20,
        backgroundColor: "#9932cc",
        marginLeft:2
      },
})

export default inject('assets', 'login', 'user') (observer(EditarPerfil))