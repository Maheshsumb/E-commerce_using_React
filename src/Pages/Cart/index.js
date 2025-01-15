import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
import QuantityBox from "../../Components/QuantityBox";
import { IoIosClose } from "react-icons/io";
import { Button } from "@mui/material";
import { IoCartSharp } from "react-icons/io5";
const Cart = () => {
  return (
    <>
      <section className="section cartPage">
        <div className="container">
          <h2 className="hd mb-1">Your Cart</h2>
          <p>
            There are <b className="txt-red">3</b> products in your cart.
          </p>
          <div className="row">
            <div className="col-md-9 pr-5">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th width="35%">Products</th>
                      <th width="15%">Unit Price</th>
                      <th width="25%">Quantity</th>
                      <th width="15%">Subtotal</th>
                      <th width="10%">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td width="35%">
                        <Link to="/product/1">
                          <div className="cartItemImageWrapper d-flex align-items-center justify-content-center ">
                            <div className="imageWrapper ">
                              <img
                                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg"
                                alt=""
                                className="w-100"
                              />
                            </div>
                            <div className="info px-3">
                              <h6>
                                All Natural Italian-Style Chicken Meatballs
                              </h6>
                              <Rating
                                name="read-only"
                                value={4.5}
                                readOnly
                                precision={0.5}
                                size="small"
                              />
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td width="15%">$14</td>
                      <td width="25%">
                        <QuantityBox />
                      </td>
                      <td width="15%">$28</td>
                      <td width="10%">
                        <span className="remove cursor">
                          <IoIosClose />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td width="35%">
                        <Link to="/product/1">
                          <div className="cartItemImageWrapper d-flex align-items-center justify-content-center ">
                            <div className="imageWrapper ">
                              <img
                                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg"
                                alt=""
                                className="w-100"
                              />
                            </div>
                            <div className="info px-3">
                              <h6>
                                All Natural Italian-Style Chicken Meatballs
                              </h6>
                              <Rating
                                name="read-only"
                                value={4.5}
                                readOnly
                                precision={0.5}
                                size="small"
                              />
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td width="15%">$14</td>
                      <td width="25%">
                        <QuantityBox />
                      </td>
                      <td width="15%">$28</td>
                      <td width="10%">
                        <span className="remove cursor">
                          <IoIosClose />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td width="35%">
                        <Link to="/product/1">
                          <div className="cartItemImageWrapper d-flex align-items-center justify-content-center ">
                            <div className="imageWrapper ">
                              <img
                                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg"
                                alt=""
                                className="w-100"
                              />
                            </div>
                            <div className="info px-3">
                              <h6>
                                All Natural Italian-Style Chicken Meatballs
                              </h6>
                              <Rating
                                name="read-only"
                                value={4.5}
                                readOnly
                                precision={0.5}
                                size="small"
                              />
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td width="15%">$14</td>
                      <td width="25%">
                        <QuantityBox />
                      </td>
                      <td width="15%">$28</td>
                      <td width="10%">
                        <span className="remove cursor">
                          <IoIosClose />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td width="35%">
                        <Link to="/product/1">
                          <div className="cartItemImageWrapper d-flex align-items-center justify-content-center ">
                            <div className="imageWrapper ">
                              <img
                                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg"
                                alt=""
                                className="w-100"
                              />
                            </div>
                            <div className="info px-3">
                              <h6>
                                All Natural Italian-Style Chicken Meatballs
                              </h6>
                              <Rating
                                name="read-only"
                                value={4.5}
                                readOnly
                                precision={0.5}
                                size="small"
                              />
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td width="15%">$14</td>
                      <td width="25%">
                        <QuantityBox />
                      </td>
                      <td width="15%">$28</td>
                      <td width="10%">
                        <span className="remove cursor">
                          <IoIosClose />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td width="35%">
                        <Link to="/product/1">
                          <div className="cartItemImageWrapper d-flex align-items-center justify-content-center ">
                            <div className="imageWrapper ">
                              <img
                                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg"
                                alt=""
                                className="w-100"
                              />
                            </div>
                            <div className="info px-3">
                              <h6>
                                All Natural Italian-Style Chicken Meatballs
                              </h6>
                              <Rating
                                name="read-only"
                                value={4.5}
                                readOnly
                                precision={0.5}
                                size="small"
                              />
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td width="15%">$14</td>
                      <td width="25%">
                        <QuantityBox />
                      </td>
                      <td width="15%">$28</td>
                      <td width="10%">
                        <span className="remove cursor">
                          <IoIosClose />
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card border p-3 cartDetails">
                <h4>CART TOTALS</h4>
                <div className="d-flex align-items-center mb-3">
                  <span>Subtotal</span>
                  <span className="ml-auto txt-red">$25.0</span>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <span>Shipping</span>
                  <span className="ml-auto">
                    <b>Free</b>
                  </span>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <span>Estimated for</span>
                  <span className="ml-auto">
                    <b>United Kingdom</b>
                  </span>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <span>Total</span>
                  <span className="ml-auto txt-green">
                    <b>$22.0</b>
                  </span>
                </div>
                <br />
                <Button className="btn-blue btn-lg   ">
                  <IoCartSharp className="mr-2" />
                  Add to cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
