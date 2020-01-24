import React from 'react';
import { inject, observer } from 'mobx-react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

var arr = [1,2,3,4,5];
var arrFoto = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
var obj = {
    view: {
        width: 55,
        height: 55,
        translateY: 5
    },
    viewSecundario: {
        width: 80,
        height: 80,
        translateY:-16
    }
}

class PerfilGeneral extends React.Component {

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.containerFotoPerfil}>
                    <View style={styles.containerFoto}>
                        <View style={styles.view}>
                            <View style={styles.viewSecundario}>
                                <Image style={styles.img}  source={require("../../assets/pexels-photo.jpeg")} />
                            </View>
                        </View>
                        <Text style={{color:'#C40233', marginTop:20, marginLeft:10}}>Nivel 4</Text>
                        <Text style={{color:'#9932cc', fontSize:10, marginLeft:10}}>Exp 21884</Text>
                    </View>

                    <View style={{flexDirection:"column"}}>
                        <Text style={{fontSize:20, fontWeight:'bold'}}>Luis Caceres</Text>
                        <Text>@luiscaceres</Text>
                        <Text style={{color:'gray', fontSize:10}}>Descripción del perfil hasta 4 líneas</Text>
                        <Text style={{color:'gray', fontSize:10}}>Descripción del perfil hasta 4 líneas</Text>
                        <Text style={{color:'gray', fontSize:10}}>Descripción del perfil hasta 4 líneas</Text>
                        <Text style={{color:'gray', fontSize:10}}>Descripción del perfil hasta 4 líneas</Text>
                        <View style={{flexDirection:"row"}}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('EditarPerfil')} style={styles.buttonEditar}>
                                <Text
                                    style={{
                                    color: "#fff",
                                    fontWeight: "bold",
                                    textAlign: "center",
                                    marginTop:"5%",
                                    fontSize:10
                                    
                                    }}
                                >
                                    EDITAR MI PERFIL
                                </Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.buttonLogros}>
                                <Text
                                    style={{
                                    color: "#fff",
                                    fontWeight: "bold",
                                    textAlign: "center",
                                    marginTop:"5%",
                                    fontSize:10
                                    
                                    }}
                                >
                                    VER MIS LOGROS
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={{color:'gray', marginLeft:10}}>Tus historias</Text>
                </View>
                <View style={{flexDirection:"row", marginTop:10}}>
                    {
                        arr.map((el, index) => {
                            return <View key={index} style={styles.view}>
                            <View style={styles.viewSecundario}>
                                <Image style={styles.img}  source={require("../../assets/pexels-photo.jpeg")} />
                            </View>
                        </View>
                        })
                    }
                </View>
                <View style={{marginTop:20}}>
                    <Text style={{color:'gray', marginLeft:10}}>Tus Momentos</Text>
                </View>
                <View style={{flexDirection:"row", flexWrap:"wrap", justifyContent:"center"}}>

                    {
                        arrFoto.map((el, i) => {
                            return <Image key={i} source={require('../../assets/pexels-photo.jpeg')} style={{width:120, height:120}} />
                        })
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    conatiner: {
        flexDirection:"column",
        marginTop:20
    },
    containerFoto: {
        flexDirection:"column",
        marginTop:13,
        marginLeft:10
    },
    containerFotoPerfil:{
        flexDirection:"row",
        justifyContent:"space-between"

    },
    buttonEditar: {
        width: 110,
        height: 25,
        borderRadius: 20,
        backgroundColor: "#9932cc",
        marginTop:5
    },
    buttonLogros: {
        width: 110,
        height: 25,
        borderRadius: 20,
        backgroundColor: "#C40233",
        marginLeft:10,
        marginTop:5
      },
      view: {
        marginLeft:20,
        width: 55,
        height: 55,
        overflow:"hidden",
        transform: [
          {rotate:"45deg"},
          {translateY: 5}
      ]
      },
      img: {
          width:"100%",
          height:"100%"
      },
      viewSecundario: {
          width: 80,
          height: 80,
          transform: [
              {rotate:"-45deg"},
              {translateY:-16}
          ]
      }

})

export default inject('assets', 'login', 'user') (observer(PerfilGeneral))