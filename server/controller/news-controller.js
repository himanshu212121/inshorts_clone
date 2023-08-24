import news from "../model/news-schema.js"


export const getNews=async(resquest,response)=>{

    try {
       let data = await news.find({})
        response.status(200).json(data)
    } catch (error) {
        response.status(500).json({message: error.message})
    }

}