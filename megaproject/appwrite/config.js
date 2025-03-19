import {Client, Databases, Storage,Query, ID} from "appwrite"
import conf from "../src/config/conf"

export class Service {
    client = new Client();
    databases;
    storage;

    constructor(){
        this.client.setEndpoint(conf.appwriteprojectid).setProject(conf.appwriteprojectid)
        this.databases = new Databases(this.client)
        this.storage = new Storage(this.client)
    }
    async createpost({title,slug,content,featuredImage,status}){
        try{
            return await this.databases.createDocument(conf.appwritedatabaseid,conf.appwritecollectionid,slug,{title,content,featuredImage,status})

        }
        catch(error){
            throw error;
        }
    }
    async updatepost(title, slug, content, featuredImage, status){
        try{
         return await this.databases.updateDocument(
            conf.appwritedatabaseid,
            conf.appwritecollectionid,
            slug,
            {
            title,
            content,
            featuredImage,
            status
            }
            )
        }
        catch(error){
            throw error
        }
    }
    async deletepost(slug){
        try{
         return await this.databases.deleteDocument(
            conf.appwritedatabaseid,
            conf.appwritecollectionid,
            slug,
            
            )
        }
        catch(error){
            throw error;
            return false
        }
    }
    async getpost(slug){
        try{
         return await this.databases.getDocumentDocument(
            conf.appwritedatabaseid,
            conf.appwritecollectionid,
            slug,
            
            )
        }
        catch(error){
            throw error
            return false
        }
    }
    async getposts(query = [Query.equal("status","active")]){
        try{
         return await this.databases.getDocumentDocument(
            conf.appwritedatabaseid,
            conf.appwritecollectionid,
                query
            
            )
        }
        catch(error){
            throw error
            return false
        }
    }
////////////file upload/////////////


    async uploadfile(file){
        try{return await this.storage.createFile(conf.appwritebucketid,file,ID.unique())
    
        }
        catch(error){
            throw error;
        }
    } 
    async deletefile(fileid){
        try{
            return await this.storage.deleteFile(conf.appwritebucketid,fileid)
    
        }
        catch(error){
            throw error;
        }
    } 
    getfilepreview(fileid){
        return this.storage.getFilePreview(conf.appwritebucketid,fileid)
    }
}


const service = new Service() ;

export default service;