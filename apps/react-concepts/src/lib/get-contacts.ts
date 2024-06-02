import { axiosInstance } from "../axios";
import { wait } from "./wait";

const getContacts =async (q : string)=>{
    try {
        // // await wait(2)
        // const  res = await fetch('http://localhost:5000/contacts')
        // const data = await res.json() as User[]
        const {data } = await axiosInstance.get('/contacts') as { data : User[]}
        const filtered = data.filter(user=> user.name.toLowerCase().includes(q.toLocaleLowerCase()))
        // axiosInstance.defaults.headers.common.Authorization = 'Bearer ' + filtered
        return filtered;
    }catch (err :any){
         throw new Error (`Error fetching JSONPlaceholder  ${err}`)
    }
       
}
export default getContacts;