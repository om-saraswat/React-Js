import React from 'react'
import {Container , Postform} from '../components'
import appwriteservice from '../../appwrite/config'
import {useNavigate, useParams, useparams} from 'react-router-dom'  
import { useState } from 'react'
function Editpost() {
    const [post,setposts] = useState(null)
    const navigate = useNavigate()
    const {slug} = useParams()
    
    useEffect(() => {
      if(slug){
        appwriteservice.getpost(slug).then((post)=>{
            if(post){
                setposts(post)
            }
        })
      }
      else{
        navigate('/')
      }
    }, [slug,navigate])
    

  return post ?  
  <div className='py-8'>
    <Container>
        <Postform post={post}/>
    </Container>
  </div>
  : null
}

export default Editpost
