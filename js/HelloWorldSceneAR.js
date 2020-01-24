"use strict";

import React, { Component } from "react";
import {
  ViroARScene,
  ViroMaterials,
  Viro3DObject,
  ViroAmbientLight,
  ViroARPlane,
  ViroVideo,
  ViroSound,
  ViroAnimatedImage,
  ViroImage,
  ViroAnimations
} from "react-viro";


class HelloWorldSceneAR extends Component {

  constructor() {
    super()
    this.state = {
      pausedSound:true,
      pausedVideo:true,
      showModel:false,
      number:0,
      positionX:0,
      positionY:0,
      positionZ:0,
      pauseUpdates:false
    }
    this.timer = null
  }

  numerosAleatorios() {
    let numUno = Math.random();
    let numDos = Math.random();
    let suma = numUno + numDos
    return suma
  }

  _pushNextScene(){ 
    this.setState({pausedSound:true});
    this.props.arSceneNavigator.viroAppProps.assets.cupons = null;
    this.props.arSceneNavigator.viroAppProps.assets.mostrarViro = false;
    this.props.arSceneNavigator.viroAppProps.assets.timer = this.props.arSceneNavigator.viroAppProps.assets.cuponesCadaMinuto();
    this.props.arSceneNavigator.viroAppProps.navigation.navigate("Mochila");
    
    
  }

  addOne = ()=> {
    this.timer = setInterval(()=> {
      this.setState({number: this.state.number + 1})
    }, 1000);
    
  }

  _viroCirculo (positionX, positionY, positionZ, pausedVideo) {
    return (
      <ViroSound
          source={require('./assets/cazar.mp3')}
          loop={pausedVideo}
          position={[positionX, positionY, positionZ]}
          onFinish={()=> this.setState({pausedSound:false, showModel:true})}
          />
    )
  }

  stopAddOne = ()=> {
    clearInterval(this.timer);
  }

_cazarModelo () {
  this.props.arSceneNavigator.viroAppProps.assets.mostrarMochila = 1;
}


_onClickState = (stateValue, position, source) => {  

  if(stateValue == 1) {
    this.addOne();
    this.setState({positionX:position[0], positionY:position[1], positionZ:position[2]});
    this.setState({pausedVideo:false});
    console.log("presionaste al modelo");

  } else if(stateValue == 2) {

    this.stopAddOne();

    if(this.state.number > 2) {
      this.setState({pausedVideo: true});
      this.setState({showModel: true});
    } else {
      this.setState({pausedVideo: true});
      
    }
    console.log("soltaste el dedo");   
  }
}

  render() {

    return (
      <ViroARScene anchorDetectionTypes="PlanesHorizontal" onTrackingUpdated={this._onInitialized}>
       
        <ViroAmbientLight color={"#ffffff"} />
        
            <ViroARPlane 
              minHeight={.1} 
              minWidth={.1}
              alignment={"Horizontal"}>

               <Viro3DObject   
                      source={require('./assets/css/Obj/Tree_frog.obj')}
                      resources={[require('./assets/css/Obj/Tree_frog.mtl')]}
                      materials='hamb1'
                      position={[this.numerosAleatorios() * 3, -this.numerosAleatorios(), 0]}
                      scale={[1, 1, 1]}
                      animation={{name:'loopRotate',
                             run:true,
                             loop:true}}
                      type="OBJ" />
            </ViroARPlane>
      </ViroARScene>
    );
  }
}



ViroMaterials.createMaterials({
  hamb1:{
    diffuseTexture: require('./assets/css/Obj/frog-tex.jpg'),
  }
});

ViroAnimations.registerAnimations({
  loopRotate:{properties:{rotateY:"+=45"}, duration:2000},
});



module.exports = HelloWorldSceneAR
