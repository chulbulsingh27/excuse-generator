import React, { useContext } from 'react'
import { AppContext } from '../App'
import { ChangeProfile } from '../components/ChangeProfile'


export const Menu = () => {
  const {username,setUserName} = useContext(AppContext)
  return (
    <div>This is Menu Component and user is : {username} <ChangeProfile /></div>
  )
}
