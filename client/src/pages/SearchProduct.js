import React, { useState, useEffect } from "react";
import axios from "axios";
import { LuIndianRupee } from "react-icons/lu";
import heart from "../pages/img/icon/heart.png";
import compare from "../pages/img/icon/compare.png";

const SearchProduct = ({ queryCome }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/product/search/${queryCome}`
      );
      setSearchResults(response.data.products);
      setErrorMessage("");
    } catch (error) {
      setSearchResults([]);
      setErrorMessage("Error searching for products");
      console.error(error);
    }
  };

  useEffect(() => {
    if (queryCome) {
      handleSearch();
    }
  }, [queryCome]);

  return (
    <>
      {errorMessage && <p>{errorMessage}</p>}
      {searchResults.length === 0 && <p>No products found</p>}
      You searched for: {queryCome}
      <section className="product spad mt-5">
        <div className="container">
          <div className="row product__filter">
            {searchResults.map((product) => (
              <div
                key={product._id}
                className="col-lg-6 col-md-6 col-sm-6 col-md-6 col-sm-6 mix border"
              >
                <div className="product__item">
                  <div
                    className="product__item__pic set-bg"
                    style={{
                      backgroundImage: `url(http://localhost:8080/api/v1/product/product-photo/${product._id})`,
                    }}
                  >
                    <ul className="product__hover ulHome">
                      <li>
                        <a className="aHome" href="#!">
                          <img className="imgHome" src={heart} alt="OK" />{" "}
                          <span>Favorite</span>
                        </a>
                      </li>
                      <li>
                        <a className="aHome" href="#!">
                          <img className="imgHome" src={compare} alt="OK" />
                          <span>Compare</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product__item__text">
                    <div style={{ display: "flex" }}>
                      <h6 className="h6Home">{product.name}</h6>
                      <h6 className="h6Home ms-auto">{product.brand}</h6>
                    </div>
                    <a className="aHome add-cart" href="#!">
                      + Add To Cart
                    </a>
                    <div
                      className={`rating ${
                        product.quantity > 5 ? "d-none" : ""
                      }`}
                    >
                      <p className="pHome">
                        {" "}
                        Only {product.quantity} left in stock.
                      </p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                      }}
                    >
                      <h6
                        className={`h6Home ${
                          product.sales === true
                            ? "text-decoration-line-through text-muted"
                            : ""
                        }`}
                      >
                        <LuIndianRupee />
                        {product.price}
                      </h6>
                      {product.sales === true ? (
                        <h6 className="h6Home ms-1 text-danger">
                          {product.salePrice}
                        </h6>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="product__color__select">
                      <label htmlFor="pc-22">
                        <input className="inputHome" type="radio" id="pc-22" />
                      </label>
                      <label className="active black" htmlFor="pc-23">
                        <input className="inputHome" type="radio" id="pc-23" />
                      </label>
                      <label className="grey" htmlFor="pc-24">
                        <input className="inputHome" type="radio" id="pc-24" />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchProduct;
