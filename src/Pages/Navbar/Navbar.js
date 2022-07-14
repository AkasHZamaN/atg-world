import React from "react";

import { Link } from "react-router-dom";
import LoginModal from "../LoginModal/LoginModal";
import SignupModal from "../SignupModal/SignupModal";

const Navber = () => {
  const menuItems = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>

      <li tabindex="0">
        <Link to={'#'}>
          My Account
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </Link>
        <ul class="p-2 bg-base-100 text-black">
          <li><label htmlFor="loginModal" class=" modal-button">
        Login
      </label></li>
          <li><label htmlFor="signupModal" class=" modal-button">
        Sign Up
      </label></li>
        </ul>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-white px-6">
        <div id="logo" className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-black"
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 uppercase text-black"
            >
              {menuItems}
            </ul>
          </div>
          <h1 className="text-black">ATGWORLD</h1>
        </div>
        <div className="navbar-center hidden justify-between lg:flex">
          <ul className="menu menu-horizontal p-0 text-black uppercase">
            {menuItems}
          </ul>
        </div>
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered w-40"
            />
            <button className="btn btn-square bg-slate-500 border-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <LoginModal></LoginModal>
      <SignupModal></SignupModal>
    </div>
  );
};

export default Navber;
