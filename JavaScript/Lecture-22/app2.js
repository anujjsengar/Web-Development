// function a(fn){
//     console.log("function a");
// }

// function b(){
//     console.log("function b");
// }

// a(b);  // function a


// function a(fn){  //Higher Order Function
//     console.log("function a");
//     fn();  //also run 2nd function
// }

// function b(){
//     console.log("function b");
// }

// a(b);  // function a function b


// function a(){
//     console.log("function a");
//     return  b();
// }

// function b(){
//     console.log("function b");
// }

// a();  // function a function b

// function a(){
//     b(); //ruuning due to hoisting;
//      function b(){
//         console.log("Running");
//      }
//      b(); // normal execution
// }
// a();

// // b();  app2.js:44 Uncaught ReferenceError: b is not defined

function a(){
    console.log("function a");
    return  b();
}
    
function b(){
    console.log("function b");
}
    
console.log(a());  // function a function b undefined as function return by default undefined



function getString(array){
    let result=[];
    for(let item of array){
        if(typeof(item)==='string'){
            result.push(item);
        }
    }
    return result;
}
function getNumber(array){
    let result=[];
    for(let item of array){
        if(typeof(item)==='number'){
            result.push(item);
        }
    }
    return result;
}

let arr=['sam','saarth',10,10];

console.log(getString(arr));
console.log(getNumber(arr));




//Callback function

function func1(b){
    console.log("a");
    b();
}

function func2(){
    console.log("b");
}

func1(func2); //print all function b; //a b
//callback function is func2 passed as arguement ans using also;;
//func1(func2()); //print all function b; //a b
// //app2.js:90 Uncaught TypeError: b is not a function
// at func1 (app2.js:90:5)
// at app2.js:99:1
// func1	@	app2.js:90
// (anonymous)	@	app2.js:99
