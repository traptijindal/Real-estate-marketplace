import React from 'react'
import {Link} from 'react-router-dom';

export default function Signin() {
  return (
    <div className=' p-3 max-w-lg mx-auto'>
      <h1 className='text-white text-3xl text-center font-semibold my-7'>Signin</h1>
      <form className='flex flex-col gap-4'>
        <input type="text" placeholder="username" id="username" 
        className='border p-3 rounded-lg'/>
        <input type="email" placeholder="email" id="email" 
         className='border p-3 rounded-lg'/>
        <input type="password" placeholder="password" id="password"
         className='border p-3 rounded-lg' />
         <button className='text-white bg-slate-700 p-3 rounded-lg  hover:opacity-95 disabled:opacity-80'>
          Sign In
         
         </button>
         <div className='flex gap-2 mt-5'>
         <p className='text-white'>Signup</p>
         <Link to={"/sign-up"}>
         <span className='text-blue-700'>Dont have create one </span>
         </Link>
      
       </div>
      </form>
    </div>
  )
}