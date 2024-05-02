import React, { useState, useEffect } from "react";
import { useAuth } from "../context/auth.js";
import { toast, Zoom } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
const YourOrder = (props) => {
  const [auth, setauth] = useAuth();
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  // Check if storedUser exists before accessing its properties

  const handleLogout = () => {
    setauth({
      ...auth,
      user: null,
      tocken: "",
    });
    localStorage.removeItem("auth");
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

  const getOrders = async () => {
    try {
      const { data } = await axios.get("/api/v1/auth/orders");
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);

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
                  border: "1px solid black",
                }}
              >
                <div className="card-body card-bodyProfile">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src={`https://avatar.iran.liara.run/username?username=${auth.user?.first_name}+${auth.user?.last_name}&background=random`}
                      alt="Admin"
                      className="rounded-circle"
                      width={150}
                    />
                    <div className="mt-3">
                      <h4>
                        {auth?.user?.first_name === "" ||
                        auth?.user?.last_name === ""
                          ? "Not Provided"
                          : auth?.user?.first_name +
                            " " +
                            auth?.user?.last_name}
                      </h4>
                      <p className="font-size-sm">
                        {auth?.user?.address === ""
                          ? "Not Provided"
                          : auth?.user?.address}
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
                    border: "1px solid black",
                  }}
                >
                  <NavLink to="/dashboard/profile">My Account</NavLink>
                  <NavLink to="/dashboard/updatepassword">
                    Change Password
                  </NavLink>
                  <NavLink to="/dashboard/yourorder">My Orders</NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <h1 className="text-center">All Orders</h1>
              {orders?.map((o, i) => {
                return (
                  <div className="border shadow">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Status</th>
                          <th scope="col">Buyer</th>
                          <th scope="col"> date</th>
                          <th scope="col">Payment</th>
                          <th scope="col">Quantity</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{i + 1}</td>
                          <td>{o?.status}</td>
                          <td>{o?.buyer?.name}</td>
                          <td>{moment(o?.createAt).fromNow()}</td>
                          <td>{o?.payment.success ? "Success" : "Failed"}</td>
                          <td>{o?.products?.length}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="container">
                      {o?.products?.map((p, i) => (
                        <div className="row mb-2 p-3 card flex-row" key={p._id}>
                          <div className="col-md-4">
                            <img
                              src={`/api/v1/product/product-photo/${p._id}`}
                              className="card-img-top"
                              alt={p.name}
                              width="100px"
                              height={"100px"}
                            />
                          </div>
                          <div className="col-md-8">
                            <p>{p.name}</p>
                            <p>{p.description.substring(0, 30)}</p>
                            <p>Price : {p.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default YourOrder;
