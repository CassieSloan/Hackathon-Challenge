import React, { Component } from "react";

class WorldFactsFact extends Component {
    
    render() {
        const { fact } = this.props;
        return(
            <>
                <h1>Your Fact</h1>
                <p>{fact}</p>
            </>
        )
    }
}

export default WorldFactsFact;