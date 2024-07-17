import React from "react";

class Test extends React.Component{

    constructor(props){
        super(props)
        
        console.log("Hi I'm Constructor of Test");
    }

    componentDidMount(){
        console.log("I'm CDM of Test")
    }


    render(){
        console.log("I'm render of Test");
        return (
            <h1>I'm Test Class Inside Profile</h1>
        )
    }
}

export default Test;