import mongoose from "mongoose"


const Connection=async (username,password)=>{
const URL=`mongodb+srv://${username}:${password}@clone-inshorts.r0v84l9.mongodb.net/Inshorts?retryWrites=true&w=majority`;
    try{
       await mongoose.connect(URL,{useNewUrlParser:true})
       console.log('Database connected successfully')

    }catch(error){
        console.log('Error while connecting with the database',error)
    }


}

export default Connection