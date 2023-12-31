import { children } from "react"
import {useState,useEffect,createContext,useContext} from "react"
import {auth,db} from '../firebase'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged} from 'firebase/auth'
import {setDoc,doc} from 'firebase/firestore'


const AuthContext = createContext()

export function AuthContextProvider({children})
{
    const [user,setuser]=useState({})


    function signUp(email,password)
    {
        
        createUserWithEmailAndPassword(auth,email,password)
        setDoc(doc(db,'users',email),{
            savedShows:[]
        })
        
    }
    
    function logIn(email,password)
    {
        return signInWithEmailAndPassword(auth,email,password)
    }

    function logOut()
    {
        signOut(auth)
    }

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth,(currUser)=>{
               setuser(currUser)
      })
    
      return () => {
        unsubscribe()
      }
    })
    
    return <AuthContext.Provider value={{signUp,logIn,logOut,user}}>
        {children}
    </AuthContext.Provider>
}
export function UserAuth(){
    return useContext(AuthContext)
}