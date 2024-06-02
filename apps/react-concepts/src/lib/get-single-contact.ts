import { wait } from "./wait";

const getSingleContact =async (id : string)=>{
    try {
        // await wait(1)
        const  res = await fetch(`http://localhost:5000/contacts/${id}`)
        const data = await res.json()
        console.log("single data", data)
        return data;
    }catch (err :any){
         throw new Error (`Error fetching JSONPlaceholder  ${err}`)
    }
       
}
export default getSingleContact;