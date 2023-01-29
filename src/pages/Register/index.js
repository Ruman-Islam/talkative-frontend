import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Index = () => {

  const { register, formState: { errors }, handleSubmit } = useForm();
  const [signupError, setSignupError] = useState('');
  const [createdUserEmail, setCreatedUserEmail] = useState('');

  const handleRegister = data => {
    console.log(data);
  }

  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <div className="min-h-screen sm:mb-10 md:mb-10 lg:overflow-hidden">
        <div className="mt-20 lg:flex justify-around">
          <div className="lg:mt-32 text-center lg:text-left">
            <img className="inline" src='https://i.ibb.co/pQq98Qw/online-registration-sign-up-with-man-sitting-near-smartphone-268404-95.webp' alt='login' width={500} />
          </div>
          <div>
            <div className='flex justify-center items-center'>
              <div>
                <h2 className='font-extrabold text-neutral text-2xl text-center'>Register</h2>
                <form onSubmit={handleSubmit(handleRegister)}>
                  <div className=" flex justify-items-center">
                    <div>
                      <div className="text-neutral form-control">
                        <label className="label"> <span className="label-text text-neutral">User Name</span></label>
                        <input type="text" placeholder="User name" {...register("User name", { required: true, maxLength: 80 })}
                          className="input input-bordered w-full" />
                      </div>
                      <div className="text-neutral form-control">
                        <label className="label"> <span className="label-text text-neutral">Email</span></label>
                        <input type="text" placeholder="Enter email"
                          {...register("email", {
                            required: "Email Address is required"
                          })}
                          className="input input-bordered w-full" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                      </div>
                      <div className="text-neutral form-control">
                        <label className="label"> <span className="label-text text-neutral">Password</span></label>
                        <input type="password" placeholder="Enter password"
                          {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                          })}
                          className="text-neutral input input-bordered w-full" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                      </div>
                      <div className="text-neutral form-control">
                        <label className="label"> <span className="label-text text-neutral">Country</span></label>
                        <input type="text" placeholder="Enter country name" {...register("Country", { required: true, maxLength: 80 })} className="input input-bordered w-full" />
                      </div>
                    </div>

                    <div>
                      <div className="text-neutral form-control">
                        <label className="label"> <span className="label-text text-neutral">Age</span></label>
                        <input type="number" placeholder="Enter age" {...register("Age", { required: true, max: 59, min: 17, maxLength: 101 })} className="input input-bordered w-full" />
                      </div>
                      <div className="text-neutral form-control">
                        <label className="label"> <span className="label-text text-neutral">Birthday</span></label>
                        <input type="date" placeholder="Enter birthday" {...register("Birthday", { required: true, maxLength: 12 })} className="input input-bordered w-full" />
                      </div>
                      <div className="text-neutral form-control">
                        <label className="label"> <span className="label-text text-neutral">Skill</span></label>
                        <input type="number" placeholder="Add skill level" {...register("Skill", { max: 10, min: 0 })} className="input input-bordered w-full" />
                      </div>
                      <div className="text-neutral form-control">
                        <label className="label"> <span className="label-text text-neutral">Native Language</span></label>
                        <input type="text" placeholder="Native Language" {...register("Enter language", { maxLength: 14 })} className="input input-bordered w-full" />
                      </div>
                    </div>
                  </div>
                  <input className='mt-4 btn btn-primary w-full' value="Register" type="submit" />
                  <div>
                    {signupError && <p className='text-red-600'>{signupError}</p>}
                  </div>
                </form>
                <p className="text-neutral">Already have an account? <Link href='Login' className='font-bold text-info'>login</Link></p>
                <div className="divider"> </div>
                <button className='btn btn-primary btn-outline w-full'>Google Signup</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;