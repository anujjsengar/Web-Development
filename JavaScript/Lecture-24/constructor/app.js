function fun(){

}
let naam=fun();
console.log(naam);

function user(naam,email){
    this.name=naam;
    this.email=email;
}
let user1= new user("Anuj","Anuj@gmail.com"); //create a object of user
console.log(user1);
console.log(user1.name);

//constrcutor is used as blue print to create a new object with similar property.

user.prototype.description=function(){
    return `my name is ${this.name}`
} //creating a prototype

let user2=new user("Anuj Sengar","sengarlovely42@gmail.com");
console.log(user2);
console.log(user2.name);

console.log(user1.description())
console.log(user2.description())
