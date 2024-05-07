// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import login from './hii/stateHook/login';
import Signup from './hii/stateHook/Singup';
import "./App.css";





const App = () => {
  const[userExist,setUserExist] =useState(true);
  return (
    <section>
      <article className='border-[1px] b-white rounded-md w-[300px] p-3 flex flex-col gap-4'>
        {userExist?<login/>:<Signup/>}
        
        
      

        {userExist?<button className='px-4 py-1 bg[red] font-semibold text-white rounded' onClick={()=>setUserExist(false)}>Signup</button>:
        <button className='px-4 py-1 text-white py-1 bg-blue font-semibold rounded' onClick={()=>setUserExist(true)}>login</button>}
          
          
      </article>

    </section>
  )
}

export default App