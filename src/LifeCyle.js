import { Component,React } from "react";

class LifeCycle extends Component{
    constructor(props){
        super(props)
        console.log("constructor trigger")
    }
    componentWillUnmount(){
        console.log("inside componenet will mount")
    }
    render(){
        console.log("inside render")
        return(
            <div>
                <h1>Life Cycle</h1>
            </div>
        )
    }
    componentDidMount(){
        console.log("inside componenet did mount")

    }
   
}
export default LifeCycle;