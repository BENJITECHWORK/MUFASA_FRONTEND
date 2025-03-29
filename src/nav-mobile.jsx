import React from "react";
import { NavLink } from "react-router-dom";

const NavMob = () => {
  return (
    <div className="fixed top-2 left-2 z-50">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 w-56 p-4 shadow bg-base-100 rounded-box z-50 space-y-2 text-lg"
        >
          <li>
            <NavLink to="/voting" className="py-3 px-5 block text-xl">
              Voting Page
            </NavLink>
          </li>
          <li>
            <NavLink to="/results" className="py-3 px-5 block text-xl">
              Results Page
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavMob;
