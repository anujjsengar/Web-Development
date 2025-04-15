import React from 'react'

//Event Handling
function Event(){
    function handleClick(){
        console.log("hello");
    }
    function handleClick2(str){
        console.log("hey " + str);
    }
    return(
        <div>
            {/* It can be div or h1 or any tag which use to handle effect */}
            <button onClick={handleClick}>Hello</button>
            <button onClick={()=>handleClick2("Anuj")}>Hey</button>
            {/* onclick={()=>handleClick2()} Help to catch argument Use when to send argument */}
        </div>       
    )
}

export default Event;