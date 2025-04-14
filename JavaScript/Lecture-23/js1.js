// Array Important Method  //

//forEach Method(take a callback function):-Take an array and apply function to all element

let arr= [100,50,30]; 
arr.forEach(function(item,index){ //where i is iterator for every element of Array
    console.log(index); //giving index //may also ignore it
    console.log(item-20);
})

function fun(item){
    console.log(item*2);
}

console.log(arr.forEach(fun)); //for  fun is callback; //undefined beacuse of no return of Foreach



console.log(arr); //non desctructive


//Map (take call back function +return new array) -->Foreach+return Array

let marks=[10,15,20,25,30]

let newMarks=marks.map(function(item,index){
    return item*2;
    });
console.log(marks); //same
console.log(newMarks); //new one


//3. Filter ()Work as Marks but just check condition: It also accept callback fuction and return a new array
//``````it accept callback
//``````it return  a new array
//``````it only send the truthful value to new array
// conditon check based
let mark=marks.filter(function(item,index){
    return item > 20
}) //only return item by functionon basis of condition
console.log(marks); //same
console.log(mark); //new one

//sort:
let  arr1=[12,2,34,3,18,90,16,36,76];
let sortas=arr1.sort();   //lexograpgically sorted
console.log(arr1); //destructive method he bhai ye toh
console.log(sortas);
let sortdec=arr1.sort(function(a,b){
    return b-a; //camparator function; same in java
});
console.log(arr1);
console.log(sortdec);


