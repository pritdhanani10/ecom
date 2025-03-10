import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import heroImg from "../assets/hero.png";
import { BsFire } from "react-icons/bs";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="max-padd-container bg-hero bg-cover bg-center bg-no-repeat h-[667px] w-full mb-10 relative"
      data-aos="fade-up"
    >
      {/* Left Side Image & Text Box */}
      <div
        className="bg-white p-3 rounded-2xl max-w-[233px] relative top-8 xl:top-12"
        data-aos="zoom-in"
      >
        <div className="relative">
          <img
            src={heroImg}
            alt="Hero"
            height={211}
            width={211}
            className="rounded-3xl mb-3"
          />
          <span className="absolute top-1/2 left-1/2 flexCenter -translate-y-1/2 -translate-x-1/2 h-8 w-8 bg-secondary rounded-full cursor-pointer">
            <span className="absolute h-full w-full rounded-full bg-white opacity-50 animate-ping"></span>
            <FaPlay className="text-sm relative left-[1px] text-white" />
          </span>
        </div>
        <p className="text-[13px]">
          <b className="uppercase">Unlock</b> your best look, one click at a
          time. Your style upgrade starts here, shop today!
        </p>
      </div>

      {/* Main Hero Text & CTA */}
      <div className="mt-12 sm:mt-20 xl:mt-40 max-w-[777px]" data-aos="fade-right">
        <h5 className="flex items-baseline gap-x-2 uppercase text-secondary medium-18">
          MODERN COLLECTION <BsFire />
        </h5>
        <h1 className="h1 font-[500] capitalize max-w-[722px]">
          Every click brings you closer to perfection. Shop now!
        </h1>
        <div className="flex" data-aos="fade-up" data-aos-delay="200">
          <Link
            to={"/collection"}
            className="bg-white text-xs font-medium capitalize pl-5 rounded-full flexCenter gap-x-2 group hover:shadow-lg transition-transform hover:scale-105"
          >
            Check our modern collection
            <FaArrowRight className="bg-secondary text-white rounded-full h-11 w-11 p-3 m-[3px] border border-white group-hover:-rotate-[20deg] transition-all duration-500" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;