import Image from "next/image";
import Header from "@/components/Header";
import UI from "@/components/UI";
import { fetchData } from "./actions/fetchdata";
import { cookies } from "next/headers";
import Upload from "@/components/Upload";
import Table from "@/components/Table";


export default async function Home() {
  const inventory = await fetchData('http://localhost:4000/v1/inventory')
  const users = await fetchData('http://localhost:4000/v1/users')
  const transactions = await fetchData('http://localhost:4000/v1/users/transactions')
  const sessionCookie = cookies().get('appwrite-session')
  //<UI Inventory={inventory} session={sessionCookie} Users={users} Orders={transactions}/>
   
  return (
   <>  
    <Table Inventory={inventory} session={sessionCookie} Users={users} Orders={transactions}/>

   </>
  );
}
