import React from 'react'
// import Person from '../components/Person'; //must be jsx file //can be call by anyname is app.jsx 
import {Person,Papa} from '../components/Person';
function App(){
  return (
    // <Person></Person>
    //Self Closing Tag and must be JSX //calling like function
    
    <>
    <div>
    <Person/> 
    </div>
    <div>
    <Papa/>
    </div>
    </>
  )
}

export default App;