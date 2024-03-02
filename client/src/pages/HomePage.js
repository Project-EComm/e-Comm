import React, { useState, useEffect } from "react";
import { MdSupportAgent } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
// import { NavLink } from "react-router-dom";
import { LuIndianRupee } from "react-icons/lu";
import { IoIosGitCompare } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { NavLink } from "react-router-dom";

const HomePage = (props) => {
  const [perPage, setPerPage] = useState();
  const [featuredProduct, setfeaturedProduct] = useState();
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
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
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
            FeatURED PrODUCTs{" "}
            <hr
              className="hr-heading"
              style={{
                color: props.mode === "dark" ? "white" : "#ab7418",
              }}
            />
          </h4>
          <div className="categoriesFeature d-none d-md-flex ms-auto">
            <ul className="featurUl">
              <li className="featurLi">
                <NavLink
                  style={{
                    color: "black",
                  }}
                  onClick={() => setfeaturedProduct("Faishon")}
                >
                  Faishon
                </NavLink>
              </li>
              <li className="featurLi">
                <NavLink
                  style={{
                    color: "black",
                  }}
                  onClick={() => setfeaturedProduct("Beauty")}
                >
                  Beauty
                </NavLink>
              </li>
              <li className="featurLi">
                <NavLink
                  style={{
                    color: "black",
                  }}
                  onClick={() => setfeaturedProduct("Home & Kitchen")}
                >
                  Home & Kitchen
                </NavLink>
              </li>
              <li className="featurLi">
                <NavLink
                  style={{
                    color: "black",
                  }}
                  onClick={() => setfeaturedProduct("Electronics")}
                >
                  Electronics
                </NavLink>
              </li>
              <li className="featurLi">
                <NavLink
                  style={{
                    color: "black",
                  }}
                  onClick={() => setfeaturedProduct("Furniture")}
                >
                  Furniture
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="categoriesFeature d-flex d-md-none ms-auto">
            <select
              className="categoriesSelect"
              onChange={(e) => setfeaturedProduct(e.target.value)}
            >
              <option value="" key="">
                Category
              </option>
              <option value="Faishon" key="Faishon">
                Faishon
              </option>
              <option value="Beauty" key="Beauty">
                Beauty
              </option>
              <option value="Home & Kitchen" key="Home & Kitchen">
                Home & Kitchen
              </option>
              <option value="Electronics" key="Electronics">
                Electronics
              </option>
              <option value="Furniture" key="Furniture">
                Furniture
              </option>
            </select>
          </div>
          <p className="seeAll d-none d-md-flex">
            <NavLink href="/seeAllFeatured">
              See All Deals <i className="fas fa-angle-right"></i>
            </NavLink>
          </p>
        </div>
        <Splide
          options={{
            focus: "center",
            perPage: { perPage },
            fixedWidth: "fit-content",
            padding: "5rem",

            autoplay: true,
          }}
          aria-label="Featured"
        >
          {featuredProduct === "Faishon" ? (
            <>
              <SplideSlide>
                <div
                  className={`card border-${
                    props.mode === "dark" ? "white" : "black"
                  } mb-3`}
                  style={{
                    width: "300px",
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
                  <div className="card-footer bg-transparent priceFooter">
                    <div className="pName">Nike Alphafly 2</div>
                    <div className="price text-danger">
                      <LuIndianRupee /> 33,857.06
                    </div>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div
                  className={`card border-${
                    props.mode === "dark" ? "white" : "black"
                  } mb-3`}
                  style={{
                    width: "300px",
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
                        "url(https://www.nike.ae/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw438dba48/nk/c80/8/5/6/9/b/c808569b_f317_49fa_8a81_be9badb83ead.png?sw=1040&sh=1040&sm=fit)",
                      height: 350,
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
                  <div className="card-footer bg-transparent priceFooter">
                    <div className="pName">Nike Invincible 3</div>
                    <div className="price text-danger">
                      <LuIndianRupee /> 16995.00
                    </div>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div
                  className={`card border-${
                    props.mode === "dark" ? "white" : "black"
                  } mb-3`}
                  style={{
                    width: "300px",
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
                        "url(https://www.nike.ae/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw6e4e27ce/nk/e2c/c/a/7/1/8/e2cca718_93a7_41a5_af5d_5af4c4b89527.png?sw=1040&sh=1040&sm=fit)",
                      height: 350,
                      backgroundColor: "transparent",
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
                  <div className="card-footer bg-transparent priceFooter">
                    <div className="pName">Jordan Stay Loyal 3</div>
                    <div className="price text-danger">
                      <LuIndianRupee /> 10,295.00
                    </div>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div
                  className={`card border-${
                    props.mode === "dark" ? "white" : "black"
                  } mb-3`}
                  style={{
                    width: "300px",
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
                        "url(https://www.nike.ae/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw16a9e676/nk/cc7/1/4/4/8/4/cc714484_c7ba_43d9_98db_b760a07cf241.png?sw=1040&sh=1040&sm=fit)",
                      height: 350,
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
                  <div className="card-footer bg-transparent priceFooter">
                    <div className="pName">Nike Air Force 1 '07</div>
                    <div className="price text-danger">
                      <LuIndianRupee /> 7495.00
                    </div>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div
                  className={`card border-${
                    props.mode === "dark" ? "white" : "black"
                  } mb-3`}
                  style={{
                    width: "300px",
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
                        "url(https://www.nike.ae/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw68408323/nk/cc4/c/d/f/0/1/cc4cdf01_1c83_4e6c_a409_471d26a7a816.png?sw=1040&sh=1040&sm=fit)",
                      height: 350,
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
                  <div className="card-footer bg-transparent priceFooter">
                    <div className="pName">Nike Mercurial Superfly 9</div>
                    <div className="price text-danger">
                      <LuIndianRupee /> 16,857.06
                    </div>
                  </div>
                </div>
              </SplideSlide>
            </>
          ) : featuredProduct === "Beauty" ? (
            <>
              <h1>hello</h1>
            </>
          ) : featuredProduct === "Home & Kitchen" ? (
            <>
              <h1>hello1</h1>
            </>
          ) : featuredProduct === "Electronics" ? (
            <>
              <h1>hello2</h1>
            </>
          ) : featuredProduct === "Furniture" ? (
            <>
              <h1>hello3</h1>
            </>
          ) : (
            <>Default</>
          )}
        </Splide>
        <div
          className="d-flex d-md-none"
          style={{
            float: "right",
          }}
        >
          <a href="!#">
            See All Deals <i className="fas fa-angle-right"></i>
          </a>
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

// <div className="grid-container">
//   <div
//     className={`card border-${props.mode === "dark" ? "white" : "black"} mb-3`}
//     style={{
//       width: "300px",
//       color: props.mode === "dark" ? "white" : "black",
//       backgroundColor: "transparent",
//       borderRadius: "0px",
//       border: "1px solid black",
//     }}
//   >
//     <div
//       className="card-body text-success item"
//       style={{
//         backgroundImage:
//           "url(https://www.nike.ae/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw722640a1/nk/d33/3/9/6/9/4/d3339694_68fc_4119_b1b9_bd9d5b287f59.png?sw=1040&sh=1040&sm=fit)",
//         height: 350,
//         backgroundSize: "contain",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <div className="item-desc discription">
//         <div className="btn-card">
//           <button className="cardBtn">Add to Cart</button>
//         </div>
//         <div className="addIcon mt-1">
//           <div className="cardBtn p-2">
//             <IoIosGitCompare />
//           </div>
//           <div className="cardBtn p-2 ms-1">
//             <FaHeart />
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="card-footer bg-transparent priceFooter">
//       <div className="pName">Nike Alphafly 2</div>
//       <div className="price text-danger">
//         <LuIndianRupee /> 33,857.06
//       </div>
//     </div>
//   </div>
//   <div
//     className={`card border-${props.mode === "dark" ? "white" : "black"} mb-3`}
//     style={{
//       width: "300px",
//       color: props.mode === "dark" ? "white" : "black",
//       backgroundColor: "transparent",
//       borderRadius: "0px",
//       border: "1px solid black",
//     }}
//   >
//     <div
//       className="card-body text-success item"
//       style={{
//         backgroundImage:
//           "url(https://www.nike.ae/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw722640a1/nk/d33/3/9/6/9/4/d3339694_68fc_4119_b1b9_bd9d5b287f59.png?sw=1040&sh=1040&sm=fit)",
//         height: 350,
//         backgroundSize: "contain",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <div className="item-desc discription">
//         <div className="btn-card">
//           <button className="cardBtn">Add to Cart</button>
//         </div>
//         <div className="addIcon mt-1">
//           <div className="cardBtn p-2">
//             <IoIosGitCompare />
//           </div>
//           <div className="cardBtn p-2 ms-1">
//             <FaHeart />
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="card-footer bg-transparent priceFooter">
//       <div className="pName">Nike Alphafly 2</div>
//       <div className="price text-danger">
//         <LuIndianRupee /> 33,857.06
//       </div>
//     </div>
//   </div>
//   <div
//     className={`card border-${props.mode === "dark" ? "white" : "black"} mb-3`}
//     style={{
//       width: "300px",
//       color: props.mode === "dark" ? "white" : "black",
//       backgroundColor: "transparent",
//       borderRadius: "0px",
//       border: "1px solid black",
//     }}
//   >
//     <div
//       className="card-body text-success item"
//       style={{
//         backgroundImage:
//           "url(https://www.nike.ae/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw722640a1/nk/d33/3/9/6/9/4/d3339694_68fc_4119_b1b9_bd9d5b287f59.png?sw=1040&sh=1040&sm=fit)",
//         height: 350,
//         backgroundSize: "contain",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <div className="item-desc discription">
//         <div className="btn-card">
//           <button className="cardBtn">Add to Cart</button>
//         </div>
//         <div className="addIcon mt-1">
//           <div className="cardBtn p-2">
//             <IoIosGitCompare />
//           </div>
//           <div className="cardBtn p-2 ms-1">
//             <FaHeart />
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="card-footer bg-transparent priceFooter">
//       <div className="pName">Nike Alphafly 2</div>
//       <div className="price text-danger">
//         <LuIndianRupee /> 33,857.06
//       </div>
//     </div>
//   </div>
//   <div
//     className={`card border-${props.mode === "dark" ? "white" : "black"} mb-3`}
//     style={{
//       width: "300px",
//       color: props.mode === "dark" ? "white" : "black",
//       backgroundColor: "transparent",
//       borderRadius: "0px",
//       border: "1px solid black",
//     }}
//   >
//     <div
//       className="card-body text-success item"
//       style={{
//         backgroundImage:
//           "url(https://www.nike.ae/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw722640a1/nk/d33/3/9/6/9/4/d3339694_68fc_4119_b1b9_bd9d5b287f59.png?sw=1040&sh=1040&sm=fit)",
//         height: 350,
//         backgroundSize: "contain",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <div className="item-desc discription">
//         <div className="btn-card">
//           <button className="cardBtn">Add to Cart</button>
//         </div>
//         <div className="addIcon mt-1">
//           <div className="cardBtn p-2">
//             <IoIosGitCompare />
//           </div>
//           <div className="cardBtn p-2 ms-1">
//             <FaHeart />
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="card-footer bg-transparent priceFooter">
//       <div className="pName">Nike Alphafly 2</div>
//       <div className="price text-danger">
//         <LuIndianRupee /> 33,857.06
//       </div>
//     </div>
//   </div>
// </div>;
