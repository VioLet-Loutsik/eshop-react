import React from "react";
import { useForm } from "react-hook-form";
import "./login.css";
import "./forgotPassword.css";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const sendValue = (dataInput) => {
    console.log(dataInput);
  };

  return (
    <div className="forgot-password-block">
      <form onSubmit={handleSubmit(sendValue)}>
        <div className="forgot-password-info">
          <p>
            To recover a forgotten password, enter your mailbox in the field
            that you specified during registration and the password will be sent
            to this address.
          </p>
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
          <input type="submit" value="SEND" className="input_space" />
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
