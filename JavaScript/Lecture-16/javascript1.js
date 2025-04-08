let str='Anuj is in love with someone.'
let ans=str[5]; //0 based Indexing
console.log(ans);

// let magicNum=10;
// console.log(magicNum);
// let magicNum='Sam';//In let Cannot intialize twice or reintialize


let magicNum=10;
console.log(magicNum);
magicNum='sam'  //Weekly typed datatype:
console.log(magicNum); //Correct as we donot need to defien type it olny re refereed the bucket


let naam=10;
console.log(naam);
naam='sam';
console.log(naam); //We only know the type of datatype only at run time


let string ="anuj is good";
console.log(string[0]);
console.log(string[2]);
console.log(string[100]);  //Undefined Automatically 


let instr;
console.log(instr)  //Undefined Automatically


let stringmethod;
stringmethod='Anuj loves lovely';
console.log(stringmethod)

//substr(index,length)
console.log(stringmethod.substr(2))  //It result from index 2 to all
console.log(stringmethod.substr(0,10)); // 0 is index and 10 is length
console.log(stringmethod.substr(1,2))
console.log(stringmethod.substr(-6,6)) //-4 to right side
console.log(stringmethod.substr(-6,-1)) // negative  length cannot coidered giving default.
console.log(stringmethod.substr(1,0)) //Empty
console.log(stringmethod.substr(0,100)); //If index go outof range then it print till last index
console.log(stringmethod.substr(100)); //Empty



//substring(index,index) same as java

console.log(stringmethod.substring(2));
console.log(stringmethod.substring(1,5));  //end pint not include

console.log(stringmethod.substring(7,5)); //starting index >ending index -->Swapping happend and become(5,7)  
console.log(stringmethod.substring(5,7));

console.log(stringmethod.substring(-5,2));  // Negative value encountered as 0;
console.log(stringmethod.substring(0,2)); 

console.log(stringmethod.substring(-5,-2)); //Empty;

console.log(stringmethod.substring(-2,-3)); //Empty

//indexOf(char);

console.log(stringmethod.indexOf('l'));//First l index
console.log(stringmethod.indexOf('x')); //-1 if not present
console.log(stringmethod.indexOf('l',5));//5 not include it skip only 4;



//first encountered
let index=stringmethod.indexOf('l');
console.log(index);
// second encountered
index=stringmethod.indexOf('l',stringmethod.indexOf('l')+1);
console.log(index);

//third encountered
index=stringmethod.indexOf('l',stringmethod.indexOf('l',stringmethod.indexOf('l')+1)+1);
console.log(index);



//replace("Kis chiz ko replace" ,"Kis chiz se")
console.log(stringmethod.replace('o','O')); //replace first o only
console.log(stringmethod.replaceAll('o','O')); //replace all o to O;
console.log(stringmethod.replace('love','like'));

//repeat(number)

console.log(stringmethod.repeat(3)); //print 3 times
console.log(stringmethod.repeat(1)); //print 1 times


//toUpperCase()
console.log(stringmethod.toUpperCase()); //convert into uppercase

//toLowerCase()
console.log(stringmethod.toLowerCase());//convert into lowercase

//trim():it is used to trim or remove extra white space from starting and ending of string;
let space="          Lovely Loves Anuj " 
console.log(space.trim())



//----------->Boolean<-----------
let boolvar=true;
console.log(boolvar); //console--> true (typecasting nhi hoti toh 1 nhi aata)
console.log(!boolvar);  //complement console-->false

let newbool=false;
console.log(newbool);

let result=(newbool==boolvar);
console.log(result);

newbool=true;
result=(newbool==boolvar); 
console.log(result);

newbool=false
let result2=(newbool===boolvar)
console.log(result2);

newbool=true;
let result3=(newbool==1) //double equaltity (general equality): it only check value eqauality not datatype
console.log(result3);


newbool=true;
let result4=(newbool===1) //triple equality (strict equality) it check value and datatype both
console.log(result4);

console.log(""==0); //true
console.log(undefined==0) //false
console.log(null==0) //false
console.log([]==0) //true []-->""-->0


console.log(10==10.0) //true
console.log(10===10.0) //true both NUMBER


