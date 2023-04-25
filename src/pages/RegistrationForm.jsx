import React from "react";
import { useForm } from "react-hook-form";
import "./registrationForm.css";
// import { NavLink } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";



export const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const sendValue = (dataInput) => {
    console.log(dataInput);
  };

  return (
      <div className="registration_block">
        <form onSubmit={handleSubmit(sendValue)}>
          <div className="registration_header">
            <h1>Hi, User</h1>
          </div>
  
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
          <div>
            <input
              type="text"
              placeholder="      Password"
              className="input_space"
              {...register("password", { required: true })}
            />
            <div>{errors.email && <p>{errors.email.message}</p>}</div>
          </div>
          <div>
            <input type="submit" value="LOGIN" className="input_space" />
          </div>
          <div className="registration-text">
            <p>Login via social network:</p>
            <div className="registration-icons">
              <a href="https://www.facebook.com/">
            <BsFacebook className='shop-card facebook'/>
            </a>
            <a href="https://web.telegram.org/k/">
            <FaTelegram className='shop-card telegram'/>
            </a>
            <a href="https://github.com/">
            <FaGithub className='shop-card git'/>
            </a>
          </div>
          </div>

        </form>
      </div>
    );
  };