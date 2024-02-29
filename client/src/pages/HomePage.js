import React from "react";
import { MdSupportAgent } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
// import { NavLink } from "react-router-dom";
import { LuIndianRupee } from "react-icons/lu";
import { Carousel, initMDB } from "mdb-ui-kit";
import { IoIosGitCompare } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
const HomePage = (props) => {
  initMDB({ Carousel });

  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide headHome"
        data-mdb-ride="carousel"
        data-mdb-carousel-init
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-mdb-target="#carouselExampleCaptions"
            data-mdb-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-mdb-target="#carouselExampleCaptions"
            data-mdb-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-mdb-target="#carouselExampleCaptions"
            data-mdb-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div
          className="carousel-inner"
          style={{
            height: "300px",
          }}
        >
          <div className="carousel-item active">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
              className="d-block w-100"
              alt="Wild Landscape"
              style={{
                height: "300px",
              }}
            />
            <div className="carousel-caption d-none d-sm-block">
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
              className="d-block w-100"
              alt="Camera"
              style={{
                height: "300px",
              }}
            />
            <div className="carousel-caption d-none d-sm-block">
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
              className="d-block w-100"
              alt="Exotic Fruits"
              style={{
                height: "300px",
              }}
            />
            <div className="carousel-caption d-none d-sm-block">
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-mdb-target="#carouselExampleCaptions"
          data-mdb-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-mdb-target="#carouselExampleCaptions"
          data-mdb-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="section mt-5 mb-5 ps-5 pe-3 pt-3 pb-3">
        <div className="section-head">
          <h4
            className="sectionheading"
            style={{
              color: props.mode === "dark" ? "white" : "#204969",
            }}
          >
            FatURED PrODUCTs{" "}
            <hr
              className="hr-heading"
              style={{
                color: props.mode === "dark" ? "white" : "#d5e3ed",
              }}
            />
          </h4>
          <p className="seeAll">
            <a href="!#">
              See All Deals <i className="fas fa-angle-right"></i>
            </a>
          </p>
        </div>
        <div className="grid-container">
          <div
            className={`card border-${
              props.mode === "dark" ? "white" : "black"
            } mb-3`}
            style={{
              maxWidth: "18rem",
              color: props.mode === "dark" ? "white" : "black",
              backgroundColor: "transparent",
              borderRadius: "0px",
              border: "1px solid black",
            }}
          >
            <div
              className="card-body text-success item"
              style={{
                backgroundImage:
                  "url(https://www.nike.ae/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw722640a1/nk/d33/3/9/6/9/4/d3339694_68fc_4119_b1b9_bd9d5b287f59.png?sw=1040&sh=1040&sm=fit)",
                height: 350,
                backgroundSize: "contain",
                minWidth: 250,
              }}
            >
              <div className="item-desc discription">
                <div className="btn-card">
                  <button className="cardBtn">Add to Cart</button>
                </div>
                <div className="addIcon mt-1">
                  <div className="cardBtn p-2">
                    <IoIosGitCompare />
                  </div>
                  <div className="cardBtn p-2 ms-1">
                    <FaHeart />
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer bg-transparent priceFooter">
              <div className="pName">Nike Alphafly 2</div>
              <div className="price text-danger">
                <LuIndianRupee /> 33,857.06
              </div>
            </div>
          </div>
          <div
            className={`card border-${
              props.mode === "dark" ? "white" : "black"
            } mb-3`}
            style={{
              maxWidth: "18rem",
              color: props.mode === "dark" ? "white" : "black",
              backgroundColor: "transparent",
              borderRadius: "0px",
              border: "1px solid black",
            }}
          >
            <div
              className="card-body text-success item"
              style={{
                backgroundImage:
                  "url(https://www.nike.ae/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw722640a1/nk/d33/3/9/6/9/4/d3339694_68fc_4119_b1b9_bd9d5b287f59.png?sw=1040&sh=1040&sm=fit)",
                height: 350,
                backgroundSize: "contain",
                minWidth: 250,
              }}
            >
              <div className="item-desc discription">
                <div className="btn-card">
                  <button className="cardBtn">Add to Cart</button>
                </div>
                <div className="addIcon mt-1">
                  <div className="cardBtn p-2">
                    <IoIosGitCompare />
                  </div>
                  <div className="cardBtn p-2 ms-1">
                    <FaHeart />
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer bg-transparent priceFooter">
              <div className="pName">Nike Alphafly 2</div>
              <div className="price text-danger">
                <LuIndianRupee /> 33,857.06
              </div>
            </div>
          </div>
          <div
            className={`card border-${
              props.mode === "dark" ? "white" : "black"
            } mb-3`}
            style={{
              maxWidth: "18rem",
              color: props.mode === "dark" ? "white" : "black",
              backgroundColor: "transparent",
              borderRadius: "0px",
              border: "1px solid black",
            }}
          >
            <div
              className="card-body text-success item"
              style={{
                backgroundImage:
                  "url(https://www.nike.ae/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw722640a1/nk/d33/3/9/6/9/4/d3339694_68fc_4119_b1b9_bd9d5b287f59.png?sw=1040&sh=1040&sm=fit)",
                height: 350,
                backgroundSize: "contain",
                minWidth: 250,
              }}
            >
              <div className="item-desc discription">
                <div className="btn-card">
                  <button className="cardBtn">Add to Cart</button>
                </div>
                <div className="addIcon mt-1">
                  <div className="cardBtn p-2">
                    <IoIosGitCompare />
                  </div>
                  <div className="cardBtn p-2 ms-1">
                    <FaHeart />
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer bg-transparent priceFooter">
              <div className="pName">Nike Alphafly 2</div>
              <div className="price text-danger">
                <LuIndianRupee /> 33,857.06
              </div>
            </div>
          </div>
          <div
            className={`card border-${
              props.mode === "dark" ? "white" : "black"
            } mb-3`}
            style={{
              maxWidth: "18rem",
              color: props.mode === "dark" ? "white" : "black",
              backgroundColor: "transparent",
              borderRadius: "0px",
              border: "1px solid black",
            }}
          >
            <div
              className="card-body text-success item"
              style={{
                backgroundImage:
                  "url(https://www.nike.ae/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw722640a1/nk/d33/3/9/6/9/4/d3339694_68fc_4119_b1b9_bd9d5b287f59.png?sw=1040&sh=1040&sm=fit)",
                height: 350,
                backgroundSize: "contain",
                minWidth: 250,
              }}
            >
              <div className="item-desc discription">
                <div className="btn-card">
                  <button className="cardBtn">Add to Cart</button>
                </div>
                <div className="addIcon mt-1">
                  <div className="cardBtn p-2">
                    <IoIosGitCompare />
                  </div>
                  <div className="cardBtn p-2 ms-1">
                    <FaHeart />
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer bg-transparent priceFooter">
              <div className="pName">Nike Alphafly 2</div>
              <div className="price text-danger">
                <LuIndianRupee /> 33,857.06
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services">
        <div className="service-item">
          <MdSupportAgent className="img" />
          <p>SUPPORT 24/7</p>
          <h2>We support online 24 hours a day</h2>
        </div>
        <div className="service-item">
          <MdAccessTime className="img" />
          <p>FREE RETURN</p>
          <h2>7 days money back guarantee!</h2>
        </div>
        <div className="service-item">
          <FaShippingFast className="img" />
          <p>Free and Fast Shipping</p>
          <h2>Free shipping on all orders T&amp;C</h2>
        </div>
      </div>
    </>
  );
};

export default HomePage;
