//How to write Function


function sum(){

}

//How to write function inside an object

let obj={
    Math:90,
    Science:95,
    total : function(){
        console.log(this.Math+this.Science)  //this (special keyword)refer to current object
    },
    bulaao : function(){
        console.log(`${this.Science} -Science`);
        return this.Math;
    }
}
console.log(obj.Math);
console.log(obj.total)  //Print method
console.log(obj.total())  //work as defined
//if you are not return anything from a function then js automatically return undefined
console.log(obj.bulaao())



//ES6 introduce two new loop;

// #Loops
// for


for(let i=0;i<=5;i=i+1){
    for(let j=0;j<=5;j++){
        if(i===j){
            break;
        }
        console.log(i+" "+j);
    }
}

console.log(1,2)  //two different line it used to print


let num=100;
while(num-->0){
    console.log(num);
}


//for-in
//IF WE ARE Going to iterte inside a object then use for in

//for-of use to iterate ove iteratable item;


//for-in:
let object = {
    name:'bhuvnesh',
    age:27
}

for(let item in object){
    console.log(this.item); //undefined beacue this is only use iside object
}


for(let item in object){
    console.log(item); ///output only keys
}

for(let item in object){
    console.log(object[item]); ///output values
}

//for-of(arra,maps,list,vectors);

let arr=['ANUJ','LOVELY'];

for(let item of arr){
    console.log(item);    //output aajayega
}