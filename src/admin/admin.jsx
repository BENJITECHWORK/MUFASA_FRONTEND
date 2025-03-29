import React from "react";
import "../App.css";
import NavMob from "../nav-mobile";
import Card from "./Cards";
import Aside from "./Aside";

const Admin = () => {
  return (
    <div className="App">
      <Aside />
      <div className="nav-mob">
        <NavMob />
      </div>
      <main>
        <div className="log-in-out">
          <button>Logout</button>
        </div>

        {/* Cards are going  here */}
        <Card />
      </main>
    </div>
  );
};

export default Admin;
