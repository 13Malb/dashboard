"use client"
import { Box, Building, Download, LucideChevronsLeft, Mail, Map, Phone, User } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

const Userprofile = ({users,Orders, Address}:any) => {
    const route = useRouter()
    const {id} = useParams()
    const user = users.find((person:any)=>(person.clerkUserId == id))
    //console.log(Address[0]);
    
    
    return ( 
        <main>
            <div className="w-full p-1 h-auto flex justify-center items-center flex-col relative gap-3 bg-black">
                <span onClick={()=>(route.back())} className="size-14 bg-gray-600 flex justify-center hover:opacity-70 items-center rounded-md cursor-pointer absolute right-2 top-2">
                    <LucideChevronsLeft color="white" className="size-12"/>
                </span>
                <div className="size-28 text-4xl font-bold rounded-full justify-center border border-green-600 items-center flex bg-white">
                    {user.name[0]}
                </div>
                <span className="p-1 bg-blue-600 w-52 h-10 font-semibold text-black text-center cursor-pointer hover:brightness-125 rounded-lg text-xl">{user.name}</span>
                <div className="p-1 flex flex-col gap-1 border shadow shadow-white border-white w-80 h-48 rounded-lg">
                    <div className="w-full opacity-80 items-center p-1 h-10 rounded bg-white flex gap-1">
                        <Mail color="black"/>
                        <span className="font-bold">{user.email}</span>
                    </div>
                    <div className="w-full opacity-80 items-center p-1 h-10 rounded bg-white flex gap-1">
                        <Phone color="black"/>
                        <span className="font-bold">0{ Address.length !== 0 ? Address[0].phoneNumber : 0}</span>
                    </div>
                    <div className="w-full opacity-80 items-center p-1 h-10 rounded bg-white flex gap-1">
                        <Map color="black"/>
                        <span className="font-bold">{Address.length !== 0 ? Address[0].street : 0}</span>
                    </div>
                    <div className="w-full opacity-80 items-center p-1 h-10 rounded bg-white flex gap-1">
                        <Building color="black"/>
                        <span className="font-bold">{Address.length !== 0 ? Address[0].city : 0},{Address.lenght !== 0 ? Address[0].suburb : ''}</span>
                    </div>
                </div>
            </div>
            

            <div className="h-24 w-full bg-black border-t p-1 border-blue-600 flex gap-1 items-center justify-center">
                <div className="size-20 bg-gray-600 flex items-center justify-center hover:bg-white rounded-md">
                    <Box color="black" className="size-16"/>
                </div>
                <div className="size-20 bg-gray-600 hover:bg-white flex items-center justify-center rounded-md">
                    <Download color="white" className="size-16"/>
                </div>
            </div>
           
           {
            Orders.map((data:any)=>(
            <div key={data.id} className="p-1 w-full h-20 bg-gray-700 my-1 gap-2 rounded-md flex items-center">
                <div className="size-16 rounded-lg bg-black flex justify-center items-center">
                    <Box color="gold" className="size-14"/>
                </div>
                <div className="w-[80%] bg-gray-800 h-16 rounded items-center gap-2 p-1 flex ">
                    <span className="p-1 text-white">{data.name}</span>
                    <span className="p-1 text-white bg-green-600 h-14 flex justify-center items-center w-24 text-center rounded-lg font-bold">R{data.amount}</span>
                    <span className="p-1 text-white bg-red-600 h-14 w-24  flex justify-center items-center text-center rounded-lg font-bold">{data.status}</span>
                </div>
            </div>

            ))
           }
        </main>
     );
}
 
export default Userprofile;
