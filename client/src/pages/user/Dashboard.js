import React from "react";

const Dashboard = (props) => {
  return (
    <>
      <h1
        style={{
          color: props.mode === "dark" ? "#a1a6a6" : "#000000",
        }}
      >
        Dashboard
      </h1>
      <p
        style={{
          color: props.mode === "dark" ? "#a1a6a6" : "#000000",
        }}
      >
        Welcome to the Dashboard
      </p>
    </>
  );
};

export default Dashboard;
