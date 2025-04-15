import React from 'react'
// import Person from '../components/Person'; //must be jsx file //can be call by anyname is app.jsx 
import {Person} from '../components/Person';
import {Papa} from '../components/Person';
function App(){
  return (
    // <Person></Person>
    //Self Closing Tag and must be JSX //calling like function
    
    <>
    <div>
    <Person/> 
    </div>
    <div>
    <papa/>
    </div>
    </>
  )
}

export default App;