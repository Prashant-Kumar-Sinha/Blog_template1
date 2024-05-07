
// eslint-disable-next-line no-unused-vars
import React from 'react'

const Signup = () => {
  return (
    <form>
    <h2 className='text-center font-bold text-2xl'>SignUp Form</h2>
    <div className='py-2'>
            <label htmlFor='userName' className='flex flex-col text-[1rem] my-1 font-semibold'>User Name  </label>
                    <input type='text' id='userEmail' placeholder='Enter full name' required className='w-[100%] shadow-sm shadow-slate-500 px-2 py-1 outline-none rounded text-black'/>          
        </div>
        <div className='py-2'>
            <label htmlFor='userEmail' className='flex flex-col text-[1rem] my-1 font-semibold'>User Email  </label>
                    <input type='email' id='userEmail' placeholder='Enter email id' required className='w-[100%] px-2 shadow-sm shadow-slate-500 py-1 outline-none rounded text-black'/>          
        </div>
        <div>
            <label htmlFor='userPassword' className='flex flex-col my-1 font-semibold'>User Password</label>
                    <input type='email' placeholder='Enter email id' id='userPassword' required  className='shadow-sm shadow-slate-500 w-[100%] px-2 py-1 outline-none rounded text-black'/>
            
        </div>
    </form>
  )
}

export default Signup
