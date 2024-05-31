import { defer, LoaderFunctionArgs } from "react-router-dom";
import getContacts from "../lib/get-contacts"
import getSingleContact from "../lib/get-single-contact";

export const contactLoader = async ({request}: LoaderFunctionArgs)=>{
    const url = new URL(request.url)
    const search = url.searchParams.get('q')
    const data =await getContacts(search?.trim()||'')
    return {data , q : search};
}

export const singleContactLoader = async ({params} :LoaderFunctionArgs)=>{
    // throw new Error('oops')
    const data = getSingleContact(params.contactId!)
    if(!data){
        throw new Response('',{
           status : 404,
           statusText : `Not Found ${params.contactId!}`
        })
   }
return defer(
    {
        contact : data
    }
);
}

