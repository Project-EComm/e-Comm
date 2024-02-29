import React from "react";
import { useAuth } from "../context/auth.js";
import { NavLink, useNavigate } from "react-router-dom";
import { toast, Zoom } from "react-toastify";

const MyProfile = (props) => {
  const [auth, setauth] = useAuth();
  const navigate = useNavigate();
  const storedUser = auth ? auth.user : null;

  // Check if storedUser exists before accessing its properties
  const {
    first_name,
    last_name,
    email,
    countrycode,
    phoneNumber,
    address,
    pincode,
    city,
  } = storedUser || {};

  const handleLogout = () => {
    setauth({
      ...auth,
      user: null,
      tocken: "",
    });
    navigate("/login");
    toast.success("Logout Successfully", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Zoom,
    });
  };

  return (
    <>
      <div className="content">
        <div className="main-body">
          {/* Breadcrumb */}
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div
                className="card"
                style={{
                  color: props.mode === "dark" ? "white" : "#000000",
                  backgroundColor: props.mode === "light" ? "white" : "#0B1423",
                  border: `1px solid ${
                    props.mode === "light" ? "#0B1423" : "white"
                  }`,
                }}
              >
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src={"https://bootdey.com/img/Content/avatar/avatar7.png"}
                      alt="Admin"
                      className="rounded-circle"
                      width={150}
                    />
                    <div className="mt-3">
                      <h4>
                        {first_name === "" || last_name === ""
                          ? "Not Provided"
                          : first_name + " " + last_name}
                      </h4>
                      <p
                        className="font-size-sm"
                        style={{
                          color: props.mode === "dark" ? "#a1a6a6" : "#000000",
                        }}
                      >
                        {address === "" ? "Not Provided" : address}
                      </p>
                      <button
                        className="btn btn-outline-warning m-1"
                        style={{
                          color: "#dc3545",
                        }}
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                      <button className="btn btn-danger text-dark m-1">
                        Delete Account
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mt-4">
                <div
                  className="sidebar"
                  style={{
                    color: props.mode === "dark" ? "white" : "#000000",
                    backgroundColor:
                      props.mode === "light" ? "white" : "#0B1423",
                    border: `1px solid ${
                      props.mode === "light" ? "#0B1423" : "white"
                    }`,
                  }}
                >
                  <NavLink
                    className="active"
                    to="/profile"
                    style={{
                      color: props.mode === "dark" ? "white" : "#000000",
                    }}
                  >
                    My Account
                  </NavLink>
                  <NavLink
                    to="/chnagepassword"
                    style={{
                      color: props.mode === "dark" ? "white" : "#000000",
                    }}
                  >
                    Change Password
                  </NavLink>
                  <NavLink
                    to="/myorder"
                    style={{
                      color: props.mode === "dark" ? "white" : "#000000",
                    }}
                  >
                    My Orders
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div
                className="card mb-3"
                style={{
                  color: props.mode === "dark" ? "white" : "#000000",
                  backgroundColor: props.mode === "light" ? "white" : "#0B1423",
                  border: `1px solid ${
                    props.mode === "light" ? "#0B1423" : "white"
                  }`,
                }}
              >
                <div className="card-body">
                  <p className="card-heading">My Account</p>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">First Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {first_name === "" ? "Not Provided" : first_name}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Last Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {last_name === "" ? "Not Provided" : last_name}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">{email}</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Mobile</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {countrycode || phoneNumber === ""
                        ? "Not Provided"
                        : countrycode + " " + phoneNumber}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Address</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {" "}
                      {address === "" ? "Not Provided" : address}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Pin Code</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {pincode === "" ? "Not Provided" : pincode}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Town/City</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {city === "" ? "Not Provided" : city}
                    </div>
                  </div>
                  <hr />
                  <div className="row text-center">
                    <div className="col-sm-12">
                      <NavLink
                        className="btn btn-info btn-edit"
                        to="/updateprofile"
                      >
                        Edit
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
