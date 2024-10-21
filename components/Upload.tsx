
import {HardDriveUpload } from "lucide-react";
import { useRouter } from "next/navigation";

const Upload = () => {
    const route = useRouter()
    return ( 
        
            <div onClick={()=>(route.push('/upload'))} className=" size-14 fixed bottom-1 right-3 bg-black ring ring-green-600 z-50 hover:opacity-90 cursor-pointer rounded-md flex justify-center items-center">
            <HardDriveUpload color="gold" className="size-10"/>
            </div>
       
     );
}
 
export default Upload;