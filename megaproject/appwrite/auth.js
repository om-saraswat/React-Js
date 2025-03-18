import conf from "../src/config/conf"
import {Client, ID, Account} from "appwrite"
export class Authservice  {
    client = new Client();
    account

    constructor ( ){
        this.client.setEndpoint(conf.appwriteurl).setProject(conf.appwriteprojectid)

        this.account = new Account(this.client);


    }

    async createAccount(email,password,name){
        try{
           const useraccount = await this.account.create(ID.unique(),email,password,name)
           if(useraccount){
              return this.login(email,password)
           }
           else{
            return useraccount
           }
        }
        catch(error){
            throw error;
        }
    }
    async login(email,password){
        try{
           return await this.account.createEmailPasswordSession(email,password)
        }
        catch(error){
            throw error
        }
    }
    async getcurrentuser(){
        try{
           return await this.account.get();
        }
        catch(error){
            throw error;
        }
        return null;
    }
    async logout(){
        try{
          return await this.account.deleteSessions();
        }
        catch(error){

        }
    }
}

const authservice = new Authservice();


export default authservice