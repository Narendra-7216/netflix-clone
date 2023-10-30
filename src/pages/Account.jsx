import React from 'react'
import SavedShows from '../components/SavedShows'
const Account = () => {
  return (
    <>
    <div className='w-full text-white'>
    <img className='w-full h-[400px] object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="/" />
    <div className='bg-black/60 w-full h-[550px] fixed top-0 left-0'>
      <div className='absolute top-[20%] p-4 md:p-8'>
        <h1 className='text-3xl font-bold md:text-5xl'>My Shows</h1>
      </div>
    </div>
    </div>
    <SavedShows />
    </>
  )
}

export default Account