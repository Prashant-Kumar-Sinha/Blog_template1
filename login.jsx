// eslint-disable-next-line no-unused-vars
import React from 'react'

const login = () => {
  return (
    <form>
    <h2 className='text-center font-bold text-2xl'>Login Form</h2>
        <div className='py-2'>
            <label htmlFor='userEmail' className='flex flex-col text-[1rem] my-1 font-semibold'>User Email  </label>
                    <input type='email' id='userEmail' placeholder='Enter email id' required className='w-[100%] px-2 py-1 outline-none rounded shadow-sm shadow-slate-500'/>
          
        </div>
        <div>
            <label htmlFor='userPassword' className='flex flex-col my-1 font-semibold'>User Password</label>
                    <input type='email' placeholder='Enter email id' id='userPassword' required  className='w-[100%] px-2 py-1 outline-none rounded shadow-sm shadow-slate-500'/>
            
        </div>
    </form>
  )
}

export default login