import React, { useState } from 'react'
import ColorBlock from './ColorBlock'
import ColorForm from './ColorForm'
import './App.css'

function App(){
    let [colors, setColors] = useState([
      'violet', 'blue', 
      'lightblue', 'green', 
      'greenyellow', 'yellow', 
      'orange', 'red'
    ])

   const addColor = (newColor) => {
    setColors ([...colors, newColor])
   }

  
   
    return (
        <div className="App">
          <ColorForm addColor={addColor} />
          {colors.map((color, i) => (
            <ColorBlock key={i} color={color} />
          ))}
        </div>
    )


}


export default App;
