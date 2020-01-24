import React, { Component } from "react";
import { Modal, Text, TouchableHighlight, View, Alert } from "react-native";

export default class ModalHelper extends Component {
  render() {
    return (
      <View>
        <Modal
          presentationStyle="overFullScreen"
          animationType="slide"
          transparent={true}
          visible={this.props.visible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View
            style={{
              top: "45%",
              backgroundColor: "#fff",
              width: 250,
              height: 250,
              borderRadius: 15,
              left: "12%"
            }}
          >
            <View>
              <Text style={{ color: "black", fontWeight: "bold" }}>
                {this.props.someText.toUpperCase()}
              </Text>

              <TouchableHighlight
                style={{
                  width: 170,
                  height: 45,
                  borderRadius: 20,
                  left: "40%",
                  backgroundColor: "#9932cc"
                }}
                onPress={this.props.ocultarModal}
              >
                <Text style={{ color: "black", fontWeight: "bold" }}>OK</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
