 
function outer(){
    let name="Anuj";
    function inner(){
        console.log(name);
    }
    return inner;
}

let fun=outer();  //yahan iner function return hoga or store hoga fun mai
fun();


//real life use of Closures
//if we doesnotwant to give access to anyone of class need closures.


function counter(){
    let count=10;
    function getCount(){
        return count;
    }
    return getCount;
}

let count=counter();
console.log(count());
//Above code is used to provide security to count varaible


function counting(){
    let count=10;
    return {
        getCounter : function(){
            return count;
    }
    };
}

let num=counting();
console.log(num.getCounter());
//Above code is used to provide security to count varaible
//work as object. so two access that method need num.getCount;



//small application

function App(){
    let count=0;
    return {
        getCount:function(){
            return count;
        },
        increment:function(){
            count+=1;
        },
        decrement:function(){
            count-=1;
        },
        reset:function(){
            count=0;
        }
    };
}
//also a closure hold the count varaible with it.
let pointer=App();
console.log(pointer.getCount());
pointer.increment();
console.log(pointer.getCount());
pointer.decrement();
console.log(pointer.getCount());
pointer.increment();
console.log(pointer.getCount());
pointer.reset();
console.log(pointer.getCount());