// #Define a function
let num1=10;
function sum(){  //Non Parameterised Function
    let num2=20; 
    console.log(num1+num2); //can used  work beacause variable define by let have global scope
}


sum()  //Executing or calling function return undefined
sum() 
sum() 

console.log(num1);


function sum(num3){ //[parameter] //Parameterised Function
    let num2=20; 
    console.log(num1+num2+num3); //can used  work beacause variable define by let have global scope
}


sum(30); //argument // give undefined beacause of not returning anything


function sum2(){
    let str1="Anuj";
    let str2="Lovely";
    return str1+" "+str2
}

sum2() // AUTO RETURN UNDEFINED BECAUSE IT IS RETURNING SOMETHING BUT CANNOT ABLE TO STORE
console.log(sum2()); //Anuj Lovely


//multiple parameter;

function mul(num1,num2){
    return num1*num2;
}



mul(10,10);  // not work beacause function is returning something noone to store result;

console.log(mul(10,10));

console.log(mul(10))  //NaN beacuse one arguent is mising


function sam(){
    console.log("Anuj");  //print
}

console.log(sam()); //Undefined



function sam2(num1,num2=10){ //default parameter (Default parameterised function)
    return num1+num2;
}

console.log(sam2(10)); ///Output - 20
console.log(sam2(10,20)); /// output -30;  //override the default parameter


function sam3(num1=10,num2){
    return num1+num2;
}

console.log(sam3(20)); //override num1 and num2 is not defiened result in NaN
console.log(sam3(20,10))  // work beaucse all things is defined and num1 is override 