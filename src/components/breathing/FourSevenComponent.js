import React, {Component} from "react";
import "./../../styles/BreathingComponent.css"

class FourSeven extends Component {
    render() {
        return (
            <>
                <h1>Welcome to your breathing aid</h1>
                <h3>Follow the circle</h3>
                <p>Breathe in for 4 seconds</p>
                <p>Exhale for 7 seconds</p>

                <div className="four-seven"></div>
            </>
        )
    }
}

export default FourSeven;