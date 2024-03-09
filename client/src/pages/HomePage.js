import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
import { LuIndianRupee } from "react-icons/lu";
import { IoIosGitCompare } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { NavLink } from "react-router-dom";

const HomePage = (props) => {
  const [perPage, setPerPage] = useState();
  const [Product, setProduct] = useState();

  useEffect(() => {
    const screenWidth = window.innerWidth;

    if (screenWidth > -1200) {
      setPerPage(6);
    } else if (screenWidth >= 992 && screenWidth < 1200) {
      setPerPage(4);
    } else if (screenWidth >= 768 && screenWidth < 992) {
      setPerPage(4);
    } else if (screenWidth >= 580 && screenWidth < 768) {
      setPerPage(3);
    } else {
      setPerPage(1);
    }
  }, []);

  return (
    <>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval={10000}>
            <img
              src="https://www.soccercleats101.com/wp-content/uploads/2010/11/CR7-Safari-Available.jpg"
              className="d-block w-100"
              alt="..."
              style={{
                height: "390px",
              }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval={2000}>
            <img
              src="https://sportskhabri.com/wp-content/uploads/2023/05/Yuvraj-Singh-Sunil-Chhetri-Harmanpreet-Kaur-and-Virat-Kohli-share-their-stories-in-latest-PUMA-docu-series.jpg"
              className="d-block w-100"
              alt="..."
              style={{
                height: "390px",
              }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/90caa632860647.56968dfa71918.jpg"
              className="d-block w-100"
              alt="..."
              style={{
                height: "390px",
              }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <div
            style={{
              backgroundColor: "white",
              border: "1px solid white",
              borderRadius: "100%",
              padding: "1px",
            }}
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
          </div>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <div
            style={{
              backgroundColor: "white",
              border: "1px solid white",
              borderRadius: "100%",
              padding: "1px",
            }}
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
          </div>
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
            FeatURED PrODUCTs{" "}
            <hr
              className="hr-heading"
              style={{
                color: props.mode === "dark" ? "white" : "#ab7418",
              }}
            />
          </h4>
          <div className="categoriesFeature ms-auto d-flex d-md-none">
            <ul className="featurUl">
              <li className="featurLi">
                {" "}
                <NavLink href="/seeAllFeatured" className="seeAllBtn">
                  View All
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="categoriesFeature d-none d-md-flex ms-auto">
            <ul className="featurUl">
              <li className="featurLi">
                <NavLink
                  style={{
                    color: props.mode === "dark" ? "white" : "black",
                  }}
                  onClick={() => setProduct("Faishon")}
                >
                  Faishon
                </NavLink>
              </li>
              <li className="featurLi">
                <NavLink
                  style={{
                    color: props.mode === "dark" ? "white" : "black",
                  }}
                  onClick={() => setProduct("Beauty")}
                >
                  Beauty
                </NavLink>
              </li>
              <li className="featurLi">
                <NavLink
                  style={{
                    color: props.mode === "dark" ? "white" : "black",
                  }}
                  onClick={() => setProduct("Home & Kitchen")}
                >
                  Home & Kitchen
                </NavLink>
              </li>
              <li className="featurLi">
                <NavLink
                  style={{
                    color: props.mode === "dark" ? "white" : "black",
                  }}
                  onClick={() => setProduct("Electronics")}
                >
                  Electronics
                </NavLink>
              </li>
              <li className="featurLi">
                <NavLink
                  style={{
                    color: props.mode === "dark" ? "white" : "black",
                  }}
                  onClick={() => setProduct("Furniture")}
                >
                  Furniture
                </NavLink>
              </li>
              <li className="featurLi">
                {" "}
                <NavLink href="/seeAllFeatured" className="seeAllBtn">
                  View All
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <Splide
          options={{
            focus: "center",
            perPage: { perPage },
            fixedWidth: "fit-content",
            padding: "5rem",
            autoplay: true,
            pagination: false,
          }}
          aria-label="Featured"
        >
          {Product === "Faishon" ? (
            <>
              <SplideSlide>
                <div
                  className={`card cardItem border-${
                    props.mode === "dark" ? "white" : "black"
                  } mb-3`}
                  style={{
                    width: "300px",
                    color: props.mode === "dark" ? "white" : "black",
                    backgroundColor: "transparent",
                  }}
                >
                  <div
                    className="card-body text-success item"
                    style={{
                      backgroundImage:
                        "url(https://www.nike.ae/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw722640a1/nk/d33/3/9/6/9/4/d3339694_68fc_4119_b1b9_bd9d5b287f59.png?sw=1040&sh=1040&sm=fit)",
                      height: "300px",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundColor: "white",
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
                  <div className="card-footer priceFooter bg-light text-dark">
                    <div className="pName">Nike Alphafly 2</div>
                    <div className="price ">
                      <LuIndianRupee />
                      33,857.06
                    </div>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div
                  className={`card cardItem border-${
                    props.mode === "dark" ? "white" : "black"
                  } mb-3`}
                  style={{
                    width: "300px",
                    color: props.mode === "dark" ? "white" : "black",
                    backgroundColor: "transparent",
                  }}
                >
                  <div
                    className="card-body text-success item"
                    style={{
                      backgroundImage:
                        "url(https://www.nike.ae/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw438dba48/nk/c80/8/5/6/9/b/c808569b_f317_49fa_8a81_be9badb83ead.png?sw=1040&sh=1040&sm=fit)",
                      height: "300px",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundColor: "white",
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
                  <div className="card-footer priceFooter bg-light text-dark">
                    <div className="pName">Nike Invincible 3</div>
                    <div className="price ">
                      <LuIndianRupee />
                      16995.00
                    </div>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div
                  className={`card cardItem border-${
                    props.mode === "dark" ? "white" : "black"
                  } mb-3`}
                  style={{
                    width: "300px",
                    color: props.mode === "dark" ? "white" : "black",
                    backgroundColor: "transparent",
                  }}
                >
                  <div
                    className="card-body text-success item"
                    style={{
                      backgroundImage:
                        "url(https://www.nike.ae/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw6e4e27ce/nk/e2c/c/a/7/1/8/e2cca718_93a7_41a5_af5d_5af4c4b89527.png?sw=1040&sh=1040&sm=fit)",
                      height: "300px",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundColor: "white",
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
                  <div className="card-footer priceFooter bg-light text-dark bg-light text-dark">
                    <div className="pName">Jordan Stay Loyal 3</div>
                    <div className="price ">
                      <LuIndianRupee />
                      10,295.00
                    </div>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div
                  className={`card cardItem border-${
                    props.mode === "dark" ? "white" : "black"
                  } mb-3`}
                  style={{
                    width: "300px",
                    color: props.mode === "dark" ? "white" : "black",
                    backgroundColor: "transparent",
                  }}
                >
                  <div
                    className="card-body text-success item"
                    style={{
                      backgroundImage:
                        "url(https://www.nike.ae/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw16a9e676/nk/cc7/1/4/4/8/4/cc714484_c7ba_43d9_98db_b760a07cf241.png?sw=1040&sh=1040&sm=fit)",
                      height: "300px",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundColor: "white",
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
                  <div className="card-footer priceFooter bg-light text-dark">
                    <div className="pName">Nike Air Force 1 '07</div>
                    <div className="price ">
                      <LuIndianRupee />
                      7495.00
                    </div>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div
                  className={`card cardItem border-${
                    props.mode === "dark" ? "white" : "black"
                  } mb-3`}
                  style={{
                    width: "300px",
                    color: props.mode === "dark" ? "white" : "black",
                    backgroundColor: "transparent",
                  }}
                >
                  <div
                    className="card-body text-success item"
                    style={{
                      backgroundImage:
                        "url(https://www.nike.ae/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw68408323/nk/cc4/c/d/f/0/1/cc4cdf01_1c83_4e6c_a409_471d26a7a816.png?sw=1040&sh=1040&sm=fit)",
                      height: "300px",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundColor: "white",
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
                  <div className="card-footer priceFooter bg-light text-dark">
                    <div className="pName">Nike Mercurial Superfly 9</div>
                    <div className="price ">
                      <LuIndianRupee />
                      16,857.06
                    </div>
                  </div>
                </div>
              </SplideSlide>
            </>
          ) : Product === "Beauty" ? (
            <>
              <h1>hello</h1>
            </>
          ) : Product === "Home & Kitchen" ? (
            <>
              <h1>hello1</h1>
            </>
          ) : Product === "Electronics" ? (
            <>
              <h1>hello2</h1>
            </>
          ) : Product === "Furniture" ? (
            <>
              <h1>hello3</h1>
            </>
          ) : (
            <>
              {" "}
              <SplideSlide>
                <div
                  className={`card cardItem border-${
                    props.mode === "dark" ? "white" : "black"
                  } mb-3`}
                  style={{
                    width: "300px",
                    color: props.mode === "dark" ? "white" : "black",
                    backgroundColor: "transparent",
                  }}
                >
                  <div
                    className="card-body text-success item"
                    style={{
                      backgroundImage:
                        "url(https://www.nike.ae/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw722640a1/nk/d33/3/9/6/9/4/d3339694_68fc_4119_b1b9_bd9d5b287f59.png?sw=1040&sh=1040&sm=fit)",
                      height: "300px",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundColor: "white",
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
                  <div className="card-footer priceFooter bg-light text-dark">
                    <div className="pName">Nike Alphafly 2</div>
                    <div className="price ">
                      <LuIndianRupee />
                      33,857.06
                    </div>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div
                  className={`card cardItem border-${
                    props.mode === "dark" ? "white" : "black"
                  } mb-3`}
                  style={{
                    width: "300px",
                    color: props.mode === "dark" ? "white" : "black",
                    backgroundColor: "transparent",
                  }}
                >
                  <div
                    className="card-body text-success item"
                    style={{
                      backgroundImage:
                        "url(https://www.nike.ae/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw438dba48/nk/c80/8/5/6/9/b/c808569b_f317_49fa_8a81_be9badb83ead.png?sw=1040&sh=1040&sm=fit)",
                      height: "300px",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundColor: "white",
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
                  <div className="card-footer priceFooter bg-light text-dark">
                    <div className="pName">Nike Invincible 3</div>
                    <div className="price ">
                      <LuIndianRupee />
                      16995.00
                    </div>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div
                  className={`card cardItem border-${
                    props.mode === "dark" ? "white" : "black"
                  } mb-3`}
                  style={{
                    width: "300px",
                    color: props.mode === "dark" ? "white" : "black",
                    backgroundColor: "transparent",
                  }}
                >
                  <div
                    className="card-body text-success item"
                    style={{
                      backgroundImage:
                        "url(https://www.nike.ae/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw6e4e27ce/nk/e2c/c/a/7/1/8/e2cca718_93a7_41a5_af5d_5af4c4b89527.png?sw=1040&sh=1040&sm=fit)",
                      height: "300px",
                      backgroundColor: "white",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
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
                  <div className="card-footer priceFooter bg-light text-dark">
                    <div className="pName">Jordan Stay Loyal 3</div>
                    <div className="price ">
                      <LuIndianRupee />
                      10,295.00
                    </div>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div
                  className={`card cardItem border-${
                    props.mode === "dark" ? "white" : "black"
                  } mb-3`}
                  style={{
                    width: "300px",
                    color: props.mode === "dark" ? "white" : "black",
                    backgroundColor: "transparent",
                  }}
                >
                  <div
                    className="card-body text-success item"
                    style={{
                      backgroundImage:
                        "url(https://www.nike.ae/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw16a9e676/nk/cc7/1/4/4/8/4/cc714484_c7ba_43d9_98db_b760a07cf241.png?sw=1040&sh=1040&sm=fit)",
                      height: "300px",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundColor: "white",
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
                  <div className="card-footer priceFooter bg-light text-dark">
                    <div className="pName">Nike Air Force 1 '07</div>
                    <div className="price ">
                      <LuIndianRupee />
                      7495.00
                    </div>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div
                  className={`card cardItem border-${
                    props.mode === "dark" ? "white" : "black"
                  } mb-3`}
                  style={{
                    width: "300px",
                    color: props.mode === "dark" ? "white" : "black",
                    backgroundColor: "transparent",
                  }}
                >
                  <div
                    className="card-body text-success item"
                    style={{
                      backgroundImage:
                        "url(https://www.nike.ae/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw68408323/nk/cc4/c/d/f/0/1/cc4cdf01_1c83_4e6c_a409_471d26a7a816.png?sw=1040&sh=1040&sm=fit)",
                      height: "300px",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundColor: "white",
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
                  <div className="card-footer priceFooter bg-light text-dark">
                    <div className="pName">Nike Mercurial Superfly 9</div>
                    <div className="price ">
                      <LuIndianRupee />
                      16,857.06
                    </div>
                  </div>
                </div>
              </SplideSlide>
            </>
          )}
        </Splide>
      </div>

      {/* featured product end */}

      {/* discount banner */}

      <div className="container text-center">
        <img
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1708945475_home_page_1240x209.jpg?im=Resize=(1240,150)"
          alt="img"
          className="img-fluid"
          style={{
            width: "100%",
          }}
        />
      </div>

      {/* banner end */}

      {/* New Arrivals */}
      <div className="section mt-5 mb-5 ps-5 pe-3 pt-3 pb-3">
        <div className="section-head">
          <h4
            className="sectionheading"
            style={{
              color: props.mode === "dark" ? "white" : "#204969",
            }}
          >
            New Arrivals{" "}
            <hr
              className="hr-heading"
              style={{
                color: props.mode === "dark" ? "white" : "#ab7418",
              }}
            />
          </h4>
          <div className="categoriesFeature ms-auto d-flex d-md-none">
            <ul className="featurUl">
              <li className="featurLi">
                {" "}
                <NavLink href="/seeAllFeatured" className="seeAllBtn">
                  View All
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="categoriesFeature d-none d-md-flex ms-auto">
            <ul className="featurUl">
              <li className="featurLi">
                <NavLink
                  style={{
                    color: props.mode === "dark" ? "white" : "black",
                  }}
                  onClick={() => setProduct("Faishon")}
                >
                  Faishon
                </NavLink>
              </li>
              <li className="featurLi">
                <NavLink
                  style={{
                    color: props.mode === "dark" ? "white" : "black",
                  }}
                  onClick={() => setProduct("Beauty")}
                >
                  Beauty
                </NavLink>
              </li>
              <li className="featurLi">
                <NavLink
                  style={{
                    color: props.mode === "dark" ? "white" : "black",
                  }}
                  onClick={() => setProduct("Home & Kitchen")}
                >
                  Home & Kitchen
                </NavLink>
              </li>
              <li className="featurLi">
                <NavLink
                  style={{
                    color: props.mode === "dark" ? "white" : "black",
                  }}
                  onClick={() => setProduct("Electronics")}
                >
                  Electronics
                </NavLink>
              </li>
              <li className="featurLi">
                <NavLink
                  style={{
                    color: props.mode === "dark" ? "white" : "black",
                  }}
                  onClick={() => setProduct("Furniture")}
                >
                  Furniture
                </NavLink>
              </li>
              <li className="featurLi">
                {" "}
                <NavLink href="/seeAllFeatured" className="seeAllBtn">
                  View All
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <Splide
          options={{
            focus: "center",
            perPage: { perPage },
            fixedWidth: "fit-content",
            padding: "5rem",
            pagination: false,

            autoplay: true,
          }}
          aria-label="Featured"
        >
          {Product === "Faishon" ? (
            <>
              <SplideSlide>
                <div
                  className={`card cardItem border-${
                    props.mode === "dark" ? "white" : "black"
                  } mb-3`}
                  style={{
                    width: "300px",
                    color: props.mode === "dark" ? "white" : "black",
                    backgroundColor: "transparent",
                  }}
                >
                  <div
                    className="card-body text-success item"
                    style={{
                      backgroundImage:
                        "url(https://www.nike.ae/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw722640a1/nk/d33/3/9/6/9/4/d3339694_68fc_4119_b1b9_bd9d5b287f59.png?sw=1040&sh=1040&sm=fit)",
                      height: "300px",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundColor: "white",
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
                  <div className="card-footer priceFooter bg-light text-dark">
                    <div className="pName">Nike Alphafly 2</div>
                    <div className="price ">
                      <LuIndianRupee />
                      33,857.06
                    </div>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div
                  className={`card cardItem border-${
                    props.mode === "dark" ? "white" : "black"
                  } mb-3`}
                  style={{
                    width: "300px",
                    color: props.mode === "dark" ? "white" : "black",
                    backgroundColor: "transparent",
                  }}
                >
                  <div
                    className="card-body text-success item"
                    style={{
                      backgroundImage:
                        "url(https://www.nike.ae/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw438dba48/nk/c80/8/5/6/9/b/c808569b_f317_49fa_8a81_be9badb83ead.png?sw=1040&sh=1040&sm=fit)",
                      height: "300px",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundColor: "white",
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
                  <div className="card-footer priceFooter bg-light text-dark">
                    <div className="pName">Nike Invincible 3</div>
                    <div className="price ">
                      <LuIndianRupee />
                      16995.00
                    </div>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div
                  className={`card cardItem border-${
                    props.mode === "dark" ? "white" : "black"
                  } mb-3`}
                  style={{
                    width: "300px",
                    color: props.mode === "dark" ? "white" : "black",
                    backgroundColor: "transparent",
                  }}
                >
                  <div
                    className="card-body text-success item"
                    style={{
                      backgroundImage:
                        "url(https://www.nike.ae/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw6e4e27ce/nk/e2c/c/a/7/1/8/e2cca718_93a7_41a5_af5d_5af4c4b89527.png?sw=1040&sh=1040&sm=fit)",
                      height: "300px",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundColor: "white",
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
                  <div className="card-footer priceFooter bg-light text-dark">
                    <div className="pName">Jordan Stay Loyal 3</div>
                    <div className="price ">
                      <LuIndianRupee />
                      10,295.00
                    </div>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div
                  className={`card cardItem border-${
                    props.mode === "dark" ? "white" : "black"
                  } mb-3`}
                  style={{
                    width: "300px",
                    color: props.mode === "dark" ? "white" : "black",
                    backgroundColor: "transparent",
                  }}
                >
                  <div
                    className="card-body text-success item"
                    style={{
                      backgroundImage:
                        "url(https://www.nike.ae/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw16a9e676/nk/cc7/1/4/4/8/4/cc714484_c7ba_43d9_98db_b760a07cf241.png?sw=1040&sh=1040&sm=fit)",
                      height: "300px",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundColor: "white",
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
                  <div className="card-footer priceFooter bg-light text-dark">
                    <div className="pName">Nike Air Force 1 '07</div>
                    <div className="price ">
                      <LuIndianRupee />
                      7495.00
                    </div>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div
                  className={`card cardItem border-${
                    props.mode === "dark" ? "white" : "black"
                  } mb-3`}
                  style={{
                    width: "300px",
                    color: props.mode === "dark" ? "white" : "black",
                    backgroundColor: "transparent",
                  }}
                >
                  <div
                    className="card-body text-success item"
                    style={{
                      backgroundImage:
                        "url(https://www.nike.ae/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw68408323/nk/cc4/c/d/f/0/1/cc4cdf01_1c83_4e6c_a409_471d26a7a816.png?sw=1040&sh=1040&sm=fit)",
                      height: "300px",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundColor: "white",
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
                  <div className="card-footer priceFooter bg-light text-dark">
                    <div className="pName">Nike Mercurial Superfly 9</div>
                    <div className="price ">
                      <LuIndianRupee />
                      16,857.06
                    </div>
                  </div>
                </div>
              </SplideSlide>
            </>
          ) : Product === "Beauty" ? (
            <>
              <h1>hello</h1>
            </>
          ) : Product === "Home & Kitchen" ? (
            <>
              <h1>hello1</h1>
            </>
          ) : Product === "Electronics" ? (
            <>
              <h1>hello2</h1>
            </>
          ) : Product === "Furniture" ? (
            <>
              <h1>hello3</h1>
            </>
          ) : (
            <>
              {" "}
              <SplideSlide>
                <div
                  className={`card cardItem border-${
                    props.mode === "dark" ? "white" : "black"
                  } mb-3`}
                  style={{
                    width: "300px",
                    color: props.mode === "dark" ? "white" : "black",
                    backgroundColor: "transparent",
                  }}
                >
                  <div
                    className="card-body text-success item"
                    style={{
                      backgroundImage:
                        "url(https://www.nike.ae/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw722640a1/nk/d33/3/9/6/9/4/d3339694_68fc_4119_b1b9_bd9d5b287f59.png?sw=1040&sh=1040&sm=fit)",
                      height: "300px",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundColor: "white",
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
                  <div className="card-footer priceFooter bg-light text-dark">
                    <div className="pName">Nike Alphafly 2</div>
                    <div className="price ">
                      <LuIndianRupee />
                      33,857.06
                    </div>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div
                  className={`card cardItem border-${
                    props.mode === "dark" ? "white" : "black"
                  } mb-3`}
                  style={{
                    width: "300px",
                    color: props.mode === "dark" ? "white" : "black",
                    backgroundColor: "transparent",
                  }}
                >
                  <div
                    className="card-body text-success item"
                    style={{
                      backgroundImage:
                        "url(https://www.nike.ae/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw438dba48/nk/c80/8/5/6/9/b/c808569b_f317_49fa_8a81_be9badb83ead.png?sw=1040&sh=1040&sm=fit)",
                      height: "300px",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundColor: "white",
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
                  <div className="card-footer priceFooter bg-light text-dark">
                    <div className="pName">Nike Invincible 3</div>
                    <div className="price ">
                      <LuIndianRupee />
                      16995.00
                    </div>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div
                  className={`card cardItem border-${
                    props.mode === "dark" ? "white" : "black"
                  } mb-3`}
                  style={{
                    width: "300px",
                    color: props.mode === "dark" ? "white" : "black",
                    backgroundColor: "transparent",
                  }}
                >
                  <div
                    className="card-body text-success item"
                    style={{
                      backgroundImage:
                        "url(https://www.nike.ae/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw6e4e27ce/nk/e2c/c/a/7/1/8/e2cca718_93a7_41a5_af5d_5af4c4b89527.png?sw=1040&sh=1040&sm=fit)",
                      height: "300px",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundColor: "white",
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
                  <div className="card-footer priceFooter bg-light text-dark">
                    <div className="pName">Jordan Stay Loyal 3</div>
                    <div className="price ">
                      <LuIndianRupee />
                      10,295.00
                    </div>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div
                  className={`card cardItem border-${
                    props.mode === "dark" ? "white" : "black"
                  } mb-3`}
                  style={{
                    width: "300px",
                    color: props.mode === "dark" ? "white" : "black",
                    backgroundColor: "transparent",
                  }}
                >
                  <div
                    className="card-body text-success item"
                    style={{
                      backgroundImage:
                        "url(https://www.nike.ae/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw16a9e676/nk/cc7/1/4/4/8/4/cc714484_c7ba_43d9_98db_b760a07cf241.png?sw=1040&sh=1040&sm=fit)",
                      height: "300px",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundColor: "white",
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
                  <div className="card-footer priceFooter bg-light text-dark">
                    <div className="pName">Nike Air Force 1 '07</div>
                    <div className="price ">
                      <LuIndianRupee />
                      7495.00
                    </div>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div
                  className={`card cardItem border-${
                    props.mode === "dark" ? "white" : "black"
                  } mb-3`}
                  style={{
                    width: "300px",
                    color: props.mode === "dark" ? "white" : "black",
                    backgroundColor: "transparent",
                  }}
                >
                  <div
                    className="card-body text-success item"
                    style={{
                      backgroundImage:
                        "url(https://www.nike.ae/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw68408323/nk/cc4/c/d/f/0/1/cc4cdf01_1c83_4e6c_a409_471d26a7a816.png?sw=1040&sh=1040&sm=fit)",
                      height: "300px",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundColor: "white",
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
                  <div className="card-footer priceFooter bg-light text-dark">
                    <div className="pName">Nike Mercurial Superfly 9</div>
                    <div className="price ">
                      <LuIndianRupee />
                      16,857.06
                    </div>
                  </div>
                </div>
              </SplideSlide>
            </>
          )}
        </Splide>
      </div>

      {/* New Arrivals ends */}

      {/* freseh fruots and vegi */}

      <div
        className="text-center"
        style={{
          marginTop: "-3rem",
        }}
      >
        <img
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1709266913_Web_Delhi_JioMartHome_01.jpg?im=Resize=(1680,320)"
          alt="img"
          className="img-fluid"
          style={{
            width: "90%",
          }}
        />
      </div>

      <div className="section mt-5 mb-5 ps-5 pe-3 pt-3 pb-3">
        <div className="section-head">
          <h4
            className="sectionheading"
            style={{
              color: props.mode === "dark" ? "white" : "#204969",
            }}
          >
            Fresh items{" "}
            <hr
              className="hr-heading"
              style={{
                color: props.mode === "dark" ? "white" : "#ab7418",
              }}
            />
          </h4>
          <div className="categoriesFeature ms-auto">
            <ul className="featurUl">
              <li className="featurLi">
                {" "}
                <NavLink href="/seeAllFeatured" className="seeAllBtn">
                  View All
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <Splide
          options={{
            focus: "center",
            perPage: { perPage },
            fixedWidth: "fit-content",
            padding: "5rem",
            pagination: false,

            autoplay: true,
          }}
          aria-label="Featured"
        >
          <SplideSlide>
            <div
              className={`card cardItem border-${
                props.mode === "dark" ? "white" : "black"
              } mb-3`}
              style={{
                width: "300px",
                color: props.mode === "dark" ? "white" : "black",
                backgroundColor: "transparent",
              }}
            >
              <div
                className="card-body text-success item"
                style={{
                  backgroundImage:
                    "url(https://m.media-amazon.com/images/I/41s9MLrLAoL.jpg)",
                  height: "300px",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: "white",
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
              <div className="card-footer priceFooter bg-light text-dark">
                <div className="pName">Cabbage</div>
                <div className="price ">
                  <LuIndianRupee />
                  19
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div
              className={`card cardItem border-${
                props.mode === "dark" ? "white" : "black"
              } mb-3`}
              style={{
                width: "300px",
                color: props.mode === "dark" ? "white" : "black",
                backgroundColor: "transparent",
              }}
            >
              <div
                className="card-body text-success item"
                style={{
                  backgroundImage:
                    "url(https://media.istockphoto.com/id/619252960/photo/carrot.jpg?s=612x612&w=0&k=20&c=C-PlZ2oHW2SDCkaZXn8rg1UFdeF5ismwiy3v7uQRVKE=)",
                  height: "300px",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: "white",
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
              <div className="card-footer priceFooter bg-light text-dark">
                <div className="pName">Carrot</div>
                <div className="price ">
                  <LuIndianRupee />
                  19/kg
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div
              className={`card cardItem border-${
                props.mode === "dark" ? "white" : "black"
              } mb-3`}
              style={{
                width: "300px",
                color: props.mode === "dark" ? "white" : "black",
                backgroundColor: "transparent",
              }}
            >
              <div
                className="card-body text-success item"
                style={{
                  backgroundImage:
                    "url(https://m.media-amazon.com/images/I/81AK2aQ8VvL.jpg)",
                  height: "300px",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: "white",
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
              <div className="card-footer priceFooter bg-light text-dark">
                <div className="pName">Apple</div>
                <div className="price ">
                  <LuIndianRupee />
                  169
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div
              className={`card cardItem border-${
                props.mode === "dark" ? "white" : "black"
              } mb-3`}
              style={{
                width: "300px",
                color: props.mode === "dark" ? "white" : "black",
                backgroundColor: "transparent",
              }}
            >
              <div
                className="card-body text-success item"
                style={{
                  backgroundImage:
                    "url(https://media.istockphoto.com/id/157636928/photo/watermelon.webp?b=1&s=170667a&w=0&k=20&c=p3NcEMm_dP7ylGXQ7bx6dNuA6FkhpHBoHT8-ansEQMQ=)",
                  height: "300px",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: "white",
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
              <div className="card-footer priceFooter bg-light text-dark">
                <div className="pName">Watermelon</div>
                <div className="price ">
                  <LuIndianRupee />
                  110
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div
              className={`card cardItem border-${
                props.mode === "dark" ? "white" : "black"
              } mb-3`}
              style={{
                width: "300px",
                color: props.mode === "dark" ? "white" : "black",
                backgroundColor: "transparent",
              }}
            >
              <div
                className="card-body card-bodyItem text-success item"
                style={{
                  backgroundImage:
                    "url(https://img2.exportersindia.com/product_images/bc-full/2020/3/7130535/fresh-onion-1584436146-5340817.jpeg)",
                  height: "300px",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: "white",
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
              <div className="card-footer priceFooter bg-light text-dark">
                <div className="pName">Onion</div>
                <div className="price ">
                  <LuIndianRupee />
                  19/kg
                </div>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>

      {/* brands */}
      <div className="section mt-5 mb-5 ps-5 pe-3 pt-3 pb-3 d-block ">
        <div className="section-head">
          <h4
            className="sectionheading"
            style={{
              color: props.mode === "dark" ? "white" : "#204969",
            }}
          >
            FeatURED brands{" "}
            <hr
              className="hr-heading"
              style={{
                color: props.mode === "dark" ? "white" : "#ab7418",
              }}
            />
          </h4>
          <div className="categoriesFeature ms-auto">
            <ul className="featurUl">
              <li className="featurLi">
                {" "}
                <NavLink href="/seeAllFeatured" className="seeAllBtn">
                  View All
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <Splide
          options={{
            drag: "free",
            focus: "center",
            perPage: { perPage },
            pagination: false,
          }}
          aria-label="Featured"
        >
          <SplideSlide>
            <div
              className="card card-brand"
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASEAAACuCAMAAABOUkuQAAAAilBMVEX///8AAAD8/PwEBAT5+fkICAjS0tLf39/29vbv7+/o6Ojb29tgYGDs7OycnJx1dXXLy8skJCSysrLDw8O9vb18fHxFRUVPT0+ioqI8PDyOjo7j4+MmJiaIiIhsbGwfHx80NDQtLS2Kioqenp4VFRU/Pz9kZGRWVlYZGRl5eXmrq6tMTEy1tbVubm7Qepz+AAAGKElEQVR4nO2dCXvaMAyGbecmEKDcN2wUVqD//+/NskNCAvRCPKFCb1fahozGXyXZlhUjBMMwDMMwDMMwDMMwDMMwDMMwDMMwzK9G6Q/mGsqIwwpdxJpO5O+azVrV1/KQgDyuP+uvpZwGbEUXUa2tNLRjdrRLxHWZsgqqvpZHw9XxWSXeUSD5ynGohKvEZCOloz8M25B9rEwwMNKkCr2nnT6TESykk1mQlMOqr+fhqO1BoNyGYu7JchSwz0MQSLWs+qIeC20tQy3PsSMDqRKemZ2glfD/WdM5utk0EDxgzFGuqMs8RgM9NqEiHRt9cpECG52qvq6HIczmGo71taTqK3o0/FwgY0ejRtVX9Gi8ZVHISLTwOQYVcUf5SAi+2wmecRRp5TN6EGhsonTVF/VQ7IoCuVVfz+MxPh0L8Yz1Am92PA3d2Mh32b/OUHV5nHKMGxyCLqA21r+WvYl45l7swjwrPaTmoM/mJTBz1aJCz7K2qI5fTpuvMs0awcT0XypUrlsSxFVPMz9Trnmo+Z1u129Am08EM19BDDgYdJNes/k2G3YDyOanh2ljGi4a3WSfrYY1X+L8adfKoKkdZu2TJIg33z3NwqKKZ/0sxWpo1w9R9qzRJ2w1R7LMYtPVCpIWyTQu7mVj5hPWfzr5OUHyWlAwP3vbNW5GVCXdrFA0xp68wj6JI1eFk0N9ce0UTT3I/JAgSvivZeMpGEn/vVf3StZTOEkfnnbNqixFtH8MIXEovYvNd3Ljcq4pZIVMIqJupkQCVuA5V/zMSfOuznWF0idmVTflPijVS73nmn0UlLj+DKRFyAUilVnQp+J8jmNyj9Q00iPily9Zz1cEAjdtEZvY6r7Hb6dtQ5BIylFMTCHtYyPdWTkoXqZVHkNvRqruygShD+LvNyUa2tekpJCYrFC0cYwVviiCI8YZUpSGzxdqIQiofTBK/p5CnkxcihP8MYI6KT1INJLzsqiPY0KaVUPbj0vOy1o46gAHeg4GLYJ1Qpyefk5xnVo7xRTNySgWy0DtJsZcw7CnNk4EVKGg40Z2JFeqTV4IhyXRwuG8ePNWNuVlWBIo0ZhiKZQIimuuSkywBJIdcjN6S4ykjyOhcpigQHmJ9M2EVTflTnTQFKq6JffBpvBZoesoxAFj1W25F3g2FH3+y34lKAqZVYAazc4eJ1Kb3ACUGNGblynE3v5v1Y25CwptxChlU1AcMWLNOiAQjWhuAKKij4ruvqWRqWeouj13INx/3vovMidZn6dUE00hPTOjl8pXqOuJfwj29qgTM7nyq24OOjAIjrHWOhxHbkgm0cIp0nqivXsaChsoaQR/8TpWdZV+Da+lJaKkkLILZljVMfpVRjEtPzONCSSSm3nwb1mjNm50RaOP42VmczRHLlvEFNL0JE4ZrJHJk+uuuauR0uARsYDI1lNvaoKUQCL00OpjpO0Xl3+J1TggTs3g9iIIaov481/7i8BbM8vvL6K1n260RxpVZzKZQhBKJMgKQc0nLSJkfeSiQW1QhFaIljIjlktTuEMiaapiidmQeDc3mN0ujb0/6I3gvgQtmHVi3ecKqx6kMH/tOdLkDIbUdVoZEGH3O2mt0TKNToucQqbfwZt6NBW9OA3EbaxULM3V6fR2YAwSYh6WodQARaBtRFUgrEwatZ4+A/qzIYJAY2IJ2FO0FfVvXPVw5CAk2pGlBKsb8rFwM/k/WqnFc1RHyp8v49s9vQW9KVmB2Y/1AYHmtMURMLgO338ukRw0qAsEMTY634vyfEnWKUd0c4YXkw7SGXG/vJ2eyfk4J+rYDc+ckkBTgsvRl1DCn5aj9aW8iFP8Qf/YcV26Q6EjdifhybakDzxuxl270XDUGW+87HAm0SskXultinKOuZm3tikZy2rsnxpHGI+XJZMa1Oz/pa8QAO9SdhKvnfnBFfmOuOnjbn6iz2iY7gb7LALpdtaSARTrr5fbv/6lLZf0SX5SH7XX68Vys4vsoefhuIX5oduCtl9uOtiMG/itOLTT3qcS6MsnHl3v7I0FqHN8UwD1YfA1+hw7L/eZjEidfXP1zDQ4P5f9MAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMMxT8B/NuD47L6BJbwAAAABJRU5ErkJggg=="
                className="card-img-top"
                alt="Apple"
              />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div
              className="card card-brand"
              style={{
                alignItems: "center",
                justifyContent: "center",
                padding: "6px 10px 6px 10px",
              }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/300px-Logo_NIKE.svg.png"
                className="card-img-top"
                alt="Nike"
              />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div
              className="card card-brand"
              style={{
                alignItems: "center",
                justifyContent: "center",
                padding: "6px 10px 6px 10px",
              }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Samsung_wordmark.svg/360px-Samsung_wordmark.svg.png"
                className="card-img-top"
                alt="Samsung"
              />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div
              className="card card-brand"
              style={{
                alignItems: "center",
                justifyContent: "center",
                padding: "6px 10px 6px 10px",
              }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Adidas_2022_logo.svg/225px-Adidas_2022_logo.svg.png"
                className="card-img-top"
                alt="Adidias"
              />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div
              className="card card-brand"
              style={{
                alignItems: "center",
                justifyContent: "center",
                padding: "6px 10px 6px 10px",
              }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Louis_Vuitton_logo.svg/225px-Louis_Vuitton_logo.svg.png"
                className="card-img-top"
                alt="Louis Vuittons"
              />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div
              className="card card-brand"
              style={{
                alignItems: "center",
                justifyContent: "center",
                padding: "6px 10px 6px 10px",
              }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Rolex_logo.svg/225px-Rolex_logo.svg.png"
                className="card-img-top"
                alt="Rolex"
              />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div
              className="card card-brand"
              style={{
                alignItems: "center",
                justifyContent: "center",
                padding: "6px 10px 6px 10px",
              }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sony_logo.svg/330px-Sony_logo.svg.png"
                className="card-img-top"
                alt="Sony"
              />
            </div>
          </SplideSlide>
        </Splide>
      </div>

      {/* service */}
      {/* 
      <div className="services">
        <div
          className="service-item"
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          <MdSupportAgent className="img" />
          <p>SUPPORT 24/7</p>
          <h2
            style={{
              color: props.mode === "dark" ? "white" : "black",
            }}
          >
            We support online 24 hours a day
          </h2>
        </div>
        <div
          className="service-item"
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          <MdAccessTime className="img" />
          <p>FREE RETURN</p>
          <h2
            style={{
              color: props.mode === "dark" ? "white" : "black",
            }}
          >
            7 days money back guarantee!
          </h2>
        </div>
        <div
          className="service-item"
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          <FaShippingFast className="img" />
          <p>Free and Fast Shipping</p>
          <h2
            style={{
              color: props.mode === "dark" ? "white" : "black",
            }}
          >
            Free shipping on all orders T&amp;C
          </h2>
        </div>
           </div>*/}
      {/* service ends  */}
    </>
  );
};

export default HomePage;
