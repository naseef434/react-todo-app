import React from "react";

var count = 0;
function Counter(){
    count ++;
    return(
        <h1>Counter  : {count}</h1>
    )
}
export default Counter;