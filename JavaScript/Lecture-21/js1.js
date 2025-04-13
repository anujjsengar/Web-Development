
//const

const email="anujjsengar@gmail.com"
// email="sengar@.com" error beauce const cannot reassign

// const email=10; error redeclare is not possible with const
//
console.log(email);

// const var;  ///error const need instant assignment with declaration'

//let
let vare // doesnt through error beacause it can declare and assignment can be done later;
let var1="10";
console.log(var1);

var1="Anuj"; // can be reassign

// let var1="anuj" //cannot redeclare

var college; //can be declae only
var college=true; //can be redeclare also
college=10;  //can be reassign
console.log(college);

 
//Hoisting

console.log(a);//accessing before declaration //undefined
merafunc();//accessing before declaration
function merafunc(){
    console.log("Inside mera function");
}



var a=10;
sam();

function sam(){
    console.log(a); //10;
    console.log("Inner func");
}

console.log(a);

console.log(using_let); //Cannot access 'using_let' before initialization
let using_let=10;

//Hoisting :- var,let,const

//var and let,const hoisting is different
//let and const (Death Temporal Zone):-Hosting hoti hai but During this phase cannot access it need to execute that line .