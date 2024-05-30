import { redirect } from "react-router-dom"
import createContact from "../lib/create-contac"


export const createContactAction = async ()=>{
     const data = await createContact()
     
     // return data;
  return redirect(`/contacts/${data.id}/edit`)

}