import React, { useCallback, useEffect } from 'react'
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
                appwriteservice.deletefile(Post.featuredImage)
            }
            const dbpost = await appwriteservice.updatepost(Post.$id,{
                ...Data,
            })
            if(dbpost){
                navigate('/Post/dbpost.$id')
            }
        }
        else{
            const file = appwriteservice.uploadfile(Data.image[0]) 
            if(file){
                const fileid = file.$id
                Data.featuredImage = fileid
                const dbpost = appwriteservice.createpost({...Data,userId: userdata.$id,}) 
                if(dbpost){
                    navigate('/Post/dbpost.$id')
                }
            }
            
        } 
    }
    const slugTransform = useCallback((VALUE)=>{
        if(VALUE && typeof VALUE === 'string'){
          return VALUE.trim().toLowerCase().replace(/^[a-zA-z\d\s]+/g,'-')
        }
        return ' '
    },[])
    useEffect(()=>{
        const subscription = watch((value,{name}) =>{
            if(name === 'title'){
                setValue(slug,slugTransform(value.title)),
                {shouldValidate: true}
            }
        })
        
    },[watch,slugTransform,setValue])
  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
    <div className="w-2/3 px-2">
        <Input
            label="Title :"
            placeholder="Title"
            className="mb-4"
            {...register("title", { required: true })}
        />
        <Input
            label="Slug :"
            placeholder="Slug"
            className="mb-4"
            {...register("slug", { required: true })}
            onInput={(e) => {
                setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
            }}
        />
        <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
    </div>
    <div className="w-1/3 px-2">
        <Input
            label="Featured Image :"
            type="file"
            className="mb-4"
            accept="image/png, image/jpg, image/jpeg, image/gif"
            {...register("image", { required: !post })}
        />
        {post && (
            <div className="w-full mb-4">
                <img
                    src={appwriteService.getFilePreview(post.featuredImage)}
                    alt={post.title}
                    className="rounded-lg"
                />
            </div>
        )}
        <Select
            options={["active", "inactive"]}
            label="Status"
            className="mb-4"
            {...register("status", { required: true })}
        />
        <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
            {post ? "Update" : "Submit"}
        </Button>
    </div>
</form>
  )
}

export default Postform