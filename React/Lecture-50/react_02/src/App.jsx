import React from 'react'
import Cat from './components/Cat'
import Random  from './components/Random'
import Event from './components/Event'
import Prop from './components/Prop'
import Person from './components/Person'
import Counter from './components/Counter'
function App(){
  return (
    // Allways have single parents in return 
    <div>
      {/* <Cat/>
      <Random/> */}

      {/* <Event/> */}

      {/* <Prop name="Anuj" age="20" />   */}
      {/*Can only pass string */}
      {/* <Person name="Anuj" /> */}
      <Counter/>
    </div>
  )
}


export default App;
