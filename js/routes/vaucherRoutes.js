import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import VoucherScreen from '../components/voucherScreens/VoucherScreen';
import VoucherQR from '../components/voucherScreens/qrVoucher';
import Mochila from '../components/mochila/mochila';



const vaucherQR = createStackNavigator(
  {
    Mochila: {screen:Mochila, navigationOptions:{header:null}},
    HomeVoucher: {screen: VoucherScreen, navigationOptions:{header:null}},
    QRVoucher: {screen: VoucherQR, navigationOptions:{header:null}},
});

const VoucherContainer = createAppContainer(vaucherQR);
export default VoucherContainer