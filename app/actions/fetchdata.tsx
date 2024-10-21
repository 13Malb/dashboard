import axios from "axios";

export const  fetchData = async (url:string ) => {
    try {
        const response = await axios(url);
         const data = await response.data
         return data
         
        
      } catch (error) {
        console.error(error);
      }
}