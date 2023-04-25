import React from 'react'
import { useForm } from "react-hook-form";
import './login.css'
import { NavLink } from 'react-router-dom';

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const sendValue = (dataInput) => {
    console.log(dataInput);
  };

  return (
    <div  className='registration_block'>
      <form onSubmit={handleSubmit(sendValue)}>
      <div className='registration_header'><h1>Hi, User</h1></div>
      
      <div>
        <input
          type="email"
          placeholder="      Your E-mail" 
          className="input_space"
          {...register("email", {
            required: "This field is required",
            minLength: { value: 10, message: "мин длина 10 символа" },
          })}
         />
        <div>{errors.email && <p>{errors.email.message}</p>}</div>
        </div>

        <div>
        <input
          type="text"
          placeholder="      Password"
          className="input_space"
          {...register("password", { required: true })}
        />
        <div>{errors.email && <p>{errors.email.message}</p>}</div>
        </div>
        <div className="registration-pages">
          <NavLink to='/forgot_password'>
          <p>Forgot the password?</p>
          </ NavLink>
          <NavLink to='/forgot_password'>
          <p>Registration</p>
          </ NavLink>
        </div>
        <div>
        <input type="submit" value="LOGIN" className="input_space" />
        </div>        
      </form>
    </div>
  );
};

