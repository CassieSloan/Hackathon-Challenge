import React, {Component} from "react";
import EntryForm from "./EntryForm";
import JournalEntries from "./JournalEntries";

class Journal extends Component {
    state = {
        entries: []
    }

    onEntryFormSubmit = (entry,entryTitle)=>{
        const {entries} = this.state;
        this.setState((state,props)=>{
            return { entries: [[entryTitle, entry], ...state.entries ]};
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