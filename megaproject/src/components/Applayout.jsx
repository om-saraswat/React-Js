import React , {useState,useEffect}from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import authservice from '../../appwrite/auth'

export default function Protected({children , authentication = true}) {

    const navigate = useNavigate()
    const {loader , setLoader} = useState(true)
    const authstatus = useSelector(state => state.auth.status)

    useEffect(() => {
      
    
        if(authentication && authentication !== authstatus){
            navigate('/login')
        }
        else if(!authentication && authentication !== authstatus){
            navigate("/")
        }
        setLoader(false)
    }, [navigate , authstatus , authentication])
    

  return loader ?  <h1>Loading....</h1> : <>{children}</> 
}

