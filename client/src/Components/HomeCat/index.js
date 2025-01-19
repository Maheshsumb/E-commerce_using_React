import React, { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const HomeCat = () => {
  const [itemBg, setItemBg] = useState([
    "#fffceb",

    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
    "#feefea",
    "#fffceb",
    "#feefea",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
    "#feefea",
    "#fffceb",
    "#feefea",
    "#ecffec",
  ]);
  return (
    <section className="homeCat">
      <div className="container">
        <h3 className="mb-3 hd">Featured Categories</h3>
        <Swiper
          spaceBetween={5}
          slidesPerView={10}
          navigation={true}
          slidesPerGroup={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          modules={[Navigation]}
          className="mySwiper"
        >
          {itemBg.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="item text-center cursor"
                style={{ backgroundColor: item }}
              >
                <img
                  src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-9.png"
                  alt=""
                />
                <h6>Red Apple</h6>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default HomeCat;
