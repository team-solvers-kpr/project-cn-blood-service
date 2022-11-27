import React from 'react'
import { useForm } from "react-hook-form";

const Email = () => {
    //handle event
    const { register, handleSubmit, formState: { errors } } = useForm();

    //handle submit 
    const onSubmit = (data) =>console.log(data) ;
  return (
   <div>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className='text-justify mr-32'>
        <input
        type='email'
        autoComplete='off'
        placeholder=''
        className={`w-full h-9 rounded border-gray-400 ${errors.email &&'focus:border-red-500 focus:ring-red-500'}`} 
        {...register("email", { required:'This field is Required.',
            pattern:{
                value:/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                message:'Please Enter a valid Email.'
            }   
    })} 
        
        />
        {errors.email && <span className='text-sm text-red-400 bg-white p-1'>{errors.email.message}</span>}
       
    </div>
    <div>
        
        <p></p>
    </div>
    <div className='text-justify mt-4'>
        <input className=' border rounded cursor-pointer bg-gray-400 text-white py-2 px-5 text-sm hover:bg-gray-500' type='submit' value='Subscribe' name='Subscribe'/>
    
    </div>
    </form>
   </div>
    
  )
}

export default Email