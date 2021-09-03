import React from "react";

const mystyle = {
    
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };

  function Header(props){
    return(
        <div >
        <h1 >Hello {props.name}{props.id} name header Function Componenet</h1>
        <h2 style={mystyle}>Hello Style </h2>
        </div>
        
    )
}
export default Header;