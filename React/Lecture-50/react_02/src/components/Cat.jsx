import React from 'react';

function Cat(){
    let a=10;
    let b="Anuj";
    let c=false;  //This is part of statement cannot use directly need JSON.stringify()
    let d="undefined"; //Wecannot see it normally only need to use as string
    let f=null;  //This is part of statement cannot use directly need JSON.stringify()
    let o={a:10}; //Cannot directly use obj
    let arr=[10,20,30];
    //expression
    return(
        <div>
            cat
            <h1>A- {a}</h1>
            <h1>B- {b}</h1>
            <h1>C- {JSON.stringify(c)}</h1>
            <h1>D- {d}</h1>
            <h1>F- {JSON.stringify(f)}</h1>
            <br/>
            <h1>obj - {o.a}</h1> {/*Cannot directly use o*/}
            <h1>arr - {arr}</h1>
            <h1>arr - {arr[0]}</h1>
            <h1>arr - {arr['0']}</h1>
        </div>
    )
}

export default Cat;