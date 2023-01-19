import React from "react";


class Renderlifecycle extends React.Component{

    constructor () {
        super();
        this.state= {
            email:"zama@gmail.com"
        }
    }
     render() {
        console.warn("Render Methode", this.state.email)
//render methode 
        return(
            <div>
                <h1>Create Rendering methode </h1>
                <button onClick={() => this.setState({email:"sher@gmaul.com"})}>Update Email Address</button>
            </div>
        )
     }
}
    


export default Renderlifecycle;