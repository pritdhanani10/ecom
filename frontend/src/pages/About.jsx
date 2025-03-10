import React from "react";
import about1 from "../assets/blogs/blog1.png";
import about2 from "../assets/blogs/blog2.png";
import icon1 from "../assets/testimonials/icon_1.png";
import icon2 from "../assets/testimonials/icon_2.png";
import icon3 from "../assets/testimonials/icon_3.png";
import icon4 from "../assets/testimonials/icon_4.png";
import Footer from "../components/Footer";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import "../index.css";

const About = () => {
  return (
    <div>
      {/* Banner Section */}
      <section className="bg-hero bg-cover bg-center bg-no-repeat w-full h-full p-20 sm:p-44 flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-dark capitalize">About Us</h1>
          <div className="bg-white p-3 rounded-2xl mx-auto mt-6">
            <h5 className="text-secondary text-lg flex justify-center gap-x-2 uppercase">
              <a href="/">Home</a> / <a href="/about">About Us</a>
            </h5>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-secondary">About Us</h1>
          <p className="text-lg">Discover the Essence of Heritage Through Traditional Wear</p>
        </div>
        <div className="max-w-screen-xl mx-auto flex flex-wrap items-center">
          <div className="w-full sm:w-1/2 p-4">
            <img src={about1} alt="About Us" className="w-full rounded-xl" />
          </div>
          <div className="w-full sm:w-1/2 p-6">
            <h2 className="text-3xl font-bold text-secondary">Welcome to Taste of Tradition</h2>
            {[
              "At Taste of Tradition, we bring you on a journey through the rich and diverse heritage of Gujarat's traditional attire.",
              "Our mission is to celebrate the timeless craftsmanship passed down through generations, preserving cultural heritage and offering authentic ethnic wear.",
              "Gujarat's traditional wear is a blend of vibrant colors, intricate embroidery, and exquisite handwoven fabrics.",
              "Each piece reflects the artistry and cultural essence of the region. From the elegant Patola sarees to the intricate Bandhani dupattas, every design tells a story of heritage and craftsmanship.",
            ].map((text, index) => (
              <p key={index} className="text-base mt-4 leading-7 flex items-center">
                
                <span className="text-2xl text-secondary mr-3"><IoIosArrowDroprightCircle /></span>{text}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 bg-primary text-white">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-secondary">Our Mission</h1>
          <p className="text-lg">Preserving Heritage, Empowering Artisans, and Promoting Sustainable Fashion</p>
        </div>
        <div className="max-w-screen-xl mx-auto flex flex-wrap items-center">
          <div className="w-full sm:w-1/2 p-6">
            <h2 className="text-3xl font-bold text-black">Our Purpose</h2>
            {[
              { title: "Preserving Heritage", text: "Supporting artisans and keeping traditional techniques alive through ethically made clothing." },
              { title: "Promoting Sustainable Fashion", text: "Encouraging the use of eco-friendly materials and sustainable production methods to minimize environmental impact." },
              { title: "Empowering Artisans", text: "Providing a platform for skilled craftspeople to showcase their work, ensuring fair wages and ethical labor practices." },
              { title: "Connecting Cultures", text: "Bridging the gap between generations by making timeless ethnic wear accessible to a global audience." },
            ].map((item, index) => (
              <p key={index} className="text-base mt-4 leading-7 flex items-start">
                <span>
                  <strong className="text-secondary">{item.title}:</strong> {item.text}
                </span>
              </p>
            ))}
          </div>
          <div className="w-full sm:w-1/2 p-4">
            <img src={about2} alt="Our Mission" className="w-full rounded-xl" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 flex flex-wrap justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-screen-lg mx-auto">
          {[
            { img: icon1, text: "100% Authentic Products" },
            { img: icon2, text: "Secured & Flexible Payments" },
            { img: icon3, text: "Fast Shipping With Location" },
            { img: icon4, text: "Be A Part With Us & Help Promote Culture" },
          ].map((item, index) => (
            <div key={index} className="bg-primary border-b-4 border-b-secondary p-6 text-center rounded-2xl shadow-lg">
              <img src={item.img} alt="service icon" className="mx-auto w-16 h-16" />
              <p className="text-xl mt-4 font-semibold">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;