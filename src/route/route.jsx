import { Routes, Route } from "react-router-dom";
import React from "react";
import Admin from "../admin/admin";
import VotingPage from "../voting-page/voting-page";

const Router = () => {
  return (
    <Routes>
      <Route path="/admin" element={<Admin />} />
      <Route path="/voting" element={<VotingPage />} />
    </Routes>
  );
};

export default Router;
