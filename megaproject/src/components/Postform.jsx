import React from 'react'
import {Button} from './Button'
import {Select} from './Select'
import {Input} from './Input'
import RTE from './RTE';
import appwriteservice from '../../appwrite/config'
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import { useForm } from 'react-hook-form';

function Postform({Post}) {
    const {register,handleSubmit,watch,setValue,getValues,control} = useForm({
        defaultValues : {
            title : Post?.title || " "    ,          
            slug : Post?.slug || " " ,          
            content: Post?.content || " ",          
            status : Post?.status || "active",          
        },
    })
    const navigate = useNavigate()
    const userdata = useSelector(state => state.user.userdata)

    const submit = async (Data) =>{
        if(Post){
            const file = Data[0].image ? appwriteservice.uploadfile(Data[0].image):null 
        
            if(file){
                appwriteservice.deletefile(Post.featuredimage)
            }
        } 
    }

  return (
    <div>Postform</div>
  )
}

export default Postform