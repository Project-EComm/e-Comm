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
import PrivateRoute from "./component/layout/Routes/Private.js";
import MyProfile from "./pages/MyProfile.js";
import EditProfile from "./pages/EditProfile.js";
import ForgetPass from "./pages/ForgetPass.js";
import OtpEnter from "./pages/OtpEnter.js";
import ChangePassword from "./pages/ChangePassword.js";
import VerifyEmailComp from "./pages/VerifyEmailComp.js";
import AdminRoute from "./component/layout/Routes/AdminRoute.js";
import AdminDashboard from "./pages/Admin/AdminDashboard.js";
import UsersDashboard from "./pages/Admin/UsersDashboard.js";
import AdminsDashboard from "./pages/Admin/AdminsDashboard";
import Messages from "./pages/Admin/Messages";
import CreateProduct from "./pages/Admin/CreateProduct";
import UpdateProduct from "./pages/Admin/UpdateProduct";
import CreateCategory from "./pages/Admin/CreateCategory";
import DeleteCategory from "./pages/Admin/DeleteCategory";
import DeleteProduct from "./pages/Admin/DeleteProduct.js";
import UpdateCategory from "./pages/Admin/UpdateCategory.js";
import YourOrder from "./pages/YourOrder";
import PasswordChange from "./pages/PasswordChange.js";

function App() {
  const [mode, setMode] = useState("light");
  const [userMail, setuserMail] = useState("");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0B1423";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
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

        <Route
          path="/forgetPassword"
          element={<ForgetPass mode={mode} setuserMail={setuserMail} />}
        />
        <Route
          path="/otpEnter"
          element={<OtpEnter mode={mode} userMail={userMail} />}
        />
        <Route
          path="/passwordChange"
          element={<PasswordChange mode={mode} userMail={userMail} />}
        />

        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="updateprofile" element={<EditProfile mode={mode} />} />
        </Route>

        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="profile" element={<MyProfile mode={mode} />} />
        </Route>

        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route
            path="updatepassword"
            element={<PasswordChange mode={mode} />}
          />
        </Route>

        <Route path="/register" element={<Register mode={mode} />} />
        <Route path="/refundpolicy" element={<RefundPolicy mode={mode} />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="yourorder" element={<YourOrder />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />}></Route>
        </Route>

        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="users" element={<UsersDashboard />}></Route>
        </Route>

        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admins" element={<AdminsDashboard />}></Route>
        </Route>

        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="messages" element={<Messages />}></Route>
        </Route>

        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="createProduct" element={<CreateProduct />}></Route>
        </Route>

        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="updateProduct" element={<UpdateProduct />}></Route>
        </Route>

        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="deleteProduct" element={<DeleteProduct />}></Route>
        </Route>

        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="createCategory" element={<CreateCategory />}></Route>
        </Route>

        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="updateCategory" element={<UpdateCategory />}></Route>
        </Route>

        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="deleteCategory" element={<DeleteCategory />}></Route>
        </Route>

        <Route path="/cautionNotice" element={<CautionNotice mode={mode} />} />
        <Route path="/*" element={<PageNotFound mode={mode} />} />
        <Route path="/verifyEmail" element={<VerifyEmailComp mode={mode} />} />
      </Routes>
      <Footer mode={mode} />
    </>
  );
}

export default App;
