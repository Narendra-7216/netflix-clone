import React from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { useState,useEffect } from 'react'
import { UserAuth } from '../context/AuthContext'
import {db} from '../firebase'
import {doc,onSnapshot,updateDoc} from 'firebase/firestore'
import {AiOutlineClose} from 'react-icons/ai'
const SavedShows = () => {
    const [movies, setmovies] = useState()
    const {user} = UserAuth();
    useEffect(() => {
        onSnapshot(doc(db,'users',`${user?.email}`),(doc)=>{
            setmovies(doc.data()?.savedShows)
        })
    },[user?.email])
    
    

    const slideLeft = () => {
        var slide = document.getElementById('slider');
        slide.scrollLeft = slide.scrollLeft - 500;
    }
    
    const slideRight = () => {
        var slide = document.getElementById('slider');
        slide.scrollLeft = slide.scrollLeft + 500;
    }


    const movieRef = doc(db,'users',`${user?.email}`)

const deleteShow = async(passedId)=>{
        try{
            const result = movies.filter((item)=>item?.id!==passedId)
            await updateDoc(movieRef,{
                savedShows:result
            },)
            }
        catch(error)
        {
            console.log(error);
        }
    }

    return (
        <>
        <h2 className='text-white font-bold md:text-xl p-4'>My Shows</h2>
        <div className='relative flex items-center group'>
            <MdChevronLeft size={40} onClick={slideLeft} className='bg-gray-300 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer hidden group-hover:block left-0 z-10'/>
            <div id={'slider'}  className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                {movies?.map((item,id)=>{
                    return <div key={id} className='w-[160px] sm:w-[200px] md:[240px] lg:[280px] cursor-pointer relative inline-block p-2'>
                   <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500${item?.img}`} alt={item?.title}/>
                   <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                       <p className='flex justify-center items-center w-full h-full text-xs md:text-sm whitespace-normal '>{item?.title}</p>
                       <p onClick={()=>{deleteShow(item?.id)}}className='absolute top-4 right-4'><AiOutlineClose /></p>
                   </div>
               </div>
                })}
            </div>
            <MdChevronRight size={40} onClick={slideRight} className='bg-gray-300 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer hidden group-hover:block right-0 z-10'/>
        </div>
        </>
      )
}

export default SavedShows


   


 