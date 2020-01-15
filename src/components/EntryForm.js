import React , {Component} from "react";

class EntryForm extends Component {
    state = {entry: "", entryTitle: "Untitled"}

    onTextareaChange = (event)=>{
        this.setState({entry:event.target.value});
    }

    onTextAreaSubmit = (event)=>{
        event.preventDefault();
        const {onEntryFormSubmit} = this.props;
        const {entry}= this.state;
        onEntryFormSubmit(entry);
        console.log(this.state);
    }



    render(){
        const {entry} = this.state;
        // const {state} = this.props
        return (
            <form onSubmit = {this.onTextAreaSubmit}>
                <div>
                    <textarea onChange = {this.onTextareaChange} value={entry}></textarea>
                </div>
                <input type="submit" value="create entry" />
            </form>
        )
    }
}

export default EntryForm;