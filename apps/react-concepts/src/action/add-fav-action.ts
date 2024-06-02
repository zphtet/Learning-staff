import { ActionFunctionArgs } from "react-router-dom"
import favHandler from "../lib/fav-handler"
// import { wait } from "../lib/wait";

export const addFavouriteAction = async ({params , request}: ActionFunctionArgs)=>{
  try {
    // await wait(0.2)
      const id = params.contactId!;
      const data = await request.formData();
      const updateFav = Object.fromEntries(data) as {favourite : string};
      const updatedData = await favHandler(id,{favourite : updateFav.favourite})
      return updatedData
   
  }catch (err : any){
      throw new Error(err)
  }
}