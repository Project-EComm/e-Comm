import React from "react";
import { useCart } from "../context/cart";
import { useAuth } from "../context/auth";
import { NavLink } from "react-router-dom";
import { LuIndianRupee } from "react-icons/lu";
const CartPage = () => {
  const [auth] = useAuth();
  const [cart, setCart] = useCart();

  //total price
  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((item) => {
        if (item.sales) {
          total += item.salePrice;
        } else {
          total += item.price;
        }
      });
      return total.toLocaleString("en-US", {
        style: "currency",
        currency: "INR",
      });
    } catch (error) {
      console.log(error);
    }
  };
  //detele item
  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container">
        <div className="wrapper wrapper-content animated fadeInRight">
          <div className="row">
            <div className="col-md-9">
              <div className="ibox">
                <div className="ibox-title">
                  <span className="pull-right">
                    {cart?.length === 0 ? "" : cart?.length + " items"}
                  </span>
                  <h5>Items in your cart</h5>
                </div>
                <div className="ibox-content">
                  <div className="table-responsive">
                    <table className="table shoping-cart-table">
                      <tbody>
                        {cart?.map((p) => (
                          <tr>
                            <td width={90}>
                              <div className="cart-product-imitation">
                                <img
                                  src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`}
                                  alt="Product"
                                  style={{
                                    width: "90px",
                                  }}
                                />
                              </div>
                            </td>
                            <td className="desc" width={350}>
                              <h3>
                                <a
                                  href="#!"
                                  className="h4"
                                  style={{
                                    color: "#204969",
                                  }}
                                >
                                  {p.name}
                                </a>
                              </h3>

                              <div className="m-t-sm">{p.brand}</div>
                            </td>
                            <td>
                              <p
                                className={`h6Home ${
                                  p.sales === true
                                    ? "text-decoration-line-through text-muted"
                                    : ""
                                }`}
                              >
                                <LuIndianRupee />
                                {p.price}
                              </p>
                              {p.sales === true ? (
                                <p className="h6Home ms-1 text-danger">
                                  {p.salePrice}
                                </p>
                              ) : (
                                ""
                              )}
                            </td>
                            <td width={60}>
                              <input
                                type="text"
                                className="form-control"
                                style={{
                                  width: "50px",
                                  height: "30px",
                                  textAlign: "center",
                                }}
                                placeholder={1}
                                defaultValue={1}
                              />
                            </td>
                            <td>
                              <a
                                href="#!"
                                onClick={() => removeCartItem(p._id)}
                                className="remove text-danger"
                              >
                                <i className="fa fa-close" />
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="ibox-content">
                  <button className="btn btn-primary pull-right btn-jelly">
                    <i className="fa fa fa-shopping-cart" /> Checkout
                  </button>
                  <NavLink to="/" className="btn btn-white btn-jelly">
                    <i className="fa fa-arrow-left" /> Continue shopping
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="ibox">
                <div className="ibox-title">
                  <h5>Cart Summary</h5>
                </div>
                <div className="ibox-content">
                  <span>Total</span>
                  <h2 className="font-bold">{totalPrice()}</h2>
                  <hr />
                  <div className="m-t-sm text-center">
                    <div className="btn-group">
                      <a href="#!" className="btn btn-primary btn-jelly btn-sm">
                        <i className="fa fa-shopping-cart" /> Checkout
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ibox">
                <div className="ibox-title">
                  <h5>User Information</h5>
                </div>
                <div className="ibox-content text-dark">
                  <p>
                    Name: {auth?.user?.first_name + " " + auth?.user?.last_name}
                  </p>
                  <span className="small">
                    Phone Number: {auth?.user?.phoneNumber}
                    <br />
                    Address: {auth?.user?.address}, {auth?.user?.city},
                    {auth?.user?.state} {auth?.user?.pincode}.
                  </span>
                  <br />
                  <div className="m-t-sm text-center mt-3">
                    <NavLink
                      to="/dashboard/updateprofile"
                      className="btn btn-white btn-jelly"
                    >
                      Update Address <i className="fa fa-edit" />
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
