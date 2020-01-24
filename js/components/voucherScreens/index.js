import React from "react";
import VoucherContainer from "../../routes/vaucherRoutes";

class IndexVaucher extends React.Component {

 
    render() {
        return <VoucherContainer screenProps={this.props.navigation.state.params} />
    }

}

export default IndexVaucher;