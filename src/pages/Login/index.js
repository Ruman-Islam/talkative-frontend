import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import logo from "../../assets/images/googleLogo.png";

const Index = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [loginError, setLoginError] = useState("");
  const [loginUserEmail, setLoginUserEmail] = useState("");

  const handleLogin = (data) => {
    console.log(data.email, data.password);
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="h-[100vh] hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img
              src="https://i.pinimg.com/736x/a9/dd/93/a9dd9332469ecad9d9770985d8e032f0.jpg"
              alt="login"
              width={500}
              height={500}
            />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm">
            <div className="flex justify-center items-center">
              <div className="w-96 p-7">
                <h2 className="font-extrabold text-primary text-2xl text-right mb-5">
                  Login
                </h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                  <div className="form-control w-full mt-4">
                    <input
                      type="text"
                      placeholder="Email"
                      autoComplete="off"
                      {...register("email", {
                        required: "Email Address is required",
                      })}
                      className="input input-bordered w-full"
                    />
                    {errors.email && (
                      <p className="text-red-600 text-xs">
                        {errors.email?.message}
                      </p>
                    )}
                  </div>
                  <div className="form-control w-full mt-4">
                    <input
                      type="password"
                      placeholder="Password"
                      autoComplete="off"
                      className="input input-bordered w-full"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message: "Password must be 6 characters or longer",
                        },
                      })}
                    />
                    {errors.password && (
                      <p className="text-red-600 text-xs">
                        {errors.password?.message}
                      </p>
                    )}
                  </div>
                  <input
                    className="btn btn-primary w-full mt-5"
                    value="Login"
                    type="submit"
                  />
                  <div>
                    {loginError && <p className="text-red-600">{loginError}</p>}
                  </div>
                </form>
                <p className="text-neutral mt-1">
                  New to Talkative?{" "}
                  <Link href="Register" className="font-bold text-info">
                    Create
                  </Link>
                </p>
                <div className="divider"> </div>
                <button
                  role="button"
                  className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10 justify-center"
                >
                  <Image width={20} src={logo} alt="google" />
                  <p class="text-base font-medium ml-4 text-gray-700">
                    Continue with Google
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
