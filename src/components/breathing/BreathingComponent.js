import React, {Component} from "react";
import "./../../styles/BreathingComponent.css";
import { BrowserRouter, Link } from "react-router-dom";


class BreathingComponent extends Component {
    render() {
        return (
            <>
                <h1>Welcome to your breathing aid</h1>
                <h3>Pick a breathing method</h3>
                <BrowserRouter>
                    <Link to="/breathing/four-four">Four fours</Link>
                    <Link to="/breathing/four-seven">Four seven</Link>
                    <Link to="/breathing/seven-eleven">Seven eleven</Link>
                </BrowserRouter>

            </>
        )
    }
}

export default BreathingComponent;