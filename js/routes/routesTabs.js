import React from "react"
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs';
import HomeUsuario from '../components/home/homeUsuario';
import { createAppContainer } from 'react-navigation';
import ARSrceen from "../components/arScreens/ARSrceen";
import { createStackNavigator } from "react-navigation-stack";
import IndexVaucher from "../components/voucherScreens";
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconoBotonera from "../helper/iconoBotonera";


const getTabBarIcon = (navigation, focused, tintColor) => {
  console.log(navigation)
  const { routeName } = navigation.state;
  let iconName;

  if (routeName === 'Home') {
    iconName = `ios-home`;
    // We want to add badges to home tab icon
  } else if (routeName === 'Artículos') {
    iconName = `ios-person`;
  }
  else if (routeName === 'Cámara') {
    iconName = `ios-camera`;

  }

  // You can return any component that you like here!
  return <Ionicons name={iconName} size={30} color={tintColor} />;
};

  const tabContainer = createBottomTabNavigator(
      {
        Home: { screen: HomeUsuario},
        Cámara: { screen: ARSrceen},
        Artículos: { screen: IndexVaucher},
      },
      {
        defaultNavigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, tintColor }) =>
          getTabBarIcon(navigation, focused, tintColor),
        }),
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: '#fff',
        tabStyle:{
          backgroundColor:'#091A32'
        },
        showLabel:false
      },
    
    });

  const TabContainer = createAppContainer(tabContainer)
  export default TabContainer;
