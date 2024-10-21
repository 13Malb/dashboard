"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import createSession from "@/app/actions/createSession";


const Login = ({sessionCookie}:any) => {
    const route = useRouter()
    const loginDecider = async(formdata:any)=>{
        console
        if(!sessionCookie){
            const response = await createSession(formdata);
            if(response.success == true){
               route.push('/')
            }
            if(!response.success){
                toast.error(response.error)
            }
        }
        
    }
    return (
        <> 
        <div className="size-48 bg-black shadow-md shadow-white ring ring-indigo-700 rounded-full relative">
        <Image src={'/Ddash.png'}
        fill={true}
        className="absolut object-cover "
        alt="Logo"
        priority={true}
        sizes="auto"
        />
    </div>
    <span className="text-4xl my-2 text-black font-bold">Daily Dash</span>
    <div className="h-96 sm:w-96 rounded-md shadow shadow-white bg-black w-[80%] p-1 flex flex-col justify-center items-center">
        <span className="text-3xl text-white">Login</span>
        <form action={loginDecider}  className="w-full  text-white p-1 flex flex-col h-80" >
            <label htmlFor="email" className="text-2xl font-semibold mb-1 ">Email</label>
            <input type="email" placeholder="example@gmail.com" required={true} name="email" className="h-16 placeholder:text-xl focus:border-green-600 rounded-md p-1 border border-white bg-black placeholder:text-gray-500" />
            <label htmlFor="password" className="text-2xl mt-2 font-semibold ">Password</label>
            <input type="password" placeholder="Passcode" required={true} name="password" className="h-16 placeholder:text-xl rounded-md p-1 border focus:border-green-700 border-white bg-black placeholder:text-gray-500" />
            <div className="p-1 flex items-center justify-center w-full"><Button className="bg-white h-14 text-black w-1/2 text-2xl hover:bg-green-600 font-black my-2">Login</Button></div>
        </form>
    </div>
    </>
     );
}
 
export default Login;