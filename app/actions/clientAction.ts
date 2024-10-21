import axios from "axios";
import { toast } from "sonner";


export const creatInventory =(formadata:any,imageUrl:string)=>{
    return axios.post('http://localhost:4000/v1/inventory',{
              'name':formadata.get('name'),
              'category':formadata.get('category'),
              "price":Number(formadata.get('price')),
              'qty':formadata.get('qty'),
              'imageUrl':imageUrl
    })
    .then(res =>( console.log(res)))
    .catch(error =>( console.log(error)
    ))
}

export const updateorder = (id:string) =>{
  return axios.patch(`http://localhost:4000/v1/users/transactions/update/${id}`,{
    "status": "Dispatch"
  })
  .then((res)=>{
    toast.success('Status Changed');
    
   
  })
 }

 export const deleteOrder = (Id:string)=>(
  axios.delete(`http://localhost:4000/v1/users/transactions/${Id}`)
  .then(function (response) {
    console.log(response);
    toast.success('Order Deleted',{
      classNames:{
          toast: 'bg-red-600'
      }
  })
    
  })
  .catch((error)=>{
    console.log(error);
    
  })
)