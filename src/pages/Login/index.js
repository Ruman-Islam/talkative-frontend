import React, { useState } from "react";
import Head from "next/head";
import { useForm } from "react-hook-form";
import Link from "next/link";

const Index = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [loginError, setLoginError] = useState('');
  const [loginUserEmail, setLoginUserEmail] = useState('');

  const handleLogin = data => {

    console.log(data.email, data.password);
  }

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="h-[100vh] hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img
              src="https://i.ibb.co/JQP6jCp/3-Q0k3-RC-CWEAMUZb-Q-Eu-N-transformed.jpg"
              alt="login"
              width={500}
              height={500}
            />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm">
            <div className="flex justify-center items-center">
              <div className="w-96 p-7">
                <h2 className="font-extrabold text-neutral text-2xl text-center">
                  Login
                </h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                  <div className="text-neutral form-control w-full max-w-xs">
                    <label className="label">
                      {" "}
                      <span className="label-text text-neutral">Email</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter email"
                      {...register("email", {
                        required: "Email Address is required",
                      })}
                      className="input input-bordered w-full max-w-xs"
                    />
                    {errors.email && (
                      <p className="text-red-600">{errors.email?.message}</p>
                    )}
                  </div>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      {" "}
                      <span className="label-text text-neutral">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Enter password"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message: "Password must be 6 characters or longer",
                        },
                      })}
                      className="text-neutral input input-bordered w-full max-w-xs"
                    />
                    {errors.password && (
                      <p className="text-red-600">{errors.password?.message}</p>
                    )}
                    <label className="label">
                      {" "}
                      <span className="label-text text-neutral"></span>
                    </label>
                  </div>
                  <input
                    className="btn btn-primary w-full"
                    value="Login"
                    type="submit"
                  />
                  <div>
                    {loginError && <p className="text-red-600">{loginError}</p>}
                  </div>
                </form>
                <p className="text-neutral">
                  New to Talkative?{" "}
                  <Link href="/Register/Index" className="font-bold text-info">
                    Create New Account
                  </Link>
                </p>
                <div className="divider"> </div>
                <button className="btn btn-primary btn-outline w-full">
                  Google Login
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
