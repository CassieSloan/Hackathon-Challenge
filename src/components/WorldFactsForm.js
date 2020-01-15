import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import axios from "axios";
import WorldFactsFact from "./WorldFactsFact";

class WorldFactsForm extends Component {
    state = { keyword: "", fact: "" };

    // componentDidMount() {
        // axios.get("https://api.gdeltproject.org/api/v2/doc/doc?query=weather domain:cnn.com&format=json")
        // .then(response => {
        //     const fact = response.data["articles"][0]["title"];
        //     this.setState({ fact });
        // })
        // .catch(error => {
        //     console.log(error);
        // })
    // }

    onFormSubmit = (event) => {
        event.preventDefault();
        const { keyword } = this.state;
        axios.get(`https://api.gdeltproject.org/api/v2/doc/doc?query=${keyword} sourcelang:english domain:cnn.com&format=json`)
            .then(response => {
                const fact = response.data["articles"][0]["title"];
                this.setState({ fact: fact });
            })
            .catch(error => {
                console.log(error);
            });
    }
    
    onFormChange = (event) => {
        this.setState({ keyword: event.target.value });
        console.log(event.target.value);
    }

    render() {
        const { keyword, fact } = this.state;
        return(
            <>
                <h1>World Facts Form</h1>
                <p>Type in a keyword below to get a related world fact.</p>
                <form onSubmit={this.onFormSubmit}>
                    <div>
                        <label for="keyword">Keyword: </label>
                        <input type="text" name="keyword" value={keyword} onChange={this.onFormChange} />
                    </div>
                    <input type="submit" value="Submit" />
                </form>

                <WorldFactsFact fact={fact} />

            </>
        )
    }
}

export default WorldFactsForm;