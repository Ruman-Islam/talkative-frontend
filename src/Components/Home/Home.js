import { useState } from "react";
import HomeNavbar from "../HomeNavbar/HomeNavbar";
import styles from "../../styles/Home.module.css";
import Loading from "../../Components/common/Loading";

const Home = () => {
  const [modal, setModal] = useState(false);

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
          />
        </div>
      </div>
      {modal ? (
        <div className="fixed inset-0 z-50  max-w-md gap-2 p-6 bg-slate-900">
          <form onSubmit={formControl} className="h-fit flex flex-col gap-2 p-6">
            <button
              onClick={() => setModal(false)}
              className="btn btn-sm btn-circle absolute right-6 top-4"
            >
              ✕
            </button>
            <div className="mt-12 col-span-full sm:col-span-3">
              <input
                name="age"
                type="text"
                placeholder="Enter age"
                className="w-full rounded-md border-0 bg-white text-accent font-bold placeholder:text-neutral px-4 py-2"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <select
                defaultValue="Preference country"
                name="preference_country"
                type="text"
                className="w-full rounded-md bg-white text-accent font-bold  px-4 py-2"
              >
                <option disabled defaultValue>
                  Preference country
                </option>
                <option>USA</option>
                <option>UK</option>
                <option>UAE</option>
                <option>Iceland</option>
              </select>
            </div>
            <div className="col-span-full sm:col-span-3">
              <select
                defaultValue="Preference languages"
                name="preference_language"
                type="text"
                className="w-full rounded-md bg-white text-accent font-bold px-4 py-2"
              >
                <option disabled defaultValue>
                  Preference languages
                </option>
                <option>English</option>
                <option>Spanish</option>
              </select>
            </div>
            <input
              className="mt-8 btn btn-primary w-full font-bold "
              type="submit"
              value="Search"
            />
            {/* <Loading /> */}
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default Home;
