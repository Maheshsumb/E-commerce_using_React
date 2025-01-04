import { Button } from "@mui/material";
import { Dialog } from "@mui/material";
import { MdClose } from "react-icons/md";
import Rating from "@mui/material/Rating";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";
import { useContext, useRef, useState } from "react";
import QuantityBox from "../QuantityBox";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineCompareArrows } from "react-icons/md";
import { MyContext } from "../../App";

const ProductModal = () => {
  const [slideIndex, setslideIndex] = useState(0);
  const context = useContext(MyContext);
  const zoomSliderBig = useRef();
  const zoomSlider = useRef();

  // Function to sync sliders
  const handleSlideChange = (swiper) => {
    setslideIndex(swiper.activeIndex); // Update the active index
    zoomSlider.current.swiper.slideTo(swiper.activeIndex); // Sync small slider
  };

  const goTo = (index) => {
    setslideIndex(index);
    zoomSlider.current.swiper.slideTo(index);
    zoomSliderBig.current.swiper.slideTo(index);
  };

  return (
    <>
      <Dialog
        open={true}
        onClose={() => {
          context.setisOpenProductModal(false);
        }}
        className="productModal"
      >
        <Button
          className="close_"
          onClick={() => {
            context.setisOpenProductModal(false);
          }}
        >
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
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                navigation={false}
                slidesPerGroup={1}
                modules={[Navigation]}
                className="zoomSliderBig"
                ref={zoomSliderBig}
                onSlideChange={handleSlideChange} // Listen for slide changes
              >
                <SwiperSlide>
                  <div className="item">
                    <InnerImageZoom
                      zoomType="hover"
                      zoomScale={1}
                      src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <InnerImageZoom
                      zoomType="hover"
                      zoomScale={1}
                      src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47.jpg"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <InnerImageZoom
                      zoomType="hover"
                      zoomScale={1}
                      src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35.jpg"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <InnerImageZoom
                      zoomType="hover"
                      zoomScale={1}
                      src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35.jpg"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <InnerImageZoom
                      zoomType="hover"
                      zoomScale={1}
                      src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35.jpg"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <Swiper
              spaceBetween={10}
              slidesPerView={4}
              navigation={true}
              slidesPerGroup={1}
              modules={[Navigation]}
              className="zoomSlider m-auto"
              ref={zoomSlider}
            >
              <SwiperSlide>
                <div className={`item ${slideIndex === 0 && "item_active"}`}>
                  <img
                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg"
                    alt=""
                    className="w-100"
                    onClick={() => goTo(0)}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`item ${slideIndex === 1 && "item_active"}`}>
                  <img
                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47.jpg"
                    alt=""
                    className="w-100"
                    onClick={() => goTo(1)}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`item ${slideIndex === 2 && "item_active"}`}>
                  <img
                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35.jpg"
                    alt=""
                    className="w-100"
                    onClick={() => goTo(2)}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`item ${slideIndex === 3 && "item_active"}`}>
                  <img
                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35.jpg"
                    alt=""
                    className="w-100"
                    onClick={() => goTo(3)}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`item ${slideIndex === 4 && "item_active"}`}>
                  <img
                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35.jpg"
                    alt=""
                    className="w-100"
                    onClick={() => goTo(4)}
                  />
                </div>
              </SwiperSlide>
            </Swiper>
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
              <Button className="btn-blue btn-lg btn-big btn-round ml-3">
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
