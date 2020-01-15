import BreathingComponent from "./breathing/BreathingComponent";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Homepage from "./Homepage";
import FourFour from "./breathing/FourFourComponent";
import FourSeven from "./breathing/FourSevenComponent";
import SevenEleven from "./breathing/SevenEleven";
import WorldFactsForm from "./WorldFactsForm";

class App extends Component {

    render() {

        return (
            <>
                <BrowserRouter>
                    <Route exact path="/" component={Homepage}/>
                    <Route exact path="/breathing" component={BreathingComponent} />
                    <Route exact path="/breathing/four-four" component={FourFour} />
                    <Route exact path="/breathing/four-seven" component={FourSeven} />
                    <Route exact path="/breathing/seven-eleven" component={SevenEleven} />
                    <Route exact path="/world_facts_form" component={WorldFactsForm} />

                    <Link to="/">Home</Link>
                    <Link to="/breathing">Breathing excercises</Link>
                </BrowserRouter>
            </>
        )
    }
}

export default App;