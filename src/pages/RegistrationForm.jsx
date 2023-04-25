import React from "react";
import { useForm } from "react-hook-form";
import './registrationForm.css';



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
    <div className='registration_block'>
      <form onSubmit={handleSubmit(sendValue)}>
        <label htmlFor="text">Email *</label>
        <input
          type="email"
          placeholder="email"
          {...register("email", {
            required: "This field is required",
            minLength: { value: 10, message: "мин длина 10 символа" },
          })}
        />
        <div className="showErrorName">
          {errors.name && <p>The mail is required</p>}
        </div>
        <div>{errors.email && <p>{errors.email.message}</p>}</div>
        <input
          type="text"
          placeholder="password"
          {...register("password", { required: true })}
        />
        <input type="submit" value="Create an account" />
      </form>
    </div>
  );
};
