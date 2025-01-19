import ProductZoom from "../../Components/ProductZoom";
import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import QuantityBox from "../../Components/QuantityBox";
import { IoMdCart } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { MdCompareArrows } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
import RelatedProducts from "./RelatedProducta";

const ProductDetails = () => {
  const [activeSize, setActiveSize] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const isActive = (index) => {
    setActiveSize(index);
  };
  const setActiveTabs = (index) => {
    setActiveTab(index);
  };
  return (
    <>
      <section className="productDetails section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 pl-5">
              <ProductZoom />
            </div>
            <div className="col-md-7 pl-5 pr-5">
              <h2 className="hd text-capitalize">
                All Natural Italian-Style Chicken Meatballs
              </h2>
              <ul className="list list-inline d-flex align-items-center">
                <li className="list-inline-item">
                  <div className="d-flex align-items-center">
                    <span className="text-light mr-2">Brands :</span>
                    <span>Welch's</span>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div className="d-flex align-items-center">
                    <Rating
                      name="read-only"
                      value={4.5}
                      precision={0.5}
                      size="small"
                      readOnly
                    />
                    <span className="text-light cursor ml-2">1 review</span>
                  </div>
                </li>
              </ul>

              <div className="d-flex info mb-3">
                <span className="oldPrice lgO">$20</span>
                <span className="netPrice text-danger ml-2 lgN">$14</span>
              </div>
              <span class="badge bg-success">In Stock</span>

              <p className="mt-3">
                Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus
                malesuada tincidunt. Class aptent taciti sociosqu ad litora
                torquent Vivamus adipiscing nisl ut dolor dignissim semper.
                Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu
                ad litora torquent Vivamus adipiscing nisl ut dolor dignissim
                semper. Nulla luctus malesuada tincidunt. Class aptent taciti
                sociosqu ad litora torquent
              </p>

              {/* <a></a> are used instead of <Buttons> */}
              <div className="productSize d-flex align-items-center">
                <span>Size / Weight:</span>
                <ul className="list list-inline-inline mb-0 pl-4">
                  <li className="list-inline-item">
                    <Button
                      className={`tag ${activeSize === 0 ? "active" : ""}`}
                      onClick={() => {
                        isActive(0);
                      }}
                    >
                      50g
                    </Button>
                  </li>
                  <li className="list-inline-item">
                    <Button
                      className={`tag ${activeSize === 1 ? "active" : ""}`}
                      onClick={() => {
                        isActive(1);
                      }}
                    >
                      100g
                    </Button>
                  </li>
                  <li className="list-inline-item">
                    <Button
                      className={`tag ${activeSize === 2 ? "active" : ""}`}
                      onClick={() => {
                        isActive(2);
                      }}
                    >
                      150g
                    </Button>
                  </li>
                  <li className="list-inline-item">
                    <Button
                      className={`tag ${activeSize === 3 ? "active" : ""}`}
                      onClick={() => {
                        isActive(3);
                      }}
                    >
                      200g
                    </Button>
                  </li>
                  <li className="list-inline-item">
                    <Button
                      className={`tag ${activeSize === 4 ? "active" : ""}`}
                      onClick={() => {
                        isActive(4);
                      }}
                    >
                      250g
                    </Button>
                  </li>
                </ul>
              </div>
              <div className="d-flex align-items-center">
                <QuantityBox />
                <Tooltip title="Add to cart" placement="bottom">
                  <Button className="btn-blue btn-lg btn-big btn-round ml-3">
                    <IoMdCart />
                    &nbsp; Add to cart
                  </Button>
                </Tooltip>
                <Tooltip title="Add to Wishlist" placement="bottom">
                  <Button className="btn-blue btn-circle ml-4">
                    <FaRegHeart />
                  </Button>
                </Tooltip>
                <Tooltip title="Add to Compare" placement="bottom">
                  <Button
                    variant="outlined"
                    className="btn-blue btn-circle ml-3"
                  >
                    <MdCompareArrows />
                  </Button>
                </Tooltip>
              </div>
            </div>
          </div>
          <br />
          <div className="card mt-5 p-5 detailsPageTabs">
            <div className="customTabs">
              <ul className="list list-inline">
                <li className="list-inline-item">
                  <Button
                    className={`${activeTab === 0 && "active"} textUpperCase`}
                    onClick={() => {
                      setActiveTabs(0);
                    }}
                  >
                    Description
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button
                    className={`${activeTab === 1 && "active"} textUpperCase`}
                    onClick={() => {
                      setActiveTabs(1);
                    }}
                  >
                    Additional information
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button
                    className={`${activeTab === 2 && "active"} textUpperCase`}
                    onClick={() => {
                      setActiveTabs(2);
                    }}
                  >
                    Reviews(1)
                  </Button>
                </li>
              </ul>

              <br />
              {activeTab === 0 && (
                <div className="tabContent">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Natus, nisi omnis. Facere dolore illum repellendus quos
                    totam nesciunt incidunt nisi. Quae sapiente nesciunt,
                    dolorem facilis mollitia perferendis non assumenda eveniet
                    nostrum, dolorum, ex sed. Non accusantium consequatur
                    eveniet, rem quidem voluptas. Voluptatum ratione aspernatur
                    necessitatibus! Necessitatibus hic adipisci ut nisi nostrum,
                    iste non nesciunt autem! Nihil rem placeat voluptas debitis
                    quas, impedit sit perspiciatis, nemo dicta ducimus assumenda
                    distinctio tempore.
                  </p>
                </div>
              )}

              {activeTab === 1 && (
                <div className="tabContent">
                  <div className="table-responsive">
                    <table className="table table bordered">
                      <tbody>
                        <tr className="stand-up">
                          <th>Stand Up</th>
                          <td>
                            <p>35"L x 37-45"H(front to back wheel)</p>
                          </td>
                        </tr>
                        <tr className="folded-wo-wheels">
                          <th>Folded (w/o wheels)</th>
                          <td>
                            <p>32.5"L x 18.5"W x 16.5"H</p>
                          </td>
                        </tr>
                        <tr className="folded-w-wheels">
                          <th>Folded (w/wheels)</th>
                          <td>
                            <p>32.5"L x 24"W x 18.5"H</p>
                          </td>
                        </tr>
                        <tr className="door-pass-through">
                          <th>Door Pass Through</th>
                          <td>
                            <p>24</p>
                          </td>
                        </tr>
                        <tr className="frame">
                          <th>Frame</th>
                          <td>
                            <p>Aluminum</p>
                          </td>
                        </tr>
                        <tr className="weight-eo-wheels">
                          <th>Weight(w/o wheels)</th>
                          <td>
                            <p>20 LBS</p>
                          </td>
                        </tr>
                        <tr className="weight-capacity">
                          <th>Weight Capacity</th>
                          <td>
                            <p>60 LBS</p>
                          </td>
                        </tr>
                        <tr className="width">
                          <th>Width</th>
                          <td>
                            <p>24"</p>
                          </td>
                        </tr>
                        <tr className="handle-height-ground-to-handle">
                          <th>Handle height (ground to handle)</th>
                          <td>
                            <p>35-45"</p>
                          </td>
                        </tr>
                        <tr className="wheels">
                          <th>wheels</th>
                          <td>
                            <p>12" air / wide track slick tread</p>
                          </td>
                        </tr>
                        <tr className="seat-back-height">
                          <th>Seat back height</th>
                          <td>
                            <p>21.5"</p>
                          </td>
                        </tr>
                        <tr className="head-room-inside-canopy">
                          <th>Head room (inside canopy)</th>
                          <td>
                            <p>25"</p>
                          </td>
                        </tr>
                        <tr className="pa_color">
                          <th>Color</th>
                          <td>
                            <p>Black, Blue, Red, White</p>
                          </td>
                        </tr>
                        <tr className="pa_size">
                          <th>Size</th>
                          <td>
                            <p>M, S</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              {activeTab === 2 && (
                <div className="tabContent">
                  <div className="row">
                    <div className="col-md-8">
                      <h3>Customer questions & answers</h3>
                      <br />
                      <div className="card p-4 reviewsCard flex-row">
                        <div className="image">
                          <div className="rounded-circle">
                            <img
                              src="https://blog-frontend.envato.com/cdn-cgi/image/width=1200,quality=85,format=auto/uploads/2024/10/MHM-Envato.png"
                              alt=""
                            />
                          </div>
                          <span className="text-g d-block text-center font-weight-bold">
                            Mahi verma
                          </span>
                        </div>
                        <div className="info pl-5">
                          <div className="d-flex align-items-center w-100">
                            <h5 className="text-light">01/03/2000</h5>
                            <div className="ml-auto">
                              <Rating
                                name="half-rating-read"
                                value={4.5}
                                precision={0.5}
                                readOnly
                                size="small"
                              ></Rating>
                            </div>
                          </div>
                          <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Nulla eum ducimus quas, odit officia sapiente
                            sit maxime magnam vitae. Officiis provident ut et
                            asperiores debitis culpa. Labore veniam expedita
                            dolore?
                          </p>
                        </div>
                      </div>

                      <br className="res-hide" />
                      <br className="res-hide" />
                      <form className="reviewForm">
                        <h4>Add a review</h4>
                        <br />
                        <div className="form-group">
                          <textarea
                            name="review"
                            placeholder="Write a review"
                            className="form-control"
                          ></textarea>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                placeholder="Name"
                                name="userName"
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <Rating
                                name="rating"
                                value={4.5}
                                precision={0.5}
                                size="small"
                              ></Rating>
                            </div>
                          </div>
                        </div>
                        <br />
                        <div className="form-group">
                          <Button
                            type="submit"
                            className="btn-blue btn-lg btn-round"
                          >
                            Submit Review
                          </Button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <br />
          <RelatedProducts title="Related Products" />
          <RelatedProducts title="Recently viewed Products" />
        </div>
      </section>
    </>
  );
};
export default ProductDetails;
