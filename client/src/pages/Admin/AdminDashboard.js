import React, { useState } from "react";
import { useAuth } from "../../context/auth";
import { NavLink } from "react-router-dom";

const AdminDashboard = () => {
  const [auth] = useAuth();

  return (
    <>
      <div className="content">
        <div className="main-body">
          {/* Breadcrumb */}
          <div className="row gutters-sm">
            <div className="col-md-4 mb-2">
              <div
                className="card"
                style={{
                  border: "1px solid black`,",
                }}
              >
                <div className="card-body card-bodyProfile">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src={"https://bootdey.com/img/Content/avatar/avatar7.png"}
                      alt="Admin"
                      className="rounded-circle"
                      width={80}
                    />
                    <div className="mt-2">
                      <h4>
                        {auth?.user?.first_name + " " + auth?.user?.last_name}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mt-4 col-md-8">
              <div
                className="sidebar"
                style={{
                  border: "1px solid black",
                }}
              >
                <NavLink to="/dashboard/admin">DashBoard</NavLink>
                <NavLink to="/dashboard/users">Users</NavLink>
                <NavLink to="/dashboard/admins">Admins</NavLink>

                <NavLink to="/dashboard/product">Product</NavLink>
                <NavLink to="/dashboard/createCategory">Category</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
