import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <div className='w-full h-screen'>
      <img className='hidden w-full h-full sm:block absolute object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="/" />
      <div className='bg-black/60 fixed w-full h-screen top-0 left-0'> </div>
      <div className='fixed w-full px-4 py-24 z-50'>
        <div className='max-w-[450px] h-[600px] bg-black/75 text-white mx-auto'>
          <div className='max-w-[320px] mx-auto py-16'>
            <h1 className='text-3xl font-bold '>Sign In</h1>
            <form className='w-full flex flex-col py-4'>
              <input className='bg-gray-600 rounded p-4 my-2'type="email"  placeholder='email' autoComplete='email'/>
              <input className='bg-gray-600 rounded p-4 my-2'type="password" placeholder='password' autoComplete='current-password'/>
              <button className='bg-red-600 rounded py-4 my-2 font-bold'>Sign In</button>
              <div className='flex justify-between items-center text-sm text-gray-600'>
                <p className='py-2'><input className='mr-2' type="checkbox"/>Remember me</p>
                <p>Need Help?</p>
              </div>
              <p className='py-2'><span className='text-gray-600'>New to Netflix?</span>{' '}<Link to="/signup">Sign Up</Link></p>
            </form>
          </div>
        </div>
      </div>
      
    </div>
    </>
  )
}

export default Login