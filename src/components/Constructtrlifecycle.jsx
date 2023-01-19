import React from "react";

class Constructtrlifecycle extends React.Component{

      
    constructor () {
        super()
       this.state={
        data:"zaman",
       }
    }
    render () {
        return (
            <div>
                <h1>hello i am here{this.state.data} </h1>
                {/* <h1>hello i am hereee </h1> */}
            </div>
        )
    
    }
}


export default Constructtrlifecycle;
