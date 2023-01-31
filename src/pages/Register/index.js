import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import logo from '../../assets/images/googleLogo.png'

const Index = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [ageError, setAgeError] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signupError, setSignupError] = useState(null);
  const [createdUserEmail, setCreatedUserEmail] = useState("");

  const handleRegister = (data) => {
    if (step === 1) {
      const givenDate = new Date(data.birthDate).getFullYear();
      const today = new Date().getFullYear();
      if (+data.age !== Math.round(today - givenDate)) {
        setAgeError("Age do not match");
        return;
      } else {
        setAgeError("");
        setFormData({ ...formData, ...data });
        setStep(step + 1);
      }
    } else if (step === 2) {
      setFormData({ ...formData, ...data });
      setStep(step + 1);
    } else {
      setFormData({ ...formData, ...data });
      console.log(data);
    }
  };

  const previousStep = () => {
    setStep(step - 1);
  };

  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <div className="min-h-screen flex flex-col justify-center items-center py-5">
        <div className="lg:flex items-center w-3/4 2xl:w-2/4">
          <div className="text-center lg:text-left flex-1">
            <img
              className="inline"
              src="https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration_335657-2242.jpg?w=2000"
              alt="talkative register"
            />
          </div>
          <div className="flex-1">
            <h2 className="font-extrabold text-primary text-2xl text-right mb-5">
              Register
            </h2>
            <form
              className="text-accent"
              autoComplete="off"
              onSubmit={handleSubmit(handleRegister)}
            >
              <div className="w-full h-1 bg-gray-200 mb-4 rounded-lg">
                <div
                  style={{
                    width: step === 1 ? "33.3%" : step === 2 ? "66.6%" : "100%",
                    height: "100%",
                    transition: "width 1s ease-in-out",
                  }}
                  className="bg-primary rounded-full"
                />
              </div>
              {step === 1 && (
                <>
                  <div className="text-neutral w-full">
                    <input
                      type="text"
                      placeholder="First name"
                      autoComplete="off"
                      className="input input-bordered w-full"
                      {...register("firstName", {
                        required: "First name is required",
                        pattern: {
                          value: /^[a-zA-Z\-]+$/,
                          message: "First name only accept alphabet",
                        },
                      })}
                    />
                    {errors.firstName && (
                      <p className="text-red-600 text-xs">
                        {errors.firstName?.message}
                      </p>
                    )}
                  </div>
                  <div className="text-neutral mt-1">
                    <input
                      type="text"
                      placeholder="Last name"
                      autoComplete="off"
                      {...register("lastName", {
                        required: "Last name is required",
                        pattern: {
                          value: /^[a-zA-Z\-]+$/,
                          message: "Last name only accept alphabet",
                        },
                      })}
                      className="input input-bordered w-full"
                    />
                    {errors.lastName && (
                      <p className="text-red-600 text-xs">
                        {errors.lastName?.message}
                      </p>
                    )}
                  </div>
                  <div className="text-neutral mt-1">
                    <input
                      type="number"
                      placeholder="Age"
                      autoComplete="off"
                      {...register("age", {
                        required: "Age is required",
                        min: {
                          value: 10,
                          message: "You Must be older then 10",
                        },
                      })}
                      className="input input-bordered w-full"
                    />
                    {errors.age && (
                      <p className="text-red-600 text-xs">
                        {errors.age.message}
                      </p>
                    )}
                  </div>
                  <div className="text-neutral w-full mt-1">
                    <input
                      type="text"
                      placeholder="Birth date (mm/dd/yyyy)"
                      onFocus={(e) => (e.target.type = "date")}
                      onBlur={(e) => (e.target.type = "text")}
                      className="input input-bordered w-full"
                      {...register("birthDate", {
                        required: "Birth Date is required",
                      })}
                    />
                    {errors.birthDate && (
                      <p className="text-red-600 text-xs">
                        {errors.birthDate?.message}
                      </p>
                    )}
                    {ageError && (
                      <p className="text-red-600 text-xs">{ageError}</p>
                    )}
                  </div>
                  <div className="text-neutral w-full flex mt-1">
                    <label htmlFor="male">
                      <input
                        {...register("gender", {
                          required: "Gender is required",
                        })}
                        type="radio"
                        value="Male"
                        id="male"
                      />
                      <span> Male</span>
                    </label>
                    <label htmlFor="female">
                      <input
                        {...register("gender", {
                          required: "Gender is required",
                        })}
                        type="radio"
                        value="Female"
                        id="female"
                        className="ml-5"
                      />
                      <span> Female</span>
                    </label>
                  </div>
                  {errors.gender && (
                    <p className="text-red-600 text-xs">
                      {errors.gender?.message}
                    </p>
                  )}
                  <button className="btn btn-primary w-full mt-4" type="submit">
                    Next
                  </button>
                </>
              )}
              {step === 2 && (
                <>
                  <div className="form-control w-full">
                    <select
                      className="input input-bordered w-full px-3 py-2 outline-none"
                      {...register("country", {
                        required: "Country is required",
                      })}
                    >
                      <option value="">Your Country</option>
                      <option value="USA">USA</option>
                      <option value="Mexico">Mexico</option>
                      <option value="Spain">Spain</option>
                    </select>
                    {errors.country && (
                      <p className="text-red-600 text-xs">
                        {errors.country?.message}
                      </p>
                    )}
                  </div>
                  <div className="form-control w-full mt-4">
                    <select
                      className="input input-bordered w-full px-3 py-2 outline-none"
                      {...register("language", {
                        required: "Country is required",
                      })}
                    >
                      <option value="">Your Language</option>
                      <option value="English">English</option>
                      <option value="Latin">Latin</option>
                      <option value="Spanish">Spanish</option>
                    </select>
                    {errors.language && (
                      <p className="text-red-600 text-xs">
                        {errors.language?.message}
                      </p>
                    )}
                  </div>
                  <div className="form-control w-full mt-4">
                    <select
                      className="input input-bordered w-full px-3 py-2 outline-none"
                      {...register("preferredCountry", {
                        required: "Country is required",
                      })}
                    >
                      <option value="">Preferred Country</option>
                      <option value="USA">USA</option>
                      <option value="Mexico">Mexico</option>
                      <option value="Spain">Spain</option>
                    </select>
                    {errors.preferredCountry && (
                      <p className="text-red-600 text-xs">
                        {errors.preferredCountry?.message}
                      </p>
                    )}
                  </div>
                  <div className="form-control w-full mt-4">
                    <select
                      className="input input-bordered w-full px-3 py-2 outline-none"
                      {...register("preferredLanguage", {
                        required: "Country is required",
                      })}
                    >
                      <option value="">Preferred Language</option>
                      <option value="English">English</option>
                      <option value="Latin">Latin</option>
                      <option value="Spanish">Spanish</option>
                    </select>
                    {errors.preferredLanguage && (
                      <p className="text-red-600 text-xs">
                        {errors.preferredLanguage?.message}
                      </p>
                    )}
                  </div>

                  <div className="flex justify-between gap-x-1">
                    <button
                      className="flex-1 btn btn-primary mt-4"
                      type="button"
                      onClick={previousStep}
                    >
                      Previous
                    </button>
                    <button
                      className="flex-1 btn btn-primary mt-4"
                      type="submit"
                    >
                      Next
                    </button>
                  </div>
                </>
              )}
              {step === 3 && (
                <>
                  <div className="form-control w-full mt-4">
                    <input
                      type="text"
                      placeholder="Email"
                      autoComplete="off"
                      {...register("email", {
                        required: "Email Address is required",
                        pattern: {
                          value:
                            /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/,
                          message: "Must be an email",
                        },
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
                  <div className="flex justify-between gap-x-1">
                    <button
                      className="flex-1 btn btn-primary mt-4"
                      type="button"
                      onClick={previousStep}
                    >
                      Previous
                    </button>
                    <button
                      className="flex-1 btn btn-primary mt-4"
                      type="submit"
                    >
                      Register
                    </button>
                  </div>
                </>
              )}
              <div>
                {signupError && <p className="text-red-600">{signupError}</p>}
              </div>
            </form>
            <div className="divider"> </div>
            <p className="text-neutral mb-1">
              Already have an account?{" "}
              <Link href="Login" className="font-bold text-info">
                login
              </Link>
            </p>
            <button
              role="button"
              className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10 justify-center"
            >
              <Image width={20} src={logo} alt="google"/>
              <p class="text-base font-medium ml-4 text-gray-700">
                Continue with Google
              </p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
