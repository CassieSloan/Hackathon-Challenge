import React, {Component} from "react";
import "./../../styles/BreathingComponent.css";

class SevenEleven extends Component {
    render() {
        return (
            <>
                <h1>Welcome to your breathing aid</h1>
                <h3>Follow the circle</h3>
                <p>Breathe in for 7 seconds</p>
                <p>Exhale for 11 seconds</p>

                <button>start</button>

                <div className="seven-eleven"></div>

            </>
        )
    }
}

export default SevenEleven;