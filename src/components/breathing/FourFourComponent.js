import React, {Component} from "react";
import "./../../styles/BreathingComponent.css";

class FourFour extends Component {
    render() {
        return (
            <>
                <h1>Welcome to your breathing aid</h1>
                <h3>Follow the circle</h3>
                <p>Breathe in for 4 seconds</p>
                <p>Hold for 4 seconds</p>
                <p>Breathe out for 4 seconds</p>
                <p>Hold for 4 seconds</p>

                <div className="four-four"></div>

            </>
        )
    }
}

export default FourFour;