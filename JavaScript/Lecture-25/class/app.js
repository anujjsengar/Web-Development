//Constructor Function to Create Object using blue-print of prototype
function Person(naam,mail){
    this.name=naam; //key:value
    this.email=mail;
}
Person.prototype.print=function(){
    console.log(`My Name is ${this.name}`);
}
let p1=new Person('Anuj',"anuj@gmail.com");
console.log(p1);
console.log(p1.name)
console.log(p1.email)
console.log(p1.print()); //return default automatically


//CLASS SYNTAX(working same)
class Candidate{
    constructor(naam,mail){
        this.name=naam; //key:value
        this.email=mail;
    }
    getName(){ //cannot use of function keyword
        return `My name is ${this.name}`
    }
}

let candidate=new Candidate("Rohit","r@gmail.com");
console.log(candidate);
console.log(candidate.name);
console.log(candidate.email);
console.log(candidate.getName); //print function body
console.log(candidate.getName()) //print out


//Inheritence
class Student extends Candidate{
    constructor(naam,mail,roll) {
        super(naam,mail); //to call parents constructor super contractor is used to access the super property
        this.roll=roll;
    }
    getRoll(){
        return  `${this.roll}`
    }
}
let st=new Student("Deepak","Sengar",9);
console.log(st);
console.log(st.name);
console.log(st.roll);
console.log(st.getRoll());



//----------------> this <--------------

