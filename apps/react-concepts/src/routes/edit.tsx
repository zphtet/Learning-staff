import { Form, useLoaderData, useNavigate, useNavigation } from "react-router-dom"


const EditForm = ()=>{
  const data = useLoaderData() as User;
   const navigate = useNavigate();

   const navigation  = useNavigation();

   console.log(navigation)
   const submitting  = navigation.state === 'submitting'
   const loading = navigation.state === 'loading'

    return <Form method="PATCH" className="flex flex-col gap-4 bg-orange-200 p-10 rounded-md">
          <input type="text" className="border border-blue-500 px-5 py-1" name="name" defaultValue={data.name} />
          <input type="email" name="email" className="border border-blue-500 px-5 py-1"  defaultValue={data.email}/>
          <div className={`flex gap-5 justify-end ${submitting && 'bg-red-800'} ${loading && 'bg-green-600'}`}>
             <button type="button" onClick={()=> navigate(-1)} className=" px-4 py-1 border border-blue-400 rounded-md">Cancel</button>
             <button type="submit" className=" px-4 py-1 border border-blue-400 rounded-md">Save</button>
          </div>
    </Form>
}

export default EditForm;