import React, {Component} from "react";
import EntryForm from "./EntryForm";
import JournalEntries from "./JournalEntries";

class Journal extends Component {
    state = {
        entries: []
    }

    componentDidMount(){
        if(localStorage.getItem("entries")){
            const entries = JSON.parse(localStorage.getItem("entries"));
            this.setState({entries : entries });
        }
    }

    onEntryFormSubmit = (entry,entryTitle)=>{
        this.setState((state,props)=>{
            return { entries: [[entryTitle, entry], ...state.entries ]};
        }, ()=>{
            localStorage.setItem("entries", JSON.stringify(this.state.entries));
        });
                
    }

    render() {
        return (
            <>
                <h1>Jurra's Journal Component </h1>
                < EntryForm onEntryFormSubmit={this.onEntryFormSubmit} />
                <JournalEntries entries ={this.state.entries} />
            </>
        )
    }
} 

export default Journal;