let arr=[10,20,30];
console.log(arr);  //Array[3];
console.log(arr[31]);  //Undefined

let arr2=['1',2,'3',null,undefined,true];
console.log(arr2);

console.log(arr2.length);
// console.log(arr.length()); Return error 

console.log(arr2[5]);

let ans=console.log(arr2[2]);  //not return anyhtong to ans
console.log(ans);  //undefined
console.log(typeof(ans));  //undefined

let answer=arr2[2];  //answer='3'
console.log(answer); // print'3'
console.log(typeof(answer));  //String

// let ans1=console.log;
// console.log(ans1);
 
console.log(10)  //Automatic ; apply

console.log(10); console.log(20) // manadarty to put ; because it contain statement;


let arr3=['Anuj','Lovely',['ANULOVE','LOVNUJ']];


console.log(arr3);

console.log(arr3[1]);

console.log(arr3[2][1]);

console.log(arr3[2]);


let num=[10,20,30];
console.log(num);
num.push(40); //add at last  //return no of element
console.log(num);
num.pop(); //last element remove //return removed or pop element
console.log(num);
num.pop(10);  //last element No matter the argument 10; 
console.log(num);

let res=num.unshift(5); //add 5  at 0 index and start
console.log(num); 
console.log(res) //length of array

let result=num.shift(num);  // start from  1 index(shift 0 to 1);
console.log(num);

console.log(result) //popped or 0 index item



// slice()

let nums=[1,2,3,4,5,6,6,7,8,9,10];
console.log(nums.slice(2))   //start from second index and return till last //nON DESTRCUTIVE
console.log(nums.slice(2,5))  //[2,5) BOTH ARE INDEX AND ENDIND INDEX IS EXCULDED


// splice()

console.log(nums.splice(5));//start from second index and return till last //DeSTRCUTIVE  slice+pop;

console.log(nums) //it remove all element after that index removed


console.log(nums.splice(3,5))  //=>[start,end)   slice+pop+insert
console.log(nums);


//split()
let user="https://google.com"; //split on basis of / return into array
let dekh=user.split("/");
console.log(dekh);//non destructive;


//join();
let dekhra=dekh.join("///"); //join array element by "/"
console.log(dekhra);  // non dectructive

//concat();

let num1=[10,20,30];
let num2=[160,165,360];
num1.concat(num2);//array change hoga hi yrr
console.log(num1.concat(num2));//non destructive hai  //work for string also
console.log(num1); //no change
console.log(num2); //no change

//include()
console.log(num1.includes(10)); //return boolen if it include in it or not
console.log(num1); //non destructive


//index()
console.log(num1.indexOf(10)); //for string also work non descrutive give -1 if not present

//reverse()
let dekhiyo=num1.reverse()  //destructive method hai ye re
console.log(de)
console.log(num1);
