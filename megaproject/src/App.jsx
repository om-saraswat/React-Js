import { useState,useEffect} from 'react'
import conf from "../src/config/conf"
import {login,logout} from "../src/Store/authslice"
import { useDispatch }from "react-redux"
import authservice from '../appwrite/auth'


function App() {
  const [loading, setloading] = useState(true)
  const dispatch  = useDispatch()
  
  useEffect(()=>{
    authservice.getuser().then((userData)=>{
      if(userData){
      dispatch(login(userData))
      }
      else{
        dispatch(logout())
      }
    }).finally(()=>{setloading(false)})
  })


  return !loading ? (
    <h1>hello</h1>
  ) : null
}

export default App
