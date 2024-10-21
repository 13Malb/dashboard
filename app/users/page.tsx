import UsersUI from "@/components/UsersUI";
import { fetchData } from "../actions/fetchdata";

const Users = async () =>
    {
        const users = await fetchData('http://localhost:4000/v1/users')
    return ( 
        <>
        <UsersUI Users={users}/>
        </>
     );
}
 
export default Users;