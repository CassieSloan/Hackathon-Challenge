import React, {Component} from "react";

class JournalEntries extends Component {

    render() {
        const {entries} = this.props;
        return (
            <>
                <h1>Recent Thoughts</h1>
                <ul>
                {entries.map(entry =>{
                    return (
                        <li key = {entry}>{entry}</li>
                    )
                })}
                </ul>
            </>
        )
    }
} 

export default JournalEntries;