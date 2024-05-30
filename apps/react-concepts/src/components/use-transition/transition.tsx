
// making the state update as transition
// useTransition()
// tell me more about the transition

import { useState, useTransition } from "react";
import { users } from "./data";


// Problem
    //  when react update state that is huge and take longer time
    //  react will wait for rerender
// Solution
    //  If the longer state update is non-urgent state , 
    // use   useTransition() 

// with this hook , we can specify the hook as non-urgent
// the non-urgent state will update simutaenuoly with other urgent hooks.
// the component will not wait for the non-urgent state update
const Users = users;
const TransitionPage = ()=>{

     const [keyword , setKeyword] = useState('')
     const [filter , _] = useState(Users)
       
     const [isPending , startTransition] = useTransition()
      
     const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
         const value = e.target.value.trim();
         startTransition(()=>{
             setKeyword(value)
               
                // const filtered = Users.filter(user=> user.name.toLocaleLowerCase().includes(value))
                // setFilter((_)=>{
              
                //     return filtered
                // })
            })
          
     }
    

        

     return <div>
        <input type="text"  key={1}/>
        <input type="text" value={keyword} key={2} onChange={onChangeHandler} />
        {
            isPending && <p>Loading...</p>
        }
           {
           !isPending && filter.map((user)=>{
                 return <p key={user.id}>{user.name}</p>
            })
           }
     </div>
     
}

export default TransitionPage;