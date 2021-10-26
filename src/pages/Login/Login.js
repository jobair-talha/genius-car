import React from "react";
import { useForm } from "react-hook-form";
import "./Login.css";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-5">
      <input {...register("email")} type="email" placeholder="Your Email" />
      <input {...register("Password")} type="password" placeholder="Password" />
      <input type="submit" />
    </form>
  );
};

export default Login;
