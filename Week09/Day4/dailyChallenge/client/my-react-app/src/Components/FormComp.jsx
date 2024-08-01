import React from "react";

export default class FormComp extends React.Component {
    constructor(props){
        super(props)
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        console.log(event.target);
        const message = document.getElementById('message').value;
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body : JSON.stringify({message})
        };
        const url = 'http://localhost:3001/api/world'
        try {
            const resJson = await fetch(url, options);
            const res = await resJson.json();
            console.log("res: ", res)
            this.props.setMessage(res.message);
    
        } catch (error) {
            console.error(error)
        }
    }

    render(){
        return (
        <>
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Your input" id="message"/>
                <input type="submit" value="Submit"/>
            </form>
        </>
        )
    }
}