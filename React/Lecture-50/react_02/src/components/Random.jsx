// import React from 'react';

// function Random(){
//     let num=Math.floor(Math.random()*10);
//     let ele;
//     if(num===7){
//         ele="Win";
//     }
//     else{
//         ele="Defeat";
//     }
//     return (
//         <div>
//             Random Number - {num}
//             <br/>
//             Status - {ele}
//         </div>
//     )
// }
// export default Random;


function Random(){
    return (
        <div>
            {/* ternary operator */}
            {Math.floor(Math.random()*10) ===7 ? "Win" : "Defeat "}
        </div>
    )
}
export default Random;
