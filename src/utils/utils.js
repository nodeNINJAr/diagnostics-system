
import axios from "axios"
export const imageUplaod = async(imageFile)=>{
    // 
    const {data} = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_ImageBB_api_key}`,imageFile,{
        headers: { "Content-Type": "multipart/form-data" },
      } )
    return data?.data?.display_url
}