'use client'
import { useRouter } from "next/navigation";
import { User, Undo, MailCheck, ChevronLeft, LucideChevronsLeft, Home } from "lucide-react";
const UsersUI = ({Users}:any) => {
  const route = useRouter()

    return ( 
        <main className="h-screen">
            <div className="w-full p-1 h-60 flex justify-center items-center flex-col relative gap-3 bg-black">
                <span onClick={()=>(route.back())} className="size-14 bg-gray-600 flex justify-center hover:opacity-70 items-center rounded-md cursor-pointer absolute right-2 top-2">
                    <LucideChevronsLeft color="white" className="size-12"/>
                </span>
                <div className="size-28 rounded-full justify-center border border-green-600 items-center flex bg-white">
                    <User color="black" className="size-20"/>
                </div>
                <span className="p-1 bg-blue-600 w-52 h-10 font-semibold text-black text-center cursor-pointer hover:brightness-125 rounded-lg text-xl">Users</span>
            </div>
            
            {Users.map((user:any)=>(
            <div key={user.id} onClick={()=>(route.push(`/users/${user.clerkUserId}`))} className="h-28 cursor-pointer hover:opacity-80 p-1 my-1 gap-2 rounded flex w-full bg-gray-600 items-center">
                <div className="size-20  flex justify-center items-center bg-white rounded-full text-2xl border border-red-700">{user.name[0]}</div>
                  <div className="h-20 w-60 bg-black rounded-md p-1 text-xl text-gray-400 flex flex-col">
                    <span className="w-full flex items-center"><User color="white" className="size-8"/>{user.name}</span>
                    <span className="w-full flex items-center truncate text-sm"><MailCheck color="white" className="size-8"/>{user.email}</span>
                  </div>
                  <div className="size-20 bg-blue-800 rounded-md flex items-center justify-center">
                    <Home color="white" className="size-8"/>
                  </div>
            </div>

            ))}

        </main>
     );
}
 
export default UsersUI;