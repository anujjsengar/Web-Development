let arr=[10,20,30,40,50,60,70,80,90];
console.log(arr);
let arr1=arr; //Array pass as refernce :- bucket is point a array and bucket 2 also pointing to same array
console.log(arr1);
//Array  are Refernce type;
arr.reverse();
console.log(arr);
console.log(arr1);  //Reflect changes to both array because both have same refernce adrress;