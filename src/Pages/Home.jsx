import React from 'react'
//import { useContext } from 'react';
//import { AppContext } from '../App';
import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';

export const Home = () => {
  //const {username} = useContext(AppContext);
  const {data,isLoading,isError} = useQuery (["cat"],() => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  })
  if(isLoading){
    return <h1>Loading ...</h1>
  }
  if(isError){
    return <h1>sorry for your inconvenience.</h1>
  }
  return (
    <div>
        This is home component :<p> {data?.fact}</p>
    </div>
  )
}
