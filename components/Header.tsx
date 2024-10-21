import Image from "next/image";

const Header = () => {
    return ( 
       <div className="bg-black gap-2 p-1 h-20 flex items-center lg:px-8 w-full">
        <div className="rounded-full bg-gray-700 size-16 border hover:opacity-70 border-blue-800 flex items-center justify-center relative">
        <Image
        className="absolute   rounded-full"
        src={'/Ddash.png'}
        priority={true}
        width={100}
        height={100}
        alt="Logo"
        />
        </div>
        <span className="font-bold text-green-600 text-2xl">Dash-Board DailyDash</span>
       </div>
     );
}
 
export default Header;