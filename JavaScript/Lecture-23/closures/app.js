// ->>>>>>>>>>closures<<<<<<<<<------


function func1(){
    let username='Anuj';
    function print(){
        console.log(username);
    }
    return print; //returning a function 
}
let ans=func1();  ///ans stores a function print
ans(); // calling print; output-Anuj
//THis al about closures

// Closures
// A function bundled together with references to its surrounding state  or lexical enviroment that is called closure. 