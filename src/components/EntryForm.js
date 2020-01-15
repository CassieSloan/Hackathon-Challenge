import React , {Component} from "react";

class EntryForm extends Component {
    state = {entry: "", entryTitle: "Untitled"}

    onTextareaChange = (event)=>{
        this.setState({entry:event.target.value});
    }

    onInputChange = (event)=>{
        this.setState({entryTitle:event.target.value});
    }

    onFormSubmit = (event)=>{
        event.preventDefault();
        const {onEntryFormSubmit} = this.props;
        const {entry,entryTitle}= this.state;
        onEntryFormSubmit(entry,entryTitle);
        console.log(this.state);
    }



    render(){
        const {entry,entryTitle} = this.state;
        return (
            <form onSubmit = {this.onFormSubmit}>
                <div>
                    <div><label>Entry Title</label></div>
                    <input type="text" value={entryTitle} onChange = {this.onInputChange} />
                </div>
                <div>
                    <div><label>Journal Entry</label></div>
                    <textarea onChange = {this.onTextareaChange} value={entry}></textarea>
                </div>
                <input type="submit" value="create entry" />
            </form>
        )
    }
}

export default EntryForm;