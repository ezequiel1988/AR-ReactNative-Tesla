import React from "react";
import {
  StyleSheet,
  Image,
  Text,
  TouchableWithoutFeedback,
  View
} from "react-native";
import { inject, observer } from "mobx-react";
import Ionicons from 'react-native-vector-icons/Ionicons';





function TabBar (props) {

  console.log("props del TabBar", props)

    const { navigationState, navigation } = props
   
     return (
      <View style={{height:50, backgroundColor:'#6495ED'}}>
        <View style={styles.view}>
        {navigationState.routes.map((route, index)=> {
           
            var tintColor; 
            let iconName;
            if (route.routeName === 'Home') {
            tintColor =  `${navigationState.index == 0 ? 'tomato' : '#fff'}`;
            iconName= `ios-home`
            } else if (route.routeName === 'Perfil') {
            tintColor =  `${navigationState.index == 2 ? 'tomato' : '#fff'}`;
            iconName = `ios-person`
            } else if (route.routeName === 'Camara') {
              tintColor =  `${navigationState.index == 1 ? 'tomato' : '#fff'}`;
            iconName = `ios-camera`
            navigationState.index == 3 ? props.assets.mostrarViro = false : props.assets.mostrarViro = true;
            }
  
            return <Ionicons key={index} onPress={() => navigation.navigate(route.routeName)} name={iconName} size={30} color={tintColor} />;
        })}
        </View>
      </View>
     )
}

      const styles = StyleSheet.create({
        imgBackground: {
          width: "100%",
          height: "100%",
          position:"absolute"
        },
        view:{
            marginTop:10,
            flexDirection: "row",
            justifyContent: 'space-around',
            alignItems: 'center',
        }
        
      });

export default inject("assets")(observer(TabBar));