import axios from 'axios'

export const getNews=async()=>{
    const url='https://inshorts-zj6u.onrender.com';
    try{
      return await axios.get(`${url}/news`)
    }catch(error){
        console.log('error while calling api',error)
    }
}
