// import React from  'react'
// function Person(props){
//     let naam=props.name;
//     function handleLogout(){
//         console.log(naam);
//         naam="Lovely";
//         console.log(naam);
//     }
//     return (
//         <div>
//         <div>{naam}</div>
//         <button onClick={handleLogout}> Logout</button>
//         </div>
//     )
// }

// export default Person;
//  ----------------> Above Code is not rerendering after change 
//------------------> variable will change its a functional component and for dhyanmic change in functional component we use hooks
// -----------------> Use Hooks --->useState();


import React, {useState}from  'react'
function Person(props){
    let [naam,setName] = useState(props.name);
    function handleLogout(){
        console.log(naam);
        setName("Lovely"); //async task perform at last.-->Last Perform;
        console.log(naam);
        
    }
    return (
        <div>
        <div>{naam}</div>
        <button onClick={handleLogout}> Logout</button>
        </div>
    )
}

export default Person;