import { API_URL, TOKEN } from "@/config"
import axios from "axios"


export const listProductCategories=async()=>{
    try {
        
        const response=await axios.get(
            `${API_URL}/Categories`,
            { headers:{
"Authorization":`Bearer ${TOKEN}`,
"Content-Type":"application\json",
"Accept":"application\json"
}
});
return response.data;

    } catch (error) {
        console.error("Ürün Kategorileri getirilirken hata:"+error.response);
    }
}