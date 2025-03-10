import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import banner from "../assets/banner.png";

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="mx-auto max-w-[1440px]">
      <div className="flexBetween bg-white">
        {/* Left Side */}
        <div
          className="hidden lg:block flex-1 px-6 xl:px-12"
          data-aos="fade-right"
        >
          <h2 className="h2 uppercase">Affordable Style, Timeless Appeal</h2>
          <h3 className="h4 uppercase">Transform Your Closet Today</h3>
          <div className="flex mt-5">
            <Link
              to={"/collection"}
              className="btn-secondary !py-0 !pr-0 rounded-full flexCenter gap-x-2 group"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Explore Collection
              <FaArrowRight className="bg-white text-tertiary rounded-full h-9 w-9 p-3 m-[3px] group-hover:rotate-[20deg] transition-all duration-500" />
            </Link>
          </div>
        </div>

        {/* Image Side */}
        <div className="flex-1" data-aos="fade-left">
          <img
            src={banner}
            alt="Banner"
            className="rounded-tl-3xl rounded-bl-3xl transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;