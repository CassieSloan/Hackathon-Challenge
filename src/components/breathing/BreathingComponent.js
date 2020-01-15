import React, {Component} from "react";
import "./../../styles/BreathingComponent.css";
import { BrowserRouter, Link } from "react-router-dom";


class BreathingComponent extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="text">Welcome to your breathing aid</h1>
                <h3 className="text">Pick a breathing method</h3>
                <BrowserRouter>
                    <Link className="text" to="/breathing/four-four">Four fours</Link>
                    <Link className="text" to="/breathing/four-seven">Four seven</Link>
                    <Link className="text" to="/breathing/seven-eleven">Seven eleven</Link>
                </BrowserRouter>

            </div>
        )
    }
}

export default BreathingComponent;