import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image1 from "../assets/hero/women.png";
import Image2 from "../assets/hero/shopping.png";
import Image3 from "../assets/hero/sale.png";
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on all Men's Wear",
    description:
      "His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Image2,
    title: "30% off on all Women's Wear",
    description:
      "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Image3,
    title: "70% off on all Products Sale",
    description:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Heroo = ({ handleOrderPopup }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center duration-200">
      {/* Background pattern */}
      <div className="h-[700px] w-[700px] bg-secondary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>

      {/* Hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* Text content section */}
                <div
                  className="flex flex-col justify-center gap-4 p-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10 transition-transform duration-300 hover:scale-[1.02]"
                  data-aos="fade-right"
                >
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold transition-transform duration-300 hover:scale-105 hover:text-secondary">
                    {data.title}
                  </h1>
                  <p className="text-sm transition-opacity duration-300 hover:opacity-90">
                    {data.description}
                  </p>
                  <div>
                    <Link
                      to={"/collection"}
                      className="btn-secondary w-[180px] !py-0 !pr-0 rounded-full flexCenter gap-x-2 group"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      Order Now
                      <FaArrowRight className="bg-white text-tertiary rounded-full h-9 w-9 p-3 m-[3px] group-hover:rotate-[20deg] transition-all duration-500" />
                    </Link>
                  </div>
                </div>

                {/* Image section */}
                <div className="order-1 sm:order-2 flex justify-center">
                  <div
                    className="relative z-10"
                    data-aos="fade-left"
                    data-aos-delay="200"
                  >
                    <img
                      src={data.img}
                      alt={data.title}
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-100 lg:scale-105 object-contain mx-auto transition-transform duration-300 ease-in-out hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Heroo;
