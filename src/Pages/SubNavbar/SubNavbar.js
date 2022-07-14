import React from "react";
import { Link } from "react-router-dom";

const SubNavbar = () => {
  return (
    <div>
      <div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to={'#'}>All Posts</Link></li>
      <li><Link to={'#'}>Article</Link></li>
      <li><Link to={'#'}>Event</Link></li>
      <li><Link to={'#'}>Education</Link></li>
      <li><Link to={'#'}>Job</Link></li>
      </ul>
    </div>
  </div>
  <div class="navbar-start hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
      <li><Link to={'/article'}>All Posts</Link></li>
      <li><Link to={'#'}>Article</Link></li>
      <li><Link to={'#'}>Event</Link></li>
      <li><Link to={'#'}>Education</Link></li>
      <li><Link to={'#'}>Job</Link></li>
    </ul>
  </div>
  <div class="navbar-end">
    
  <select class="select bg-slate-200 rounded-full w-40">
  <option disabled selected>Write a Post</option>
  <option>Homer</option>
  <option>Marge</option>
  <option>Bart</option>
  <option>Lisa</option>
  <option>Maggie</option>
</select>

<button class="btn gap-2 bg-blue-500 border-none ml-2">
  Joint Group
  <div class="badge badge-secondary">+99</div>
</button>

  </div>
</div>
    </div>
  );
};

export default SubNavbar;
