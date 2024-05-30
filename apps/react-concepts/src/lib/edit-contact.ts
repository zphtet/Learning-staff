// import { wait } from "./wait";


const editContact = async (id : string ,  data : UpdateUser)=>{
     try {
        // await wait(2)
        const  res = await fetch(`http://localhost:5000/contacts/${id}`,{
            method : 'PATCH',
            body : JSON.stringify(data),
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        const udpatedData = await res.json()
        return udpatedData;
    }catch (err :any){

        throw new Error (`Error updating data , ${err}`)
    }
}
export default editContact;