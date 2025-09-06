// src/pages/Signup.jsx
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../components/ui/form/Input";
import Button from "../components/ui/Button";
import signupImg from "../assets/sign-up/signup.png";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { addUser } from "../services/userServices";

const signupSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Mobile must be 10 digits")
    .required("Mobile is required"),
  date: Yup.date().required("Date of Birth is required"),
});

const Signup = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    try {
      console.log("Signup Data:", errors);
      const newUser = { ...data };

      const response = addUser(newUser);

      reset();
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };
  useEffect(() => {
    console.log(errors);
  }, [errors]);
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
            error={errors.name?.message}
          />

          {/* Email */}
          <Input
            label={"Email"}
            type={"email"}
            placeholder={"Enter your email"}
            {...register("email")}
            error={errors.email?.message}
          />

          {/* Date */}
          <Input
            label={"Date Field"}
            type={"date"}
            placeholder={"D/M/YYY"}
            {...register("date")}
            error={errors.date?.message}
          />

          {/* Phone */}
          <Input
            label={"Phone"}
            type={"text"}
            placeholder={"Enter your phone"}
            {...register("phone")}
            error={errors.phone?.message}
          />

          {/* Password */}
          <Input
            label={"Password"}
            type={"password"}
            placeholder={"Enter your password"}
            {...register("password")}
            error={errors.password?.message}
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
