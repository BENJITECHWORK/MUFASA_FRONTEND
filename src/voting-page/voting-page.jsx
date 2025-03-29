import React from "react";
import img from "../assets/logo.jpeg";
import "./voting.css";
import FetchCandidate from "./fetch-candidates";

const VotingPage = () => {
  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="logo">
            <img src={img} alt="logo" />
          </div>
          <div className="log-btn">
            <button>Logout</button>
          </div>
        </nav>
      </header>

      <p className="intro">
        Welcome to the {new Date().getFullYear()} Student Elections! 🎉
      </p>
      <p className="intro2">
        Choose your candidate for each position and click "Submit Vote" to
        confirm.
      </p>
      <div className="voting-chair">
        <h2>Mufasa - ChairPerson</h2>
      </div>
      <FetchCandidate propPosition={"ChairPerson"} />
      <div className="voting-vice">
        <h2>Vice ChairPerson</h2>
      </div>
      <FetchCandidate propPosition={"Vice ChairPerson"} />
      <div className="voting-opposed">
        <h2>UnOpposed</h2>
      </div>
      <FetchCandidate propPosition={"UnOpposed"} />
      <div className="submit-votes">
        <button>Submit Your Votes</button>
      </div>
      <footer className="footer-vote">
        <p>
          © {new Date().getFullYear()} Student Elections. All Rights Reserved.
          || Designed by BENJITECHWORK
        </p>
      </footer>
    </div>
  );
};

export default VotingPage;
