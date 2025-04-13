console.log("Print-1");
{
    console.log("Print-2");  ///all run
}


let score=50;

if(score>33){
    let c=20;  //undefined  ReferenceError: c is not defined
    var s=20;
}
//if block completely done then block scopre finished;
//console.log(c);  //undefined  ReferenceError: c is not defined after execution of block finish then let c finished;
console.log(s); //run due to functional scope;


if(score>30){
    let score=10;
    console.log(score); //print 10  beauce we are using let;
}
console.log(score); //print 50;