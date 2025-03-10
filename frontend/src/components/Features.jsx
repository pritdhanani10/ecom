import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../assets/features/feature1.png";
import img2 from "../assets/features/feature2.png";

const Features = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="max-padd-container pt-14 pb-20">
      {/* container */}
      <div
        className="grid grid-cols-1 xl:grid-cols-[1.5fr_2fr] gap-6 gap-y-12 rounded-xl"
        data-aos="fade-up"
      >
        <div className="flexCenter gap-x-10">
          <div data-aos="zoom-in">
            <img
              src={img1}
              alt="featureImg"
              height={77}
              width={222}
              className="rounded-full transition-transform duration-300 hover:scale-110"
            />
          </div>

          <div data-aos="zoom-in" data-aos-delay="200">
            <img
              src={img2}
              alt="featureImg"
              height={77}
              width={222}
              className="rounded-full transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>

        <div
          className="flexCenter flex-wrap sm:flex-nowrap gap-x-5"
          data-aos="fade-left"
        >
          {[
            { title: "Quality Product", delay: "100" },
            { title: "Fast Delivery", delay: "200" },
            { title: "Secure Payment", delay: "300" },
          ].map((item, index) => (
            <div
              key={index}
              className="p-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-b-4 hover:border-b-secondary"
              data-aos="fade-up"
              data-aos-delay={item.delay}
            >
              <h4 className="h4 capitalize">{item.title}</h4>
              <p className="dark:text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;