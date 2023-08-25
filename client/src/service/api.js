import axios from 'axios'

export const getNews=async()=>{
    const url='inshorts-clone-one.vercel.app';
    try{
      return await axios.get(`${url}/news`)
    }catch(error){
        console.log('error while calling api',error)
    }
}