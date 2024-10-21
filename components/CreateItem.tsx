"use client"
import { ChevronLeft } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import createProduct from "@/app/actions/createProdut";


import { toast } from "sonner";


const CreateItem = ({sessionCookie}:any) => {
    const route = useRouter()
    const submit = async(formdata:any)=>{
        console.log(formdata.get('price'));
        
        if(sessionCookie){
             createProduct(formdata)
            toast.success('Product created')
        }

    }

       if(!sessionCookie){
        route.push('/login')
       }

    return ( 
        <div className="p-1">
            <div className="h-20  rounded-md relative p-1 w-full bg-black flex items-center  justify-center">
                <div onClick={()=>(route.back())} className="flex cursor-pointer items-center absolute right-2 rounded-full hover:opacity-80  border-2 border-white justify-center bg-black size-12">
                <ChevronLeft color="white"/>
                </div>
            </div>
            <span className="p-1 text-3xl w-full flex justify-center items-center font-bold">Create New Product</span>
            <form action={(formdata:any)=>(submit(formdata))} className="text-black font-mono font-semibold text-xl flex flex-col">
                <label htmlFor="name">Name</label>
                    <input type="text" required className="border p-1 border-black rounded-md" name="name" />
                    <label htmlFor="category">Category</label>
                    <input type="text" required className="border p-1 border-black rounded-md" name="category" />
                    <label htmlFor="qty">Qty</label>
                    <input type="text" required className="border p-1 border-black rounded-md" name="qty" />
                    <label htmlFor="price">Price</label>
                    <input type="number" step='0.01' required name="price" className="border p-1 border-black rounded-md" />
                    <label htmlFor="description">Description</label>
                    <textarea name="description" required className="border border-blue-600 rounded-md p-1"></textarea>
                    <label htmlFor="Image">Product Image</label>
                    <input type="file" name="Image"  required className="w-44 sm:w-auto rounded-lg border border-green-600" />
                    <Button className="rounded-md my-2 h-14 hover:text-white text-2xl bg-green-700 shadow shadow-black">Create</Button>
            </form>
        </div>
     );
}
 
export default CreateItem;