import { useState } from "react";
import HomeNavbar from "../HomeNavbar/HomeNavbar";
import styles from "../../styles/Home.module.css";
import Loading from "../../Components/common/Loading";
import Link from "next/link";

const Home = () => {
  const [modal, setModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const formControl = (e) => {
    e.preventDefault();
    const form = e.target;
    const age = form.age.value;
    const preferenceCountry = form.preference_country.value;
    const preferenceLanguage = form.preference_language.value;
  };

  return (
    <div className={`${styles.background}`}>
      <HomeNavbar />
      <div className="hero min-h-screen font-Permanent lg:px-10 2xl:px-0 backdrop-filter backdrop-blur-lg">
        <div className="hero-content flex-col lg:flex-row mt-10">
          <div className="text-primary backdrop-filter backdrop-blur-xl firefox:bg-opacity-5 bg-opacity-5 bg-neutral rounded-md p-5 lg:p-10">
            <h1 className="text-4xl lg:text-5xl font-bold lg:leading-normal">
              Speak languages with confidence
            </h1>
            <br />
            <p className="text-white text-xl">
              Language learning on your schedule, with teachers you can trust.
            </p>
            <button
              onClick={() => setModal(true)}
              type="button"
              className="btn mt-5"
            >
              search
            </button>
          </div>
          <img
            src="https://lh3.googleusercontent.com/nSljuMFCI1FTxwxfrvh4BpAes486Ucy-HMSeo_1xiK5UO3Kty40OMFwrAiFM6-2At7gNtATmwLCjzSxRCGrGpu_ojkwcdiIFwwOdqk1w4h4P3O8Hmnsl=rwu-v1-w1400"
            className="md:max-w-xl 2xl:max-w-2xl rounded-lg shadow-2xl"
            alt="talkative"
          />
        </div>
      </div>
      {modal ? (
        <div className="fixed inset-0 z-50  max-w-md gap-2 p-6 bg-slate-900">
          <button
            onClick={() => setModal(false)}
            className="btn btn-sm btn-circle absolute right-6 top-4"
          >
            ✕
          </button>
          {isLoggedIn ? (
            <form
              onSubmit={formControl}
              className="h-fit flex flex-col gap-2 p-6"
            >
              <div className="col-span-full sm:col-span-3">
                <label
                  for="first-name"
                  className="block text-sm font-medium text-primary ml-1"
                >
                  Age
                </label>
                <input
                  type="text"
                  name="age"
                  id="age"
                  autoComplete="off"
                  placeholder="Age"
                  className="mt-1 block w-full rounded-md border-none outline-none px-4 py-2 bg-white sm:text-sm placeholder:text-accent text-accent"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  for="country"
                  className="block text-sm font-medium text-primary ml-1"
                >
                  Preference Language
                </label>
                <select
                  name="preference_country"
                  className="mt-1 block w-full rounded-md bg-white py-2 px-3 shadow-sm sm:text-sm text-accent"
                >
                  <option disabled selected>
                    Select
                  </option>
                  <option>English</option>
                  <option>Spanish</option>
                  <option>Latin</option>
                </select>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  for="country"
                  className="block text-sm font-medium text-primary ml-1"
                >
                  Preference Country
                </label>
                <select
                  name="preference_language"
                  className="mt-1 block w-full rounded-md bg-white py-2 px-3 shadow-sm sm:text-sm text-accent"
                >
                  <option disabled selected>
                    Select
                  </option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
              <input
                className="mt-8 btn btn-primary w-full font-bold"
                type="submit"
                value="Search"
              />
              {/* <Loading /> */}
            </form>
          ) : (
            <div className="flex flex-col items-center justify-center h-full">
              <span className="mb-4 text-lg text-white">
                You are not logged in, Please log in first!
              </span>
              <Link href="Login" className="w-full btn btn-primary">
                Log in
              </Link>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Home;
