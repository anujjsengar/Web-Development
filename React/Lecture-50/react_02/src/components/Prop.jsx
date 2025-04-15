import React from "react";

function Prop(props){
    console.log(props);
    return(
        <div>
            {props.name}
            <br/>
            {props.age}
        </div>
    )
}
export default Prop;


// function Prop({name,age}){  {/*Using Destructured of obj in Argument */}
//     //console.log(props);
//     return(
//         <div>
//             {name}
//             <br/>
//             {age}
//         </div>
//     )
// }
// export default Prop;