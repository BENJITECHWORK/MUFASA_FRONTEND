import React from "react";
import img from "../assets/logo.jpeg";
import { NavLink } from "react-router-dom";
const Aside = () => {
  return (
    <div>
      <aside className="App-header">
        <div className="admin-logo">
          <img src={img} alt="Mufasa logo" />
          <h4>Admin@</h4>
        </div>
        <nav>
          <h5>DASHBOARD</h5>
          <p>Go to different pages</p>
          <ul className="nav-links">
            <li>
              <NavLink className="nav-l" to={"/voting"}>
                {" "}
                Voting Page
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-l" to={"/results"}>
                Result Page
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="admit-footer">
          <p>© {new Date().getFullYear()} Mufasa Voting System</p>
        </div>
      </aside>
    </div>
  );
};

export default Aside;
