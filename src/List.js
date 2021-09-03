import { render } from "@testing-library/react";
import {Component} from "react";

class ListTest extends Component{
    constructor(props){
        
        super(props);
        this.state = {
            fruit : ["apple","orange","pinapple","mango"],
            users : [
                        {name : "Naseef" ,age : 32  },
                        {name : "aishu", age : 24},
                        {name : "Riyas", age : 23},
                        {name : "irshad" ,age: 30},

            ]

    }
}
    render(){
        // var lis = this.state.fruit.map((item, index) => {
        //     return <li>{index} - {item}</li>
        // });
        
        return(
            <div>
                <h1>Listing obj</h1>
                {/* <ul>{lis}</ul> */}
                <ul>
                    { this.state.fruit.map((item, index) =>  <li key={index}>{item}</li>) }
                </ul>

                <table>
                    <tr>
                        <td>Name</td>
                        <td>Age</td>
                    </tr>
                    {
                        this.state.users.map((item, index) => 
                            {
                                return (
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.age}</td>
                                    </tr>
                                )
                            }
                        )
                    }
                </table>
            </div>
            
        )
    }
}
export default ListTest;