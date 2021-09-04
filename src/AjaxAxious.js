import { Component } from "react";
import axios from "axios";

class AjaxAxoious extends Component{
    constructor(props){
        super(props)
        this.state = {
            posts : [],
        }
        
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then( (response)=>{
            this.setState({posts: response.data})
        })
    }
    render(){
        return (
            <div>
                <h1>Posts</h1>
                <table>
                    <thead>
                        <tr>
                            <td>SN</td>
                            <td>Posts</td>
                            </tr>
                    </thead>
                    <tbody>
                        { this.state.posts.map( (value,key) =>{
                            return (
                                <tr>
                                    <td>{value.id}</td>
                                    <td>{value.title}</td>
                                    
                                </tr>
                            )
                        } )}
                    </tbody>
                </table>
            </div>
            
        )
    }
}
export default AjaxAxoious;