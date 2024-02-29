import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import Policy from "./pages/Policy.js";
import RefundPolicy from "./pages/RefundPolicy.js";
import PageNotFound from "./pages/PageNotFound.js";
import CautionNotice from "./pages/CautionNotice";
import Register from "./pages/Register.js";
import Login from "./pages/Login.js";
import React, { useState } from "react";
import Header from "./component/layout/Header.js";
import Footer from "./component/layout/Footer.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/user/Dashboard.js";
import PrivateRoute from "./component/layout/Routes/Private.js";
import MyProfile from "./pages/MyProfile.js";
import EditProfile from "./pages/EditProfile.js";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0B1423";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#d5e3ed";
    }
  };

  return (
    <>
      <Header toggleMode={toggleMode} mode={mode} />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage mode={mode} />} />
        <Route path="/policy" element={<Policy mode={mode} />} />
        <Route path="/login" element={<Login mode={mode} />} />
        <Route path="/profile" element={<MyProfile mode={mode} />} />
        <Route path="/updateprofile" element={<EditProfile mode={mode} />} />
        <Route path="/register" element={<Register mode={mode} />} />
        <Route path="/refundpolicy" element={<RefundPolicy mode={mode} />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="" element={<Dashboard />} />
        </Route>
        <Route path="/cautionNotice" element={<CautionNotice mode={mode} />} />
        <Route path="/*" element={<PageNotFound mode={mode} />} />
      </Routes>
      <Footer mode={mode} />
    </>
  );
}

export default App;
