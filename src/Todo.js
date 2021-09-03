import { render } from "@testing-library/react";
import { Component,React } from "react";

class TodoApp extends Component{
    constructor(props){
        super(props);
        this.state = {
            items : [],
            textContent : ""
        };

    }
     getTxt = (e)=> {
         this.setState({textContent: e.target.value})
     }

     addItem = () => {
         let currentItems = this.state.items
         let currentTxt = this.state.textContent
         currentItems.push(currentTxt)
         this.setState({items: currentItems})
     }
     dleteItem = (index) =>{
         let currentItem = this.state.items
         currentItem.splice(index,1)
         this.setState( {items: currentItem} )
     }
    render(){

        return (
            <div>
                <h1>To do App</h1>
                    <hr />
                 <label>Enter a task  </label>   
                <input type="text" onChange={this.getTxt} />&nbsp;
                <button onClick={this.addItem}>Add</button>
                <ol>
                 
                    {this.state.items.map((items,index)=> 
                        {
                            return (
                                <li>{items} - <button onClick={ ()=> {this.dleteItem(index)} }>Dlete</button></li>
                                
                            )
                        }
                    )}
                    <br />
                </ol>
                
            </div>
            
        )
    }

    
}
export default TodoApp;

