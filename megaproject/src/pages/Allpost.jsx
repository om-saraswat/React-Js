import React from 'react'
import appwriteservice from '../../appwrite/config'
import {Postcard,Container} from '../components'
 
function Allpost() {
    const [posts,setposts] = useState();
    appwriteservice.getpost([]).then((posts)=>{
        if(posts){
            setposts(posts.documents)
        }
    })
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) =>(
                   <div key = {post.$id} className='p-2 w-1/4'>
                        <Postcard post = {post}/>
                   </div>      
                ))}
            </div>
        </Container>
    </div>
  )
}

export default Allpost