import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";
import { useRef, useState } from "react";

const ProductZoom = () => {
  const [slideIndex, setslideIndex] = useState(0);
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
    <div className="">
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
  );
};
export default ProductZoom;
