import { Button } from "@mui/material";
import { Dialog } from "@mui/material";
import { MdClose } from "react-icons/md";
import Rating from "@mui/material/Rating";
import Slider from "react-slick";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";
import { useRef } from "react";
import QuantityBox from "../QuantityBox";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineCompareArrows } from "react-icons/md";

const ProductModal = (props) => {
  const zoomSliderBig = useRef();
  const zoomSlider = useRef();
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slideToShow: 3,
    slideToScroll: 1,
    fade: false,
    arrow: true,
  };
  var settings2 = {
    dots: false,
    infinite: false,
    speed: 700,
    slideToShow: 1,
    slideToScroll: 1,
    fade: false,
    arrow: false,
  };
  const goTo = (index) => {
    zoomSlider.current.slickGoTo(index);
    zoomSliderBig.current.slickGoTo(index);
  };
  return (
    <>
      {" "}
      <Dialog
        open={true}
        onClose={props.closeProductModal}
        className="productModal"
      >
        <Button className="close_" onClick={props.closeProductModal}>
          <MdClose />
        </Button>
        <h4 className="mb-1 font-weight-bold">
          All Natural Italian-Style Chicken Meatballs
        </h4>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center mr-4">
            <span>Brands:</span>
            <span className="ml-2">
              <b>Welch's</b>
            </span>
          </div>
          <Rating
            name="read-only"
            value={5}
            readOnly
            size="small"
            precision={0.5}
          />
        </div>
        <hr />
        <div className="row mt-2 productDetailModal">
          <div className="col-md-5">
            <div className="productZoom position-relative">
              <div className="badge badge-primary">28%</div>
              <Slider
                {...settings2}
                className="zoomSliderBig"
                ref={zoomSliderBig}
              >
                <div className="item">
                  <InnerImageZoom
                    zoomType="hover"
                    zoomScale={1}
                    src={
                      "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg"
                    }
                  />
                </div>
                <div className="item">
                  <InnerImageZoom
                    zoomType="hover"
                    zoomScale={1}
                    src={
                      "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47.jpg"
                    }
                  />
                </div>
                <div className="item">
                  <InnerImageZoom
                    zoomType="hover"
                    zoomScale={1}
                    src={
                      "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35.jpg"
                    }
                  />
                </div>
              </Slider>
            </div>
            <Slider {...settings} className="zoomSlider" ref={zoomSlider}>
              <div className="item">
                <img
                  src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg"
                  alt=""
                  className="w-100"
                  onClick={() => goTo(0)}
                />
              </div>
              <div className="item">
                <img
                  src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47.jpg"
                  alt=""
                  className="w-100"
                  onClick={() => goTo(1)}
                />
              </div>
              <div className="item">
                <img
                  src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35.jpg"
                  alt=""
                  className="w-100"
                  onClick={() => goTo(2)}
                />
              </div>
            </Slider>
          </div>
          <div className="col-md-7">
            <div className="d-flex info align-items-center mb-3">
              <span className="oldPrice lg mr-2">$20</span>
              <span className="netPrice text-danger lg">$14</span>
            </div>
            <span className="badge bg-success">In Stock</span>
            <p className="mt-3">
              Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus
              malesuada tincidunt. Class aptent taciti sociosqu ad litora
              torquent
            </p>

            <div className="d-flex align-items-center">
              <QuantityBox />
              <Button className="btn-blue btn-lg btn-big btn-round ml-3 ">
                Add to cart
              </Button>
            </div>

            <div className="d-flex align-items-center mt-5 actions">
              <Button variant="outlined" className="btn-round btn-sml">
                <IoIosHeartEmpty />
                &nbsp; Add to Wishlist
              </Button>
              <Button variant="outlined" className="btn-round btn-sml ml-3">
                <MdOutlineCompareArrows />
                &nbsp; compare
              </Button>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};
export default ProductModal;
