import React from "react";
import { View } from "react-native";
import { TextInputMask } from "react-native-masked-text";

class FormatDate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={this.props.styles}>
        <TextInputMask
          type={"datetime"}
          options={{
            format: "DD/MM/YYYY"
          }}
          value={this.props.value}
          onChangeText={this.props.onChange}
          style={this.props.style}
          placeholder={this.props.placeholder}
        />
      </View>
    );
  }
}
export default FormatDate;
