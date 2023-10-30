import React, { useState } from 'react'
import {FaHeart,FaRegHeart} from 'react-icons/fa'
import {UserAuth} from '../context/AuthContext'
import {db} from '../firebase'
import {doc,updateDoc,arrayUnion} from 'firebase/firestore'
const Movie = ({key,item }) => {
    const [like, setlike] = useState(false)
    const [saved, setsaved] = useState(false)
    const {user} = UserAuth()
    
  const movieId = doc(db,'users',`${user?.email}`)


    const savedShow = async() =>{
      if(user?.email)
      {
        setlike(!like)
        setsaved(true)
        await updateDoc(movieId,{
          savedShows:arrayUnion({
            id: item.id,
            title : item.title,
            img : item.backdrop_path
          })
        })
      }
      else
      {
        alert('please login')
      }
    }


  return (
    <div className='w-[160px] sm:w-[200px] md:[240px] lg:[280px] cursor-pointer relative inline-block p-2'>
        <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500${item?.backdrop_path}`} alt={item?.title}/>
        <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
            <p className='flex justify-center items-center w-full h-full text-xs md:text-sm whitespace-normal '>{item?.title}</p>
            <p onClick={savedShow} className='absolute top-4 left-4'>
                {like?<FaHeart />:<FaRegHeart />}
            </p>
        </div>
    </div>
  )
}

export default Movie