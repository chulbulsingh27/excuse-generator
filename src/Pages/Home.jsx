import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../App';

export const Home = () => {
  const {username} = useContext(AppContext);
  return (
    <div>
        This is home component and name is : {username}
    </div>
  )
}
