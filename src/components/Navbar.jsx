import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {
  const {user,logOut} = UserAuth()
  const navigate = useNavigate()

  const handleLogout =async()=>{
    try{
        await logOut()
        navigate('/')
    }
    catch(error){
      console.log(error)
    }
  }

  console.log(user)
  return (
    <div className='flex items-center justify-between p-4 z-[100] absolute w-full'>
      <Link to='/'>
        <h1 className='text-4xl text-red-600 cursor-pointer font-bold'>Netflix</h1>
      </Link>
      {user?.email ?(<div>
          <Link to='/account'>
            <button className='text-white pr-4'>Account</button>
          </Link>
          
            <button onClick={handleLogout} className='bg-red-600 text-white px-6 py-2 rounded cursor-pointer'>Log out</button>
          
            
        </div>):(<div>
          <Link to='/login'>
            <button className='text-white pr-4'>Sign In</button>
          </Link>
          <Link to='/signup'>
            <button className='bg-red-600 text-white px-6 py-2 rounded cursor-pointer'>Sign Up</button>
          </Link>
            
        </div>)}  
      
    </div>
  )
}

export default Navbar