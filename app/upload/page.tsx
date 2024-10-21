import CreateItem from "@/components/CreateItem";
import { cookies } from "next/headers";

const create = () => {
    const sessionCookie = cookies().get('appwrite-session')
    return ( 
        <main className="h-screen bg-white p-1 lg:p-10 flex justify-center items-center w-full">
            <CreateItem sessionCookie={sessionCookie}/>
        </main>
     );
}
 
export default create;