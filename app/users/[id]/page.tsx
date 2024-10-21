import { fetchData } from "@/app/actions/fetchdata";
import Userprofile from "@/components/User";

const user = async ({params}:any) => {
    const {id} = params
    const users = await fetchData(`http://localhost:4000/v1/users`)
  const transactions = await fetchData(`http://localhost:4000/v1/users/transactions/${id}`)
  const address = await fetchData(`http://localhost:4000/v1/users/address/${id}`)
  
  

  
    return ( 
        <>
        <Userprofile users={users} Orders={transactions} Address={address} />
        </>
     );
}
 
export default user;