import { ActionFunctionArgs, redirect } from "react-router-dom";
import editContact from "../lib/edit-contact"


const updateContactAction  = async ({params, request} :ActionFunctionArgs)=>{

    const id = params.contactId!;
    const formData = await request.formData();
    const updates = Object.fromEntries(formData) as UpdateUser;
    const data = await editContact(id , updates);

    return redirect(`/contacts/${data.id}`)
}

export default updateContactAction;