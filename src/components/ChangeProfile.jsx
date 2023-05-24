import React, { useContext, useState } from 'react'
import { AppContext } from '../App';


export const ChangeProfile = (props) => {
    const [newUserName,setNewUserName] = useState("");
    const {setUserName} = useContext(AppContext);
    
  return (
    <div className='space-x-4 '>
        <input className='border-2 border-blue-500' onChange={(event) => {setNewUserName(event.target.value)}}/> 
        <button className='px-2 bg-slate-500 rounded-md py-3 text-white' onClick={()=>setUserName(newUserName)}>Change username</button>

    </div>
  )
}
