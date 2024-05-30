
const deleteContact = async (id : string)=>{ 
    try {
      await fetch(`http://localhost:5000/contacts/${id}`, {
         method : 'DELETE'
      })
    }catch(err){
          throw new Error (`Error deleting data , ${err}`)
    }
}

export default deleteContact