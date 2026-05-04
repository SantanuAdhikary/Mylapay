import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const StudentForm = () => {

    const {
    register,
    handleSubmit,
    reset,
   
    formState: { errors },
  } = useForm();

  let myForm=(data)=>{

     console.log(data)
     reset();
  }

  return (
    <div className='stuForm' onSubmit={handleSubmit(myForm)}>


         <form action="" >
            <label htmlFor="">name</label>
              <input type="text"
              placeholder='enter your name'
              {...register("name", {required:"please enter name" , minLength:{ value: 5 , message:"length should be more than 5"}})}
              />
              <p> {errors.name && errors.name.message } </p>

            <label htmlFor="">email</label>
              <input type="text"
              placeholder='enter your email'
              {...register("email" , {required:"email is mandatory"})}
             />
              <p> {errors.email && errors.email.message } </p>



            <label htmlFor="">password</label>
              <input type="text"
              placeholder='enter your password'
              {...register("pass", 
                { required:"password is mandatory", 
                    minLength:{value : 5, message : "min length should be 5"},
                    maxLength: {value : 8, message : "max length should be 8"}
                }
              ) 
                
              }
               />
               <p> {errors.pass && errors.pass.message } </p>


               <label htmlFor="">phone number</label>
               <input type="text" 
               placeholder='enter your mobile number'
               {...register("phNo", {
                     required : "enter phone number",
                     minLength : {
                        value: 10 , message : "min length should be 10"
                     },
                     maxLength : {
                        value: 10 , message : "max length should be 12"
                     }
               })}
               />

               <p> {errors.phNo&& errors.phNo.message} </p>

              <button>signup</button>
         </form>
    </div>
  )
}

export default StudentForm
