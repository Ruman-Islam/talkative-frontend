import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import inbox from "../../assets/images/inbox.svg";
import notificationLogo from "../../assets/images/notification.svg";
import profileLogo from "../../assets/images/profile.svg";
import examLogo from "../../assets/images/exam.png";
import settingLogo from "../../assets/images/settings.svg";
import logoutLogo from "../../assets/images/logout.svg";

const HomeNavbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [notification, setNotification] = useState(false);
  return (
    <nav className="w-11/12 lg:w-12/12 2xl:w-8/12 mx-auto fixed left-0 right-0 top-3 lg:top-8 2xl:top-10 z-10 backdrop-filter backdrop-blur-xl rounded-md text-primary duration-300 firefox:bg-opacity-30 bg-opacity-30 bg-accent shadow-md font-Permanent">
      <div className="mx-auto px-4">
        <div className="navbar justify-between h-16">
          <div className="flex-1">
            <span className="normal-case text-2xl md:text-3xl font-bold cursor-default">
              Talkative
            </span>
          </div>
          <div className="flex-1 justify-end">
            <ul className="flex text-sm md:text-lg font-bold items-center">
              {isLoggedIn && <li className="hidden md:flex mr-5">Lvl-1</li>}
              {isLoggedIn || (
                <li className="mr-5 hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-primary before:absolute before:left-0 before:top-11">
                  <Link href="Login">Login</Link>
                </li>
              )}
              {isLoggedIn || (
                <li className="shadow-md p-0.5 rounded-sm">
                  <Link
                    className="inline-block bg-primary hover:bg-base-100 hover:text-primary duration-200 text-base-100 px-3 py-1 rounded-sm"
                    href="Register"
                  >
                    Signup
                  </Link>
                </li>
              )}
              {isLoggedIn && (
                <li
                  tabIndex={1}
                  className="mr-5 hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-primary before:absolute before:left-0 before:top-11 mt-1 dropdown dropdown-end"
                >
                  <Link href="">
                    <Image className="w-8" src={notificationLogo} alt="" />
                  </Link>
                  <ul
                    tabIndex={1}
                    className="menu-compact dropdown-content mt-4 py-2 shadow bg-accent w-52 text-sm px-2"
                  >
                    {notification ? <li>notification 1</li> : "No notification"}
                  </ul>
                </li>
              )}
              {isLoggedIn && (
                <li className="mr-5 hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-primary text-yellow-400 before:absolute before:left-0 before:top-11 mt-1 md:text-2xl">
                  <Link href="">
                    <Image className="w-8" src={inbox} alt="" />
                  </Link>
                </li>
              )}
              {isLoggedIn && (
                <li className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img src="https://placeimg.com/80/80/people" />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu-compact dropdown-content mt-2 py-2 shadow w-44 bg-accent backdrop-filter backdrop-blur-2xl"
                  >
                    <li className="hover:bg-neutral hover:text-white duration-300">
                      <Link className="flex justify-between px-3 " href="">
                        <>
                          <span>Profile</span>
                          <Image className="w-5" src={profileLogo} alt="" />
                        </>
                      </Link>
                    </li>
                    <li className="hover:bg-neutral hover:text-white duration-300">
                      <Link className="flex justify-between px-3 " href="">
                        <>
                          <span>Exam</span>
                          <Image className="w-5" src={examLogo} alt="" />
                        </>
                      </Link>
                    </li>
                    <li className="hover:bg-neutral hover:text-white duration-300">
                      <Link className="flex justify-between px-3 " href="">
                        <>
                          <span>Settings</span>
                          <Image className="w-5" src={settingLogo} alt="" />
                        </>
                      </Link>
                    </li>
                    <li className="hover:bg-neutral hover:text-white duration-300">
                      <button className="flex justify-between px-3  w-full">
                        <span>Logout</span>
                        <Image className="w-5" src={logoutLogo} alt="" />
                      </button>
                    </li>
                  </ul>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavbar;
