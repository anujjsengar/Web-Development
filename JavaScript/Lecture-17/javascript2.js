// ----------------> Conditionals <----------------

let balance=600;
if(balance>=500){
    console.log('500'); //block
    balance-=600;
}

if(true){
    console.log("Anuj loves lovely");
}

if(true)
    console.log("Anuj Loves Lovely");
    console.log("Lovely Loves Anuj");


if(false)
    console.log("Anuj Loves Lovely");
    console.log("Lovely Loves Anuj");


if(balance>=500){
    console.log('500');
    balance-=600;
}
else{
    console.log("Loan");
    balance-=600;
}


let age=prompt("Enter age: ");//input:always take as strinf and typecaste into int(when use chrome)
let age_=parseInt(prompt("Enter age: "));
//parseInt or parseFloat ( String-->Integer);
console.log(typeof(age));
console.log(typeof(age_));
if(age<21 && age>18){
    console.log("Not allowed");
}
else if(!age<25){
    console.log("allowed without gf");
}
else{
    console.log("allowed with gf");
}