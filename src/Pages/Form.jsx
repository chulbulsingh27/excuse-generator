import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


export const Form = () => {
  
  const schema = yup.object().shape({
    fullName : yup.string().required("Your Full Name is required"),
    email : yup.string().email().required("Your email is required"),
    age : yup.number().positive().integer().min(18).required("Your age is required"),
    password : yup.string().min(6).max(18).required("password is required"),
    confirmPassword : yup.string().oneOf([yup.ref("password"),null],"password didn't match").required(),
  })
  const onSubmit = (data) => {
    console.log(data);
  }
  const {register , handleSubmit , formState:{errors}} = useForm({
    resolver:yupResolver(schema)   
  });
  return (
    <form  className=' flex  flex-col space-y-4 ' onSubmit={handleSubmit(onSubmit)}>
      <input className = "border-2 p-3" type="text" placeholder='Full Name...' {...register("fullName")}/> 
      <p>{errors.fullName?.message}</p>
      <input className = "border-2 p-3" type="text" placeholder='Email...' {...register("email")}/> 
      <p>{errors.email?.message}</p>
      <input className = "border-2 p-3" type="number" placeholder='Age...' {...register("age")}/> 
      <p>{errors.age?.message}</p>
      <input className = "border-2 p-3" type="password" placeholder='Password...' {...register("password")}/> 
      <p>{errors.password?.message}</p>
      <input className = "border-2 p-3" type="password" placeholder='Confirm Password ...' {...register("confirmPassword")}/> 
      <p>{errors.confirmPassword?.message}</p>
      <input className = "border-2 p-3 bg-sky-500 rounded-md" type="Submit" /> 
        
    </form>
  )
}
