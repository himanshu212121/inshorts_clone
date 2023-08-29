import axios from 'axios'

export const getNews=async()=>{
    const url='localhost:8000';
    try{
      return await axios.get(`${url}/news`)
    }catch(error){
        console.log('error while calling api',error)
    }
}
