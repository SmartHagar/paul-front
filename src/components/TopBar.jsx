/** @format */

import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const TopBar = () => {
  const [light, setLight] = useState(true);

  let location = useLocation();

  React.useEffect(() => {
    console.log("send", "pageview");
  }, [location]);

  const changeTheme = () => {
    // setLight(!light);
    // check mode in localStorage
    if (localStorage.getItem("mode") === "dark") {
      localStorage.setItem("mode", "light");
      setLight(true);
      // html data-theme="winter"
      document.querySelector("html").setAttribute("data-theme", "winter");
    } else {
      localStorage.setItem("mode", "dark");
      setLight(false);
      document.querySelector("html").setAttribute("data-theme", "dark");
    }
  };
  useEffect(() => {
    if (localStorage.getItem("mode") === "dark") {
      setLight(false);
      document.querySelector("html").setAttribute("data-theme", "dark");
    } else {
      setLight(true);
      document.querySelector("html").setAttribute("data-theme", "winter");
    }
  }, []);
  const menu = () => {
    return (
      <>
        <li>
          <NavLink to="/">Dashboard</NavLink>
        </li>

        <li tabIndex="0">
          <Link to="#">
            Profil
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
            </svg>
          </Link>
          <ul className="p-2 bg-base-200">
            <li>
              <NavLink to="visi">Visi</NavLink>
            </li>
            <li>
              <NavLink to="misi">Misi</NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink className="" to="artikel">
            Artikel
          </NavLink>
        </li>
        <li>
          <NavLink className="" to="berita">
            Berita
          </NavLink>
        </li>
        <li>
          <NavLink className="" to="galeri">
            Galeri
          </NavLink>
        </li>
        <li tabIndex="0">
          <Link to="#">
            Kontak
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
            </svg>
          </Link>
          <ul className="p-2 bg-base-200">
            <li>
              <Link to="https//:">Youtube</Link>
              <Link to="https//:">Facebook</Link>
              <Link to="https//:">Instagram</Link>
              <Link to="https//:">Twiter</Link>
            </li>
          </ul>
        </li>
      </>
    );
  };

  return (
    <div className="navbar bg-base-100 shadow-lg sticky top-0 font-work z-50">
      <div className="lg:navbar-start shrink w-11/12">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow-lg bg-base-100 rounded-box w-52"
          >
            {/* menu */}
            {menu()}
          </ul>
        </div>
        {/* <div className="normal-case text-lg lg:text-xl font-bold">
          Pemimpin Perubahan
        </div> */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {/* menu */}
          {menu()}
        </ul>
      </div>
      <div className="lg:navbar-end w-14">
        <div className="form-control">
          <label className="label cursor-pointer">
            <input
              type="checkbox"
              className="toggle toggle-primary"
              checked={light}
              onChange={changeTheme}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
