import News from "./model/news-schema.js"
import { data } from "./constants/data.js"

const DefaultData= async()=>{

    try {
        await News.insertMany(data)
        console.log("Data imported successsfully")


    } catch (error) {
        console.log('Error',error.message)
        
    }
}

export default DefaultData