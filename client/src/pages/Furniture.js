import React, { useState, useEffect } from "react";
import axios from "axios";
import { LuIndianRupee } from "react-icons/lu";
import heart from "../pages/img/icon/heart.png";
import compare from "../pages/img/icon/compare.png";

const Furniture = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortByPrice, setSortByPrice] = useState(null);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/product//products-by-category/furniture`
        );
        setProducts(response.data.products);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProductsByCategory();
  }, []);

  // Function to sort products based on price
  const sortProductsByPrice = () => {
    let sortedProducts = [...products]; // Create a copy of products array

    // Sort the products based on price
    sortedProducts.sort((a, b) => {
      const priceA = parseFloat(a.sales ? a.salePrice : a.price);
      const priceB = parseFloat(b.sales ? b.salePrice : b.price);

      if (priceA < priceB) return -1;
      if (priceA > priceB) return 1;
      return 0;
    });

    // Update the sorted products state
    setProducts(sortedProducts);
  };

  // Handle sort by price option change
  const handleSortByPriceChange = (e) => {
    const selectedOption = e.target.value;
    if (selectedOption === "priceLowToHigh") {
      setSortByPrice("priceLowToHigh");
      sortProductsByPrice();
    } else if (selectedOption === "priceHighToLow") {
      setSortByPrice("priceHighToLow");
      sortProductsByPrice();
      setProducts([...products].reverse()); // Reverse the order to sort from high to low
    }
  };

  // Function to filter products based on price range
  const filteredProducts = products.filter((product) => {
    const productPrice = parseFloat(
      product.sales ? product.salePrice : product.price
    );
    const min = parseFloat(minPrice);
    const max = parseFloat(maxPrice);

    if (isNaN(min) && isNaN(max)) {
      return true;
    } else if (isNaN(min)) {
      return productPrice <= max;
    } else if (isNaN(max)) {
      return productPrice >= min;
    } else {
      return productPrice >= min && productPrice <= max;
    }
  });

  return (
    <section className="product spad mt-5">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-3 col-md-4 col-sm-12"
            style={{
              height: "fit-content",
            }}
          >
            <h6
              className="text-start"
              style={{
                color: "#204969",
                marginBottom: "-15px",
              }}
            >
              Filter
            </h6>
            {/* Price filter */}
            <div className="pricefilter">
              <div className="price-sort mt-4 mb-2 me-2">
                <div className="d-flex flex-row align-items-center">
                  <div className="d-flex flex-row border">
                    <div className="field">
                      <input
                        style={{
                          maxWidth: "120px",
                          fontSize: "14px",
                          height: "40px",
                          width: "70px",
                          border: "none",
                        }}
                        type="text"
                        className="input-min"
                        value={minPrice}
                        placeholder="Min"
                        onChange={(e) => setMinPrice(e.target.value)}
                      />
                    </div>
                    <div className="mt-2">-</div>
                    <div className="field ms-2">
                      <input
                        style={{
                          maxWidth: "120px",
                          fontSize: "14px",
                          height: "40px",
                          width: "70px",
                          border: "none",
                        }}
                        type="text"
                        value={maxPrice}
                        placeholder="Max"
                        onChange={(e) => setMaxPrice(e.target.value)}
                        className="input-max"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Price sort */}
              <div className="price-sort mt-4 mb-2">
                <div className="d-flex flex-column">
                  <select
                    class="form-control searchbycategory border"
                    id="category"
                    value={sortByPrice}
                    onChange={handleSortByPriceChange}
                    style={{
                      maxWidth: "154px",
                      fontSize: "14px",
                      borderRadius: "0px",
                      height: "42px",
                    }}
                  >
                    <option>Sort By Price</option>
                    <option value="priceLowToHigh">Price: Low to High</option>
                    <option value="priceHighToLow">Price: High to Low</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-8 col-sm-12">
            {/* Product grid */}
            <div className="row product__filter">
              {loading ? (
                <p>Loading...</p>
              ) : error ? (
                <p>Error: {error}</p>
              ) : (
                (filteredProducts || products).map((product) => (
                  <div
                    key={product._id}
                    className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix"
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
                        <h6 className="h6Home">{product.name}</h6>
                        <h6 className="h6Home">{product.brand}</h6>
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
                            <input
                              className="inputHome"
                              type="radio"
                              id="pc-22"
                            />
                          </label>
                          <label className="active black" htmlFor="pc-23">
                            <input
                              className="inputHome"
                              type="radio"
                              id="pc-23"
                            />
                          </label>
                          <label className="grey" htmlFor="pc-24">
                            <input
                              className="inputHome"
                              type="radio"
                              id="pc-24"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Furniture;
