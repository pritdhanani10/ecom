import React, { useContext, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Title from "./Title";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import Item from "./Item";
import { ShopContext } from "../context/ShopContext";

const NewArrivals = () => {
  const { products } = useContext(ShopContext);
  const [newArrivals, setNewArrivals] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const data = products.slice(0, 10);
    setNewArrivals(data);
  }, [products]);

  return (
    <section className="max-padd-container pt-16 pb-6 bg-primary" data-aos="fade-up">
      <Title title1={"New"} title2={"Arrivals"} titleStyles={"pb-10"} paraStyles={"!block"} />

      {/* Swiper Container */}
      <div data-aos="zoom-in">
        <Swiper
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            400: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay, Pagination]}
          className="h-[555px] sm:h-[411px] md:h-[488px]"
        >
          {newArrivals.map((product, index) => (
            <SwiperSlide key={product._id} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="transition-transform duration-300 hover:scale-105 hover:shadow-lg rounded-xl">
                <Item product={product} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default NewArrivals;