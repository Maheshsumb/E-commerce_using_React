import { Button } from "@mui/material";
import HomeBanner from "../../Components/HomeBanner";
import banner1 from "../../assets/images/banner1.jpeg";
import banner2 from "../../assets/images/banner2.png";
import banner3 from "../../assets/images/banner3.jpg";
import banner4 from "../../assets/images/banner4.jpg";
import newsLatterImg from "../../assets/images/newsLaterImg.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoMailOutline } from "react-icons/io5";

import ProductItems from "../../Components/ProductItems";
import HomeCat from "../../Components/HomeCat";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <HomeCat />
      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="sticky">
                <div className="banner">
                  <img src={banner1} alt="" className="cursor w-100" />
                </div>
                <div className="banner mt-4">
                  <img src={banner2} alt="" className="cursor w-100" />
                </div>
              </div>
            </div>
            <div className="col-md-9 productRow">
              <div className="d-flex align-items-center">
                <div className="info w-75">
                  <h3 className="mb-0 hd">BEST SELLER</h3>
                  <p className="text-light text-sml mb-0">
                    Do not miss the current offers until the end of March.
                  </p>
                </div>
                <Button className="viewAllBtn ml-auto">
                  View All <IoIosArrowRoundForward />
                </Button>
              </div>
              <div className="product_row w-100 mt-4">
                <Swiper
                  spaceBetween={0}
                  slidesPerView={4}
                  navigation={true}
                  slidesPerGroup={3}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <ProductItems />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItems />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItems />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItems />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItems />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItems />
                  </SwiperSlide>
                </Swiper>
              </div>

              <div className="d-flex align-items-center mt-4">
                <div className="info w-75">
                  <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                  <p className="text-light text-sml mb-0">
                    New products with updated stocks.
                  </p>
                </div>
                <Button className="viewAllBtn ml-auto">
                  View All <IoIosArrowRoundForward />
                </Button>
              </div>
              <div className="product_row productRow2 w-100 mt-4 d-flex">
                <ProductItems />
                <ProductItems />
                <ProductItems />
                <ProductItems />
                <ProductItems />
                <ProductItems />
                <ProductItems />
                <ProductItems />
              </div>
              <div className="d-flex mt-4 mb-5 bannerSection">
                <div className="banner">
                  <img src={banner3} alt="" className="cursor w-100" />
                </div>
                <div className="banner">
                  <img src={banner4} alt="" className="cursor w-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="text-white mb-1">
                $20 discount for your first order
              </p>
              <h3 className="text-white">Join our newsletter and get...</h3>
              <p className="text-light">
                Join our email subscription now to get updates on <br />
                promotions and coupons.
              </p>

              <form action="">
                <IoMailOutline />
                <input
                  type="text"
                  placeholder="Your email address"
                  name=""
                  id=""
                />
                <Button>Subscribe</Button>
              </form>
            </div>
            <div className="col-md-6">
              <img src={newsLatterImg} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
