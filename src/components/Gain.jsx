import React, { useEffect, useState } from 'react'
import requests from "../Requests"
import axios from 'axios'

const Gain = () => {
    const [movies, setmovies] = useState([])


    const movie = movies[Math.floor(Math.random()*movies.length)]


    const getMovies = async ()=>{
        const response = await axios.get(requests.requestTrending)
        
        setmovies(response.data.results)
    }

    useEffect(() => {
        getMovies()
      }
    , [])
    console.log(movie)

  return (
    <div className='w-full h-[550px] text-white'>
       <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
        <div className='w-full h-full'>
         
            <img src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`} alt={movie?.title} className='w-full h-full object-cover'/>
            <div className='absolute w-full top-[20%] p-4 md:p-8'>
              
              <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>


              <div className='py-4'>
                <button className='border border-gray-300 bg-gray-300 text-black py-2 px-5'>play</button>
                <button className='border border-gray-300 py-2 px-5 ml-4'>watch later</button>
              </div>

              <p className='text-gray-300 text-sm'>Released : {movie?.release_date}</p>
              <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[30%]'>Released : {movie?.overview}</p>


            </div>
        </div>
        
    </div>
  )
}

export default Gain