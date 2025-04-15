// 1.regular function

function fun(){
    console.log(this); //Window {window: Window, self: Window, document: document, name: '', location: Location, …} Pointing to window
}
fun();

//2.method invocation

let obj={
    num:2,
    fn:function(){
        console.log(this); //\pointing to object over which it is called.
    }
}
let myfun=obj.fn();
console.log(myfun);


//On regular calling it gives //Window {window: Window, self: Window, document: document, name: '', location: Location, …} Pointing to window


//3.Constructor Function calling


function CreateObj(){
    this.cap=20;
    console.log(this);  //CreateObj {cap: 20}cap: 20[[Prototype]]: Object ->>>Newly Created Object
}

let newobj=new CreateObj(); 
console.log(newobj); //CreateObj {cap: 20}cap: 20[[Prototype]]: Object ->>>Newly Created Object
console.log(newobj.cap); //20



//4. .call() .apply()

let obj1 ={
    ans:20,
    fn:function(a,b){
        console.log(this,a,b); //context and referene order should be same
    }
}

let obj2={
    a:50
}
// obj2.fn() //error 
// app.js:49 Uncaught ReferenceError: obj2 is not defined
obj.fn.call(obj2,2,1); // {a: 50}   //now using fn function of obj1 from obj2 and this is refering now to  obj2
obj.fn.apply(obj2);  //cannot pass multiple arguments so use array to pass.
//jab bhi tum .call() method ka usekr rhe hote ho tab jo app call ke andar mention krte ho aapka this usse point krta hai.


//5. Arrow Functions





