'use client'

import { useRouter } from "next/navigation";
import Upload from "./Upload";
import { Trash } from "lucide-react";
import { updateorder, deleteOrder } from "@/app/actions/clientAction";
import { usePolling } from "@/app/hooks/usePolling";


const Tabledata = ({Inventory, Orders, Users, session}:any) => {
   // const sortedOrders = Orders.find((data:any)=>(data.status == "confirmed" ? ""))
    const route = useRouter()
    const totalInventory = Inventory.length != 0 ? Inventory.length : 0;
    const totalUsers = Users.length !=0 ? Users.length : 0;
    const totalOrders = Orders.length !=0 ? Orders.length : 0;
    const userData = (id:string) => Users.find((data:any)=>(data.clerkUserId == id))
    const pointer =(id:string)=>( route.push(`${id}`))
    usePolling(3000)

    if(!session){
        route.push('/login')
      }
  
    return ( 
        <section className="bg-black text-white  p-1 h-screen">
          <div className="rounded-md flex flex-col gap-3 w-full p-1 border border-white">
              <div className="bg-gray-800 cursor-pointer w-full p-1 h-10 flex gap-4">
                <span className="rounded-lg p-1 font-bold bg-black border border-green-600">Orders+{totalOrders}</span>
                <span className="rounded-lg p-1 font-bold bg-black border border-blue-600">Prices</span>
                <span onClick={()=>(pointer('users'))} className="rounded-lg p-1 font-bold border border-red-600 bg-black">Users+{totalUsers}</span>
                <span className="rounded-lg truncate border border-green-600 p-1 font-bold bg-black">Date and Time</span>
              </div>
            {
               Orders.map((data:any)=>(
                <div key={data.id}  className="h-12 relative cursor-pointer hover:opacity-40 hover:border-blue-600 flex-row w-full sm:text-xl  flex gap-1 border items-center justify-center border-white rounded-lg">
                  <span onClick={()=>(deleteOrder(data.id))} className="absolute z-50 p-1 size-7 hover:bg-white flex items-center justify-center -right-1 -top-1 bg-red-600 rounded-full">
                    <Trash color="black" className="size-4"/>
                  </span>
                  <span onClick={()=>(updateorder(data.userId))} className="absolute bg-green-600 -bottom-2 sm:p-1 sm:text-xl right-1 py-0 px-1 rounded-lg">{data.status}</span>
               <span className="text-sm w-20 sm:basis-1/4 font-san border-r border-white p-1 font-bold">{data.name}</span>
               <span className="text-sm w-20 font-san  sm:basis-1/4  font-bold border-r border-white p-1">R{data.amount}</span>
               <span onClick={()=>(pointer(`/users/${data.userId}`))} className="text-sm hover:bg-blue-800 w-20 font-san  sm:basis-1/4  truncate font-bold border-r border-white p-1">{userData(data.userId).name}</span>
               <span className="text-xs w-20 font-san  sm:basis-1/4  font-bold truncate ">{data.createdAt}</span>
            </div>
               ))
            }
          </div>
          <Upload/>
        </section>
     );
}
 
export default Tabledata;