'use client'
import { ShoppingBag, PackageOpen, Wallet, HandCoinsIcon, UserCircle, CloudUpload, Eye, PackageCheck } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Upload from "./Upload";
import { UpdateMessage } from "next/dist/build/swc";
import { updateorder } from "@/app/actions/clientAction";

const UI = ({Inventory, Users, Orders, session}:any) => {
    const route = useRouter()
    const totalOrders = Orders.length;
    const totalInventory = Inventory.length;
    const totalUsers = Users.length;
    const orderData =(id:string) => Inventory.find((data:any)=>(data.id == id))
    const userData = (id:string) => Users.find((data:any)=>(data.clerkUserId == id))
    const pointer =(id:string)=>( route.push(`${id}`))
    if(!session){
      route.push('/login')
    }

    
    return ( 
        <main className="w-full relative h-screen  p-1 ">
           <Upload/>
            <div className="basis-1/6 hidden  flex-col gap-1  border border-green-500 bg-black cursor-pointer rounded-xl">
                <div className="w-[96%] h-28  border-b border-green-600 shadow shadow-black flex justify-center items-center rounded-xl m-1">
                    <span className="size-20 text-xl flex rounded-full border shadow shadow-green-500 border-green-600 bg-black text-center text-white font-bold justify-center items-center">Admin</span>
                </div>
                <span className="bg-white  hover:opacity-80 hover:border-green-600 border mx-1 h-14 text-center flex items-center justify-center gap-1 content-center text-xl font-bold text-black">
                    <ShoppingBag color="gold" className="inline"/>
                    Order <span className="bg-black text-white text-sm size-6 rounded flex justify-center items-center">+{totalOrders}</span></span>
                    <span className="bg-white hover:opacity-80 hover:border-green-600 border mx-1 h-14 text-center flex items-center justify-center gap-1 content-center text-xl font-bold text-black">
                    <PackageOpen color="green" className="inline"/>
                    Inventory <span className="h-6 w-12 bg-black text-white flex justify-center items-center text-sm  rounded">+{totalInventory}</span></span>
                    <span className="bg-white  hover:opacity-80 hover:border-green-600 border mx-1 h-14 text-center flex items-center justify-center gap-1 content-center text-xl font-bold text-black">
                    <UserCircle color="black" className="inline"/>
                    Users<span className="h-6 w-12 bg-black text-white flex justify-center items-center text-sm  rounded">+{totalUsers}</span></span>
                    <span className="bg-white  hover:opacity-80 hover:border-green-600 border mx-1 h-14 text-center flex items-center justify-center gap-1 content-center text-xl font-bold text-black">
                    <HandCoinsIcon color="gold" className="inline"/>
                    Sales</span>
                    <span className="bg-white  hover:opacity-80 hover:border-green-600 border mx-1 h-14 text-center flex items-center justify-center gap-1 content-center text-xl font-bold text-black">
                    <CloudUpload color="black" className="inline"/>
                    Upload</span>

            </div>


            <div className="w-full bg-white">
            <div className="w-full bg-blue-600 h-20 rounded-md flex justify-center gap-2 p-1 items-center">
                <span className="h-16 relative font-bold flex justify-center flex-col items-center basis-1/3 bg-gray-900 text-white rounded-lg">
                  <div className="size-14 hidden md:visible rounded-full bg-gray-700 sm:flex justify-center cursor-pointer items-center absolute left-2 top-1 border border-green-600 hover:opacity-60">
                    <PackageOpen color="white" className="size-10 "/>
                  </div>
                  <span className="font-semibold rounded-md opacity-90">Inventory</span>
                  {`+${totalInventory}`}
                </span>
                <span className="h-16 relative font-bold flex justify-center flex-col items-center basis-1/3 bg-gray-900 text-white rounded-lg">
                <div className="size-14 hidden md:visible rounded-full bg-gray-700 sm:flex justify-center cursor-pointer items-center absolute left-2 top-1 border border-green-600 hover:opacity-60">
                    <ShoppingBag color="white" className="size-10 "/>
                  </div>
                 <span className="font-semibold rounded-md opacity-90">Orders</span>
                {`+${totalOrders}`}</span>
                <span onClick={()=>(pointer('users'))} className="h-16 relative font-bold flex justify-center flex-col items-center basis-1/3 bg-gray-900 text-white rounded-lg">
                <div  className="size-14 hidden md:visible rounded-full bg-gray-700 sm:flex justify-center cursor-pointer items-center absolute left-2 top-1 border border-green-600 hover:opacity-60">
                    <UserCircle color="white" className="size-10 "/>
                  </div>
                 <span className="font-semibold rounded-md opacity-90">Users</span>
                {`+${totalUsers}`}</span>
            </div>
            </div>
         
         <div className="w-full p-1 bg-red-600 rounded-md my-1"></div>

         <div className="w-full h-16 bg-gray-700 gap-1 flex items-center rounded-md p-1">
            <ShoppingBag color="green" className="size-10 inline"/>
             <span className="font-semibold text-xl p-1 rounded-md opacity-80 bg-white">Pending Orders</span>
         </div>

         {
            Orders.map((data:any)=>(

         <div key={data.id} className="h-40 my-2 w-full p-1 bg-black rounded">
            <div className="w-full p-1 flex items-center">
            <div className="size-8 rounded-full font-semibold hover:opacity-75 cursor-pointer bg-slate-300 flex justify-center items-center border border-red-800 p-1">{userData(data.userId).name[0]}</div>
              <span className="text-white truncate max-w-28 sm:w-auto opacity-80 cursor-pointer text-xl ml-1 inline">{userData(data.userId).name}</span>
              <span className="h-8 w-[1px] rounded mx-2 bg-white"></span>
              <div className="h-8 w-44 md:w-auto bg-gray-800 rounded-xl flex gap-1 justify-center items-center p-1">
                <Button onClick={()=>(pointer(`/users/${data.userId}`))} className="bg-blue-600 h-6 w-20"><Eye color="black" className="inline"/>View</Button>
                <Button onClick={()=>(updateorder(data.id))} className="bg-green-600 h-6 w-20 sm:w-auto"><PackageCheck color="black"  className="inline size-4"/>{data.status}</Button>
              </div>
            </div>
         <div className="p-1 h-28 rounded gap-1 bg-white w-full flex items-center">
            <div className="size-24  bg-black rounded cursor-pointer relative">
                <Image
                className="absolute object-cover"
                src={orderData(data.productId).imageUrl}
                fill={true}
                priority={true}
                
                alt="pic"
                />
            </div>
            <div className="h-24 w-[80%] relative p-1 bg-gray-400  gap-1 flex flex-col text-black ">
                <span className="p-1 opacity-80 text-red-700 font-semibold text-xl absolute right-1 bottom-1">{data.createdAt}</span>
                <span className="w-full cursor-pointer font-bold truncate">item: <span className="p-1  bg-black rounded text-white">{data.name}</span> </span>
                <div className=" w-full flex gap-1">
                <span className="p-1 w-24 h-10 bg-green-400 rounded-md flex items-center justify-center text-xl font-bold">R{data.amount}</span>
                <span className="p-1 w-40 h-10 bg-black text-white rounded-md flex items-center justify-center text-xl font-bold">Qty:{orderData(data.productId).qty}</span>

                </div>
                
            </div>
         </div>
         </div>
            ))
         }

        </main>
     );
}
 
export default UI;