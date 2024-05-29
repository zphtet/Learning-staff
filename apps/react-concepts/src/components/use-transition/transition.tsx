
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
     const [filter , setFilter] = useState(Users)
       
     const [isPending , startTransition] = useTransition()
      
     const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
         console.log(e.target.value.trim())
           setKeyword(e.target.value.trim())
            startTransition(()=>{
               
                const filtered = Users.filter(user=> user.name.toLocaleLowerCase().includes(e.target.value.trim()))
                setFilter((_)=>{
                    for(let i=0 ; i < 300000000;i++){
                     
                    }
                    return filtered
                })
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