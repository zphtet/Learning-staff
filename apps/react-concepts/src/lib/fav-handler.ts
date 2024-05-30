

const favHandler = async (id : string ,updateFav : {favourite : string})=>{

     try {
        const updatedData = await fetch(`http://localhost:5000/contacts/${id}`,{
            method : 'PATCH',
            body : JSON.stringify({
                  favourite : updateFav.favourite === 'true' ? true : false
            }),
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        return updatedData
     }catch(err){
          throw new Error (`Error updating data , ${err}`)
     }
}

export default favHandler;