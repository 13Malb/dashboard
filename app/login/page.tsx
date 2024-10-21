import Login from "@/components/Login";
import { cookies } from "next/headers";



const LoginPage = () => {
    const sessionCookie = cookies().get('appwrite-session');
   
    

    return ( 
        <main className="h-screen  font-sans font-semibold bg-slate-800 flex-col w-full flex justify-center items-center">
          <Login sessionCookie={sessionCookie}/>
        </main>
     );
}
 
export default LoginPage;