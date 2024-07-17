import React from "react";
import Test from "./Test"

class Profile extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            first:"Saurabh",
            count:1,
        }
        console.log("Hi I'm Constructor");
    }

    componentDidMount(){
        console.log("I'm CDM")
    }

    componentDidUpdate(){
        console.log("I'm CDU")
    }

    render(){
        console.log("I'm render")
        return (
        <>
        <h1>Hi Class Component</h1>
        <h2>{this.props.name}</h2>
        {/* <Test/> */}
        <h2>{this.state.first}</h2>
        <button onClick={()=>{
            this.setState({
                count:2
            })
        }}>
        {this.state.count}</button>
        </>
        )
    }
}

export default Profile;