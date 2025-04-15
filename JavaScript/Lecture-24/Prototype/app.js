

let todo={
    title:'buy flowers',
    desc:function(){
        return `your task ${this.title} `;
    }
};

console.log(todo.title); //buy flowers
console.log(todo.desc()); // your task buy flowers
console.log(todo.sachin);  //undefined

console.log(todo.toString()); //[object Object]; This is beacause of Prototype.
//First search it todo if not found than search into prototypes
//If you try to access tha property of an object hen JS will firstly find it inside that object, then if not found,it will go to its Prototype to search.
//What is Prototype-->It is also an object which is used as fallback source of properties.

console.log(todo.toString().__proto__); //  String {'', anchor: ƒ, at: ƒ, big: ƒ, blink: ƒ, …}
//String is parents class

// todo.__proto__  (dender proto)
// {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}

// todo.__proto__===Object.prototype (fallback) //Type of Prototype
// true

// Object.prototype.__proto__
// null  Last one This is called prototype chain