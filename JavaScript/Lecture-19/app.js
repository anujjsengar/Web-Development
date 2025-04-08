let person = {
    name:'Anuj',  //Property 1
    age:'27', //Property 2
    isMale:true, //Property 3
    favColor:'Blue' ////Property 4
}

//Access Property;

console.log(person.name);

// so Math.floor() where Math is also a Object (Everything in JS is an object)

console.log(person.isMale);

let details={
    name:'anuj',
    age:'20'
}
//console.log([age]); //Age is not defined refernce error all key by default store as string
console.log(['age']);
//Array is passed as reference
//Object is also pass as reference


let person2=person;  //same concept as defined in aaray reference using bucket concept
console.log(person2.name);


person2.name="Lovely"; //name changed because refer by memory(Pass by Reference
console.log(person.name);


