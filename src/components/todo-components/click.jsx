import React from 'react';
import axios from 'axios';
class Click extends React.Component {
    constructor(){
        super();
        this.state = {response : ""}
    }
    render = ()=> {

        return (
        <React.Fragment>
            <button onClick={this.clickme}>Click Me</button>
            <br/><br/>
            {this.state.response}
        </React.Fragment>
        )
    }
    
    clickme = () => {
        console.log("Clicked");
        axios.get("http://localhost:4000/")
        .then((res) => { 
            this.setState({response: res.data })
        })
    }
}



export default Click;