import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../pages/logo/403.png";

const Unauth = () => {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((preValue) => --preValue);
    }, 1000);
    count === 0 &&
      navigate("/login", {
        state: location.pathname,
      });
    return () => clearInterval(interval);
  }, [count, navigate, location]);

  const onLogIn = () => {
    navigate("/login", {
      state: location.pathname,
    });
  };

  return (
    <>
      <div className="Error403 d-flex flex-column justify-content-center align-items-center">
        <img
          src={Logo}
          alt="403"
          style={{
            width: "440px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <p>
          <button className="a" onClick={onLogIn}>
            Please, go back Login.
          </button>
        </p>
        <pre className="redirect">
          Otherwise, we will redirect to the home page in {count} seconds.
        </pre>
      </div>
    </>
  );
};
export default Unauth;
