import React from "react";
import TabContainer from "../../routes/routesTabs";


class IndexTab extends React.Component {

    render() {
        return (
            <TabContainer screenProps={this.props.screenProps}/>
        )
    }
}

export default IndexTab;