// src/pages/Signup.jsx
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../components/ui/form/Input";
import Button from "../components/ui/Button";
import signupImg from "../assets/login/login.png";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.log("Signup Data:", errors);
  };
  useEffect(() => {
    console.log(errors);
  }, [errors]);
  return (
    <div className="flex  justify-center min-h-screen bg-gray-100">
      <div className="w-full  md:w-full  md:p-0 md:flex">
        <img
          className="hidden md:block w-[60%] h-screen object-cover object-top "
          src={signupImg}
          alt=""
        />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 md:w-[40%] p-6 sm:10 lg:p-16 md:flex md:flex-col md:justify-center md:space-y-6 "
        >
          <h1 className="text-[24px] font-bold md:text-center">
            Welcome Back!
          </h1>
          <p className="text-[14px] md:text-center text-baseGray">
            Please login to your account
          </p>

          {/* Email */}
          <Input
            label={"Email"}
            type={"email"}
            placeholder={"Enter your email"}
            {...register("email")}
            error={errors.email?.message}
          />

          {/* Password */}
          <Input
            label={"Password"}
            type={"password"}
            placeholder={"Enter your password"}
            {...register("password")}
            error={errors.password?.message}
          />

          <Button className={"text-baseWhite "} color="baseBlack">
            Signup
          </Button>
          <p className="text-[14px] text-center text-baseGray">
            Do you have an account?{" "}
            <span className="text-baseBlack cursor-pointer">Sign in</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
