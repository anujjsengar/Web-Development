// typeof()  :Find datatype

//Number
console.log(typeof(10));  //Number
console.log(typeof(0));
console.log(type(10.0));
console.log(typeof(10/10));
console.log(typeof(0/10));
console.log(typeof(1/0)); //it evalute to console.log(typeof(Infinity)) -infinity also exits
console.log(typeof(0/0)); //it evalute to console.log(typeof(NaN));
console.log(typeof(NaN));
console.log(type(Infinity)); //Number

//String
console.log(typeof("Anuj"));


//boolean
console.log(typeof(true));

 
//Undefined
console.log(typeof(undefined));





//-------------------->  Math Object  <--------------
// It include some mathematically function using this math object;


//PI

console.log(Math.PI);

//E

console.log(Math.E);

//log2


console.log(Math.LN2)


//sqrt
console.log(Math.sqrt(100));

//min
console.log(Math.min(12,3,4,5,6,6));

//max
console.log(Math.max(2,3,4,5,6,6));


//round off
console.log(Math.round(10.46));  //10
console.log(Math.round(10.499999))  //10
console.log(Math.round(10.5))  //11
console.log(Math.round(10.54)) //11


//ceil

console.log(Math.ceil(10.3))  //11 toward fan which is upper side
console.log(Math.ceil(-10.3)) //10

//floor
console.log(Math.ceil(10.3)) //10 toward floor downward
console.log(Math.ceil(-10.3)) //11


//random

console.log(Math.random()) // [0,1) 1 is not included
console.log(Math.random()*10) //[0,10) where 10 s not include
console.log(Math.floor(Math.random()*10)) //for without decimal but 10 not include
console.log(Math.ceil(Math.random()*10))  // [1,10]

console.log(Math.floor(6*Math.random()*10+22))   //for [22,27]  total no is 6 multiplcation factor is 6
