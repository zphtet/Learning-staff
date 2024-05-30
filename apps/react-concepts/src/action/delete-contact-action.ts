import { ActionFunctionArgs, redirect } from "react-router-dom"
import deleteContact from "../lib/delete-contact"


const deleteContactAction = async ({params , request , context} : ActionFunctionArgs)=>{
     const id = params.contactId!;
    
    //  throw new Error('Error while deleting this page')

     console.log(params , request , context)

    await deleteContact(id)
  return redirect(`/`)
}

export default deleteContactAction