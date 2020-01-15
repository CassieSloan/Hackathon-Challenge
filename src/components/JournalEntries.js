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
                        <li key = {entry[0]}>
                            <h3>{entry[0]}</h3>
                            <p>{entry[2]}</p>
                            <h5>{entry[1]}</h5>
                        </li>
                    )
                })}
                </ul>
            </>
        )
    }
} 

export default JournalEntries;