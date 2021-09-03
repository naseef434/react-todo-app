import { Component } from "react";

class EventClass extends Component{
    constructor(props){
        super(props);
        this.state = {
            counter : 0,
            checkbox : false,
            textarea : "",
        };
    }
    
    increment=()=>{
        this.setState( (prev,props) =>(
            {counter:prev.counter+1} 
            ));
    }

    decrement=()=>{
        this.setState( (prev,props) =>(
            {counter:prev.counter-1}
        ));
    }
    checkClicked = ()=>{
        this.setState( (prev,props)=>(
            {checkbox: !prev.checkbox}
        ))
    }
    textArea = (e)=>{
        // console.log(e.target.value)
        this.setState({textarea:e.target.value})
     }
    render(){

        return(
            <div>
            {/* <button onClick={ ()=> {alert("hello class event!")}}>Button from class</button>
            <button onClick={ this.eventHandler }>Second button</button> */}
            <hr />
            <h3>Counter</h3>
            <button onClick={ this.increment }> + </button>
            <button onClick={ this.decrement }> - </button>
            <p>Youclicked : {this.state.counter}</p>
            <label for="Click for enable"></label>
            <input type="checkbox" onClick={this.checkClicked}></input>
            <p >Your check box is {this.state.checkbox?"Enabled":"disabled"}</p>
            
            <input type="text" onChange={this.textArea} />
            <h4>{this.state.textarea}</h4>
            </div>
           
            
        )
    }
}

export default EventClass;