import React from "react";
import { Text, View, Button, Image, StyleSheet, ImageBackground,TouchableOpacity } from "react-native";
import { observer, inject } from "mobx-react";

class FotoPerfil extends React.Component {

    render() {
        return (
            <View style={styles.view}>
            <View style={styles.viewSecundario}>
                <Image style={styles.img}  source={require("../../assets/pexels-photo.jpeg")} />
            </View>
            </View>
        )
    }
}



export default inject("login")(observer(FotoPerfil))

const styles = StyleSheet.create({
view: {
  marginLeft:20,
  width: 30,
  height: 30,
  overflow:"hidden",
  transform: [
    {rotate:"45deg"},
    {translateY: 10}
]
},
img: {
    width:"100%",
    height:"100%"
},
viewSecundario: {
    width: 45,
    height: 45,
    transform: [
        {rotate:"-45deg"},
        {translateY:-10}
    ]
}
})

