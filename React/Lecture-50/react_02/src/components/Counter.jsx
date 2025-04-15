import React , {useState} from 'react';


function Counter(){
    let [count,SetCounter]=useState(0);
    function Inc(){
        SetCounter(count+1);
    }
    function Dec(){
        SetCounter(count-1);
    }
    return (
        <div>
        <div>{count}</div>
        <br/>
        <button onClick={Inc}>Increment</button>
        <button onClick={Dec}>Decrement</button>
        </div>
    )
}

export default Counter;