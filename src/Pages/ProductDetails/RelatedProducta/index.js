import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ProductItems from "../../../Components/ProductItems";
const RelatedProducts = (props) => {
  return (
    <>
      <div className="d-flex align-items-center mt-3">
        <div className="info w-75">
          <h3 className="mb-0 hd">{props.title}</h3>
        </div>
      </div>
      <div className="product_row w-100 mt-4">
        <Swiper
          spaceBetween={0}
          slidesPerView={6}
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
    </>
  );
};
export default RelatedProducts;
