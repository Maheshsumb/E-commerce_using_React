import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";
const HomeBanner = () => {
  return (
    <div className="container mt-3">
      <div className="homeBannerSection cursor">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          navigation={true}
          slidesPerGroup={1}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="item">
              <img
                src="https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/0bd4ed396dc3d422.jpg?q=20"
                alt="SliderImg"
                className="w-100"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                src="https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/53d384bc93349e52.jpg?q=20"
                alt="SliderImg"
                className="w-100"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                src="https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/d92000a0eed16cc8.jpg?q=20"
                alt="SliderImg"
                className="w-100"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                src="https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/399d2ba520bbcb3a.jpeg?q=20"
                alt="SliderImg"
                className="w-100"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                src="https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/7a10826196537091.jpeg?q=20"
                alt="SliderImg"
                className="w-100"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                src="https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/7f3cde58a30f6024.jpg?q=20"
                alt="SliderImg"
                className="w-100"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                src="https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/d9290fb51138d286.png?q=20"
                alt="SliderImg"
                className="w-100"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                src="https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/9dcf7a9e1315ab8d.jpeg?q=20"
                alt="SliderImg"
                className="w-100"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default HomeBanner;
