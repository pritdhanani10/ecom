import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import { FaBarsStaggered, FaRegCircleUser } from "react-icons/fa6";
// import { IoHeartSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { TbBasket, TbUserCircle } from "react-icons/tb";
import { RiUserLine } from "react-icons/ri";
import { useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Logo from "../assets/logo.png";
import DarkMode from "./DarkMode";

const Header = () => {
  const { token, setToken, getCartCount, navigate } =
    useContext(ShopContext);
  const [menuOpened, setmenuOpened] = useState(false);

  const toggleMenu = () => setmenuOpened((prev) => !prev);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/login");
  };

  return (
    <header className="max-padd-container w-full dark:bg-gray-900 dark:text-white">
      <div className="flexBetween py-1">
        {/* Logo Left side */}
        <Link to={"/"} className="flex flex-1">
          <div className="flex">
            <img src={Logo} alt="" className="w-28" />
          </div>
        </Link>

        {/* Navbar */}
        <div className="flex-1">
          <Navbar
            containerStyles={`${
              menuOpened
                ? "flex items-start flex-col gap-y-8 fixed top-16 p-5 bg-white rounded-xl shadow-md w-52 ring-1 ring-slate-900/5 z-50"
                : "hidden xl:flex gap-x-5 xl:gap-x-10 medium-15 ring-1 ring-slate-900/5 rounded-full p-1"
            }`}
          />
        </div>

        {/* Button Right side */}
        <div className="flex-1 flex items-center justify-end gap-x-2 xs:gap-x-8">
          {/* menu toggle */}
          <FaBarsStaggered
            onClick={toggleMenu}
            className="xl:hidden cursor-pointer text-xl"
          />

          {/* Heart icon */}
          <FaRegHeart className='text-2xl cursor-pointer text-secondary'/>

          {/* Cart */}
          <Link to={"/cart"} className="flex relative">
            <TbBasket className="text-[27px]" />
            <span className="bg-secondary text-white text-[12px] font-semibold absolute left-1.5 -top-3.5 flexCenter w-4 h-4 rounded-full shadow-md">
              {getCartCount()}
            </span>
          </Link>

          {/* Darkmode Switch */}
          <div>
            <DarkMode />
          </div>

          {/* user profile */}
          <div className="group relative">
            <div>
              {token ? (
                <div>
                  <TbUserCircle className="text-[29px] cursor-pointer" />
                </div>
              ) : (
                <button
                  onClick={() => navigate("/login")}
                  className="btn-light flexCenter gap-x-2"
                >
                  Login
                  <RiUserLine className="text-xl" />
                </button>
              )}
            </div>
            {/* Dropdown */}
            {token && (
              <ul className="bg-white p-2 w-32 ring-1 ring-slate-900/5 rounded absolute right-0 top-7 hidden group-hover:flex flex-col regular-14 shadow-md z-50">
                <li
                  onClick={() => navigate("/orders")}
                  className="p-2 text-tertiary rounded-md hover:bg-primary cursor-pointer"
                >
                  Orders
                </li>
                <li
                  onClick={logout}
                  className="p-2 text-tertiary rounded-md hover:bg-primary cursor-pointer"
                >
                  Logout
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
