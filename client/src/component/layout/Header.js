import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "./apkaBazzar.png";
import { FaRegMoon } from "react-icons/fa";
import { IoPerson, IoSunnyOutline } from "react-icons/io5";
import { useAuth } from "../../context/auth.js";
import { toast, Zoom } from "react-toastify";
import { CgProfile } from "react-icons/cg";
import { FiEdit } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { TfiHelpAlt } from "react-icons/tfi";
import { FaSignInAlt } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { CiLogin } from "react-icons/ci";
import { BiSolidOffer } from "react-icons/bi";
import { MdCurrencyExchange } from "react-icons/md";
import { MdLanguage } from "react-icons/md";
import { IoIosClose } from "react-icons/io";

function Header(props) {
  const [auth, setauth] = useAuth();

  const [isMenuActive, setMenuActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const name = auth.user
    ? `${auth.user.first_name} ${auth.user.last_name}`
    : "";

  const menuToggle = () => {
    setMenuActive(!isMenuActive);
  };

  const handleLogout = () => {
    setauth({
      ...auth,
      user: null,
      tocken: "",
    });
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
      {/*Main Navigation*/}
      <header>
        {/* Jumbotron */}
        <div
          className="p-1 text-center"
          style={{
            color: props.mode === "light" ? "#204969" : "#0B1423",
            backgroundColor: props.mode === "light" ? "#D3D3D3" : "#0B1423",
            borderBottom: `1px solid ${
              props.mode === "light" ? "#204969" : "white"
            }`,
          }}
        >
          <div className="container">
            <div className="row">
              <div className="d-flex justify-content-center d-none justify-content-md-start mb-md-0 col d-md-flex">
                <NavLink to="#!" className="ms-md-2 top-header">
                  <BiSolidOffer /> Get special offers from big brands now!
                </NavLink>
              </div>
              <div className="d-flex justify-content-center justify-content-md-end mb-md-0 col">
                <div className="dropdown">
                  <NavLink
                    className="dropbtn"
                    style={{
                      color: props.mode === "dark" ? "white" : "#204969",
                      fontSize: "12px",
                    }}
                  >
                    <MdCurrencyExchange /> Currency
                  </NavLink>
                  <div className="dropdown-content">
                    <NavLink
                      to="#!"
                      style={{
                        color: props.mode === "dark" ? "white" : "#204969",
                        backgroundColor:
                          props.mode === "light" ? "#D3D3D3" : "#0B1423",
                        borderBottom: `1px solid ${
                          props.mode === "light" ? "#204969" : "white"
                        }`,
                        fontSize: "12px",
                      }}
                    >
                      Link 1
                    </NavLink>
                    <NavLink
                      to="#!"
                      style={{
                        color: props.mode === "dark" ? "white" : "#204969",
                        backgroundColor:
                          props.mode === "light" ? "#D3D3D3" : "#0B1423",
                        borderBottom: `1px solid ${
                          props.mode === "light" ? "#204969" : "white"
                        }`,
                        fontSize: "12px",
                      }}
                    >
                      Link 2
                    </NavLink>
                    <NavLink
                      to="#!"
                      style={{
                        color: props.mode === "dark" ? "white" : "#204969",
                        backgroundColor:
                          props.mode === "light" ? "#D3D3D3" : "#0B1423",
                        borderBottom: `1px solid ${
                          props.mode === "light" ? "#204969" : "white"
                        }`,
                        fontSize: "12px",
                      }}
                    >
                      Link 3
                    </NavLink>
                  </div>
                </div>
                <div className="dropdown ms-3">
                  <NavLink
                    className="dropbtn"
                    style={{
                      color: props.mode === "dark" ? "white" : "#204969",
                      fontSize: "12px",
                    }}
                  >
                    <MdLanguage /> Language
                  </NavLink>
                  <div className="dropdown-content">
                    <NavLink
                      to="#!"
                      style={{
                        color: props.mode === "dark" ? "white" : "#204969",
                        backgroundColor:
                          props.mode === "light" ? "#D3D3D3" : "#0B1423",
                        borderBottom: `1px solid ${
                          props.mode === "light" ? "#204969" : "white"
                        }`,
                        fontSize: "12px",
                      }}
                    >
                      Link 1
                    </NavLink>
                    <NavLink
                      to="#!"
                      style={{
                        color: props.mode === "dark" ? "white" : "#204969",
                        backgroundColor:
                          props.mode === "light" ? "#D3D3D3" : "#0B1423",
                        borderBottom: `1px solid ${
                          props.mode === "light" ? "#204969" : "white"
                        }`,
                        fontSize: "12px",
                      }}
                    >
                      Link 2
                    </NavLink>
                    <NavLink
                      to="#!"
                      style={{
                        color: props.mode === "dark" ? "white" : "#204969",
                        backgroundColor:
                          props.mode === "light" ? "#D3D3D3" : "#0B1423",
                        borderBottom: `1px solid ${
                          props.mode === "light" ? "#204969" : "white"
                        }`,
                        fontSize: "12px",
                      }}
                    >
                      Link 3
                    </NavLink>
                  </div>
                </div>
                <button
                  className="switch"
                  id="switch"
                  onClick={props.toggleMode}
                  style={{
                    backgroundColor:
                      props.mode === "light" ? "#D3D3D3" : "#0B1423",
                  }}
                >
                  {props.mode === "light" ? (
                    <IoSunnyOutline
                      className={`switch-light`}
                      style={{
                        width: "30px",
                        height: "30px",
                        color: "#D14009",
                      }}
                    />
                  ) : (
                    <FaRegMoon
                      className={`switch-dark`}
                      style={{
                        color: "#dcdcdc",
                        width: "20px",
                        height: "20px",
                      }}
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Jumbotron */}
        {/* Jumbotron */}
        <div
          className="p-3 text-center"
          style={{
            color: props.mode === "dark" ? "white" : "#204969",
            backgroundColor: props.mode === "light" ? "#d5e3ed" : "#0B1423",
            borderBottom: `1px solid ${
              props.mode === "light" ? "#0B1423" : "white"
            }`,
          }}
        >
          <div className="container">
            <div className="row">
              {/* Left elements */}
              <div className="d-flex justify-content-center justify-content-md-start  mb-md-0 col">
                <NavLink
                  className={`navbar-brand brand`}
                  to="/"
                  style={{
                    color: props.mode === "dark" ? "white" : "#204969",
                  }}
                >
                  <img src={logo} alt="logo" style={{ width: "40px" }} />{" "}
                  apkaBazzar
                </NavLink>
              </div>
              {/* Left elements */}
              {/* Center elements */}
              <div className="d-flex input-group w-auto my-auto mb-md-0 justify-content-center col">
                <ul className="navbar-nav flex-row">
                  <li className="nav-item me-lg-0 d-md-inline-block">
                    <NavLink className="nav-link" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item  me-lg-0 d-md-inline-block ms-2">
                    <NavLink className="nav-link" to="#!">
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item  me-lg-0 d-md-inline-block ms-2">
                    <NavLink className="nav-link" to="#!">
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
              {/* Center elements */}
              {/* Right elements */}
              <div className="d-flex justify-content-center justify-content-md-end align-items-center col">
                <div className="d-flex">
                  {/* Cart */}
                  <NavLink className="text-reset me-3" to="#!">
                    <span>
                      <i className="fas fa-shopping-cart" />
                    </span>
                    <span className="badge rounded-pill badge-notification bg-danger">
                      1
                    </span>
                  </NavLink>
                  <NavLink className="text-reset me-3" to="#!">
                    <span>
                      <i className="fas fa-heart" />
                    </span>
                    <span className="badge rounded-pill badge-notification bg-danger">
                      1
                    </span>
                  </NavLink>
                </div>
              </div>
              {/* Right elements */}
            </div>
          </div>
        </div>
        {/* Navbar */}
        <nav
          className="navbar navbar-expand-lg"
          style={{
            color: props.mode === "dark" ? "white" : "#204969",
            backgroundColor: props.mode === "light" ? "#d5e3ed" : "#0B1423",
            borderBottom: `1px solid ${
              props.mode === "light" ? "#0B1423" : "white"
            }`,
          }}
        >
          <div className="container pageNav ps-5 pe-5">
            <div className="Categories">
              <NavLink
                className="nav-link btn shadow-0"
                role="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasLeft"
                aria-controls="offcanvasLeft"
              >
                <i className="fas fa-bars me-1" />
                <span>Categories</span>
              </NavLink>
              <div
                className="offcanvas offcanvas-start sidebar"
                tabIndex={-1}
                id="offcanvasLeft"
                aria-labelledby="offcanvasLeftLabel"
              >
                <div
                  className="offcanvas-header"
                  style={{
                    color: props.mode === "dark" ? "white" : "#204969",
                    backgroundColor:
                      props.mode === "light" ? "#d5e3ed" : "#0B1423",
                    borderBottom: `1px solid ${
                      props.mode === "light" ? "#0B1423" : "white"
                    }`,
                  }}
                >
                  <h5 id="offcanvasLeftLabel">Offcanvas Left</h5>
                  <button
                    type="button"
                    data-bs-dismiss="offcanvas"
                    style={{
                      color: props.mode === "dark" ? "white" : "#204969",
                      backgroundColor:
                        props.mode === "light" ? "#d5e3ed" : "#0B1423",
                      border: "none",
                    }}
                  >
                    <IoIosClose />
                  </button>
                </div>
                <div
                  className="offcanvas-body"
                  style={{
                    color: props.mode === "dark" ? "white" : "#204969",
                    backgroundColor:
                      props.mode === "light" ? "#d5e3ed" : "#0B1423",
                  }}
                />
              </div>
            </div>
            <div className="col-md-4 d-none d-sm-flex">
              <form className="d-flex input-group w-100 my-auto mb-md-0">
                <input
                  autoComplete="off"
                  type="search"
                  className="form-control rounded"
                  placeholder="Search"
                  style={{
                    color: props.mode === "dark" ? "white" : "#204969",
                    backgroundColor:
                      props.mode === "light" ? "#d5e3ed" : "#0B1423",
                  }}
                />
                <span className="input-group-text border-0 d-lg-flex">
                  <i
                    className="fas fa-search"
                    style={{
                      color: props.mode === "dark" ? "white" : "#204969",
                    }}
                  />
                </span>
              </form>
            </div>
            <div className="justify-content-center">
              {!auth.user ? (
                <>
                  <div
                    className="dropdown"
                    style={{
                      color: props.mode === "dark" ? "white" : "#204969",
                      borderBottom: `1px solid ${
                        props.mode === "light" ? "#0B1423" : "white"
                      }`,
                    }}
                  >
                    <NavLink
                      className="dropbtn"
                      style={{
                        color: props.mode === "dark" ? "white" : "#204969",
                      }}
                    >
                      <IoPerson /> Login/SignUp
                    </NavLink>
                    <div className="dropdown-content">
                      <NavLink
                        to="/login"
                        style={{
                          color: props.mode === "dark" ? "white" : "#204969",
                          backgroundColor:
                            props.mode === "light" ? "#d5e3ed" : "#0B1423",
                          borderBottom: `1px solid ${
                            props.mode === "light" ? "#0B1423" : "white"
                          }`,
                        }}
                      >
                        <CiLogin />
                        Login
                      </NavLink>
                      <NavLink
                        to="/register"
                        style={{
                          color: props.mode === "dark" ? "white" : "#204969",
                          backgroundColor:
                            props.mode === "light" ? "#d5e3ed" : "#0B1423",
                        }}
                      >
                        <FaSignInAlt />
                        SignUp
                      </NavLink>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="action">
                    <div className="profile" onClick={menuToggle}>
                      <img
                        src={
                          "https://bootdey.com/img/Content/avatar/avatar7.png"
                        }
                        alt="Profile Avatar"
                      />
                    </div>
                    <div
                      className={`menu ${isMenuActive ? "active" : ""}`}
                      style={{
                        color: props.mode === "dark" ? "white" : "#204969",
                        backgroundColor:
                          props.mode === "light" ? "#d5e3ed" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#0B1423" : "white",
                      }}
                    >
                      <h3
                        style={{
                          color: props.mode === "dark" ? "white" : "#000000",
                        }}
                      >
                        {name}
                        <br />
                        <div
                          className="logout"
                          style={{
                            border: "1px solid",
                            borderColor: isHovered
                              ? props.mode === "light"
                                ? "white"
                                : "#0B1423"
                              : props.mode === "light"
                              ? "#0B1423"
                              : "white",
                            transition: "border-color 0.3s ease",
                            cursor: "pointer",
                          }}
                          onMouseEnter={() => setIsHovered(true)}
                          onMouseLeave={() => setIsHovered(false)}
                        >
                          <NavLink
                            to="/login"
                            onClick={handleLogout}
                            style={{
                              textDecoration: "none",
                              color:
                                props.mode === "dark" ? "white" : "#000000",
                              paddingTop: "10px",
                            }}
                          >
                            <CiLogout /> Logout
                          </NavLink>
                        </div>
                      </h3>
                      <ul>
                        <li>
                          <NavLink
                            to="/profile"
                            style={{
                              color:
                                props.mode === "dark" ? "white" : "#204969",
                            }}
                          >
                            <CgProfile
                              style={{
                                width: "20px",
                                height: "20px",
                              }}
                            />{" "}
                            My profile
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/updateprofile"
                            style={{
                              color:
                                props.mode === "dark" ? "white" : "#204969",
                            }}
                          >
                            <FiEdit
                              style={{
                                width: "20px",
                                height: "20px",
                              }}
                            />
                            Edit profile
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/!#"
                            style={{
                              color:
                                props.mode === "dark" ? "white" : "#204969",
                            }}
                          >
                            <IoSettingsOutline
                              style={{
                                width: "20px",
                                height: "20px",
                              }}
                            />{" "}
                            Setting
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/!#"
                            style={{
                              color:
                                props.mode === "dark" ? "white" : "#204969",
                            }}
                          >
                            <TfiHelpAlt
                              style={{
                                width: "20px",
                                height: "20px",
                              }}
                            />{" "}
                            Help
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
