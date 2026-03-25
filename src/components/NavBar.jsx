import React from 'react'
import { Navigate, NavLink } from "react-router";
import SignupIcon from './Icons/SignUpIcon';
import HomeIcon from './Icons/HomeIcon';
import { useContext, useEffect } from 'react';
import { SessionContext } from '../Contexts/SessionContext';
import { supabase } from '../utils/supabase';
import { useNavigate } from 'react-router';

const NavBar = () => {
  const { session } = useContext(SessionContext);
  const Navigate = useNavigate();

  // Handle user logout by calling the Supabase signOut function and navigating to the login page
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) alert("baliw ka ba");
    Navigate("/Login");
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex w-full max-w-6xl mx-auto">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl px-0">
            <NavLink to="/HomePage" className="flex items-center">
              <span className="text-primary">Event</span>
              <span className="text-secondary">Gate</span>
            </NavLink>
          </a>
        </div>
        <div className="flex-none">

          {/* Navigation Links */}

          {session && (
            <NavLink
              to="/HomePage"
              className="btn btn-primary mr-4 rounded-full btn-outline"
            >
              <HomeIcon className="text-lg" />
              Home
            </NavLink>
          )}
          {!session && (

            <>
              <NavLink to="/Sign-up" className="btn btn-primary mr-5 rounded-full btn-outline">
                <SignupIcon className="text-xl" />
                Sign-up
              </NavLink>


              <NavLink
                to="/Login"
                className="btn btn-primary mr-4 rounded-full btn-outline"
              >
                <HomeIcon className="text-lg" />
                Login
              </NavLink>
            </>
          )
          }

          {/* User Dropdown */}
          {session && (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://tse1.mm.bing.net/th/id/OIP.6sJJGvJdRSz_odTZ_xh8WgHaFK?rs=1&pid=ImgDetMain&o=7&rm=3" />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li>
                  <NavLink to="/Profile" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </NavLink>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default NavBar