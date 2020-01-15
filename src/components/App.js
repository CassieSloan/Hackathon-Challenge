import React, {Component} from "react";
import { BrowserRouter, Route } from "react-router-dom";
import WorldFactsForm from "./WorldFactsForm";

class App extends Component {
    render () {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Route exact path="/world_facts_form" component={WorldFactsForm} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;