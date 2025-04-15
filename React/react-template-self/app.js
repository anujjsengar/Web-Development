
//Using DOM:
// let rootE1=document.getElementById('root');
// let p1=document.createElement('p');
// p1.innerHTML='i am anuj sengar';
// rootE1.append(p1);


//------------------------------

//Using React(VIRTUAL DOM)


// let rootE2=document.getElementById('root');
// // let p1=React.createElement('p',null,'hi i am anuj');
// let p2=React.createElement('p',{id:"para",className:"graph"},'hi sengar');
// // (class  ---> className, for -->htmlFor)
// let root=ReactDOM.createRoot(rootE2);
// root.render(p2)

//-----------------------------
//DOM -->VIRTUAL DOM --> JSX(JavaScript XML(Extensible Markup Language))
//babel:-Babel is compiler used to compiler to convert jsx to pure js
let rootE2=document.getElementById('root');
let p1=<p1><h1>i am sengar</h1></p1>
let root=ReactDOM.createRoot(rootE2);
root.render(p1);