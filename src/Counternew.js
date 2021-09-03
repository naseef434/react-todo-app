import { Component, React } from "react";
 
class Counternew extends Component{
    constructor(props){
        super(props);
        this.state = {
            couter: 0
        }
    }

    increment() {
        setTimeout(()=> {
            
        this.setState(  (prev_val ) => ( { couter:prev_val.couter+1 } )   );    
    },1000)
}
    render(){
        this.increment(); 
        return (
            <h1>Class - Counter : {this.state.couter}</h1>
        )
    }


}
export default Counternew;