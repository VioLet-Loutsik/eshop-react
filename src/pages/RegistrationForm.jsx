import {React, useState } from "react";
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
   const[email, setEmail] = useState("")

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
            // value={email}
            className="input_space"
            onChange={(e) => setEmail(e.target.value)}
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
          <input type="submit" value="SUBMIT" className="input_space submit" />
        </div>
        <div className="registration-social-block">
          <div className="registration-text">
            <p>Login via social network:</p>
          </div>
          <div className="registration-icons">
            <div className="block-icon">
              <a href="https://www.facebook.com/">
                <BsFacebook className="shop-card facebook" />
              </a>
            </div>
            <div className="block-icon">
              <a href="https://web.telegram.org/k/">
                <FaTelegram className="shop-card telegram" />
              </a>
            </div>

            <div className="block-icon">
              <a href="https://github.com/">
                <FaGithub className="shop-card git" />
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
