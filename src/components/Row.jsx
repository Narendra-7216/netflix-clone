import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Row = ({title,fetchUrl}) => {

    const [movies, setmovies] = useState([])


    useEffect(()=>{
        axios.get(fetchUrl).then((response)=>{setmovies(response.data.results)})
    },[fetchUrl])

    

  return (
    <>
    <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
    <div className='relative flex items-center'>
        <div id={'slider'}>
            {movies.map((item,id)=>{
               return <div className='w-[160px] sm:w-[200px] md:[240px] lg:[280px] cursor-pointer relative inline-block p-2'>
                    {console.log(`https://image.tmdb.org/t/p/w500${item.backdrop_path}`)}
                    <img src={`https://image.tmdb.org/t/p/w500${item?.backdrop_path}`} alt={item?.title}/>
                </div>
            })}
        </div>
    </div>
    </>
  )
}

export default Row