import React from "react";

var x  = 0;
function Test(){
    x++;
    alert("function test : "+ x)
}
function Event(){

    return(
        <div>
        <button onClick={ ()=> { alert("hey thre ") } }>Button 1 </button>
        <button onClick={ Test }>Button2</button>
        </div>
        
    )
    
}

export default Event;