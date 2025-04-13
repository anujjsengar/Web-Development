var b=10;
function fun(){
    console.log(b);  //first check in local MCP the go to parents lexical enviroment for value;
}
fun();

//scope:- local memory+lexical enviroment of parents; ---> creating recursion.




function fun2(){
    var a=10;
    console.log(a);
}
fun2();
//console.log(a); //undefined  Uncaught ReferenceError: a is not defined

//in var we can access varaible only in that function and functin inside that function.



// function fun3(){
//     let ans=100;
//     console.log(ans);
// }

// console.log(ans); //undefined  js2.js:28 Uncaught ReferenceError: ans is not defined beauce function is not called yet
// fun3();
//console.log(ans);


let ans2='100';
function fun4(){
    console.log(ans2);
}
console.log(ans2);