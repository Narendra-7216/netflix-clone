import axios from 'axios'
import React, { useEffect, useState } from 'react'
import{MdChevronLeft,MdChevronRight} from 'react-icons/md'

import Movie from './Movie'

const Row = ({title,fetchUrl,rowId}) => {

    const [movies, setmovies] = useState([])
    


    useEffect(()=>{
        axios.get(fetchUrl).then((response)=>{setmovies(response.data.results)})
    },[fetchUrl])


    // JavaScript to scroll left and right when clicked on the mdChevronLeft and MdChevronright

    const slideLeft = () => {
        var slide = document.getElementById('slider'+rowId);
        slide.scrollLeft = slide.scrollLeft - 500;
    }
    
    const slideRight = () => {
        var slide = document.getElementById('slider'+rowId);
        slide.scrollLeft = slide.scrollLeft + 500;
    }


  return (
    <>
    <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
    <div className='relative flex items-center group'>
        <MdChevronLeft size={40} onClick={slideLeft} className='bg-gray-300 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer hidden group-hover:block left-0 z-10'/>
        <div id={'slider'+rowId} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
            {movies.map((item,id)=>{
               return <Movie key={id} item={item} />
            })}
        </div>
        <MdChevronRight size={40} onClick={slideRight} className='bg-gray-300 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer hidden group-hover:block right-0 z-10'/>
    </div>
    </>
  )
}

export default Row