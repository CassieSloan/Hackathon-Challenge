import React, {Component} from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";
import Journal from "./Journal";
import BreathingComponent from "./breathing/BreathingComponent"
import FourFour from "./breathing/FourFourComponent";
import FourSeven from "./breathing/FourSevenComponent";
import SevenEleven from "./breathing/SevenEleven";
import Unsplash from "./Unsplash";
import Homepage from "./Homepage";
import WorldFactsForm from "./WorldFactsForm";


class App extends Component {

    render() {

        return (
        <>
            <h1>This is our hackathon app!</h1>
                <BrowserRouter>
                    <Route exact path="/" component={Homepage}/>
                    <Route exact path="/breathing" component={BreathingComponent} />
                    <Route exact path="/breathing/four-four" component={FourFour} />
                    <Route exact path="/breathing/four-seven" component={FourSeven} />
                    <Route exact path="/breathing/seven-eleven" component={SevenEleven} />
                    <Route exact path="/world_facts_form" component={WorldFactsForm} />
                    <Route exact path="/relaxing_pictures" component={Unsplash} />
                    <Route exact path="/journal" component={Journal}/>

                    <Link to="/">Home</Link>
                    <Link to="/breathing">Breathing excercises</Link>
                    <Link to="/world_facts_form">Random world facts</Link>
                    <Link to="/relaxing_pictures">Images of nature</Link>
                    <Link to="/journal">Journal</Link>


                </BrowserRouter>
            </>
        )
    }
}

export default App;