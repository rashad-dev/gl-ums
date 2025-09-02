// src/pages/Signup.jsx
import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "../components/ui/form/Input";
import Button from "../components/ui/Button";
import signupImg from "../assets/sign-up/signup.png";

const Signup = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Signup Data:", data);
  };

  return (
    <div className="flex  justify-center min-h-screen bg-gray-100">
      <div className="w-full  md:w-full  md:p-0 md:flex">
        <img
          className="hidden md:block w-[60%] h-screen object-cover object-[50%_80%] "
          src={signupImg}
          alt=""
        />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 md:w-[40%] p-6 sm:10 lg:p-16"
        >
          <h1 className="text-[24px] font-bold md:text-center">
            Create an Account
          </h1>
          <p className="text-[14px] md:text-center text-baseGray">
            Are you ready to join us! Let’s create Account
          </p>
          {/* Name */}
          <Input
            label={"Name"}
            type={"text"}
            placeholder={"Enter your name"}
            {...register("name")}
          />

          {/* Email */}
          <Input
            label={"Email"}
            type={"email"}
            placeholder={"Enter your email"}
            {...register("email")}
          />

          {/* Date */}
          <Input
            label={"Date Field"}
            type={"date"}
            placeholder={"D/M/YYY"}
            {...register("date")}
          />

          {/* Phone */}
          <Input
            label={"Phone"}
            type={"text"}
            placeholder={"Enter your phone"}
            {...register("phone")}
          />

          {/* Password */}
          <Input
            label={"Password"}
            type={"password"}
            placeholder={"Enter your password"}
            {...register("password")}
          />

          <Button>Signup</Button>
          <p className="text-[14px] text-center text-baseGray">
            Do you have an account?{" "}
            <span className="text-baseBlack cursor-pointer">Sign in</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
