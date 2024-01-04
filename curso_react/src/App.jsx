import { useState } from 'react'

import './App.css'




import React from 'react'

const fecha= new Date()


export const App = () => {
  return (
    <>
    
    <h1>
      {JSON.stringify(fecha)}
    </h1>
   <div className="calculadora">
    <div className="pantalla">0</div>
    <div className="btn">1</div>
    <div className="btn">2</div>
    <div className="btn">3</div>
    <div className="btn">4</div>
    <div className="btn">5</div>
    <div className="btn">6</div>
    <div className="btn">7</div>
    <div className="btn">8</div>
    <div className="btn">9</div>


   </div>
    
    
    </>
  )
}


// function   App ()  {
    
  

//   return (
//     <div className="calculadora">
//       <div className="pantalla">0</div>
//       <button id='C' className='btn'>C</button>
//       <button id='borrar' className='btn'></button>
//       <button className='btn '>1</button>
//       <button className='btn '>2</button>
//       <button className='btn '>3</button>
//       <button className='btn '>4</button>
//       <button className='btn '>5</button>
//       <button className='btn '>6</button>
//       <button className='btn '>7</button>
//       <button className='btn '>8</button>
//     </div>
    
//   );
// }
// export default App;

