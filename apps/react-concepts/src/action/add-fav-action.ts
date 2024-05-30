import { ActionFunctionArgs } from "react-router-dom"
import favHandler from "../lib/fav-handler"


export const addFavouriteAction = async ({params , request}: ActionFunctionArgs)=>{
  try {
      const id = params.contactId!;
      const data = await request.formData();
      const updateFav = Object.fromEntries(data) as {favourite : string};
      const updatedData = await favHandler(id,{favourite : updateFav.favourite})
      return updatedData
   
  }catch (err : any){
      throw new Error(err)
  }
}