import React, { useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import about1 from "../assets/blogs/blog1.png";
import { FaTwitter, FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import Footer from "../components/Footer";
import { ShopContext } from "../context/ShopContext";

const Contact = () => {
  const contactDetails = [
    {
      icon: <FaMapMarkerAlt className="text-4xl text-secondary" />,
      title: "New York Address",
      info: "60 Brooklyn Street USA",
    },
    {
      icon: <FaMapMarkerAlt className="text-4xl text-secondary" />,
      title: "Australia Address",
      info: "121 King Street, Melbourne",
    },
    {
      icon: <FaEnvelope className="text-4xl text-secondary" />,
      title: "Email Us",
      info: "example@gmail.com",
    },
    {
      icon: <FaPhone className="text-4xl text-secondary" />,
      title: "Phone Number",
      info: "+96 223-528-8542",
    },
  ];

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
  });

      const { backendUrl } = useContext(ShopContext);
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(backendUrl + "/api/contact/submit", formData);
      if (response.data.success) {
        toast.success("Message sent successfully!");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          topic: "",
          message: "",
        });
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong, please try again.");
    }
  };

  return (
    <div>
      <section className="bg-hero bg-cover bg-center bg-no-repeat w-full h-full p-20 sm:p-44 flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-dark capitalize">
            Contact Us
          </h1>
          <div className="bg-white p-3 rounded-2xl mx-auto mt-6">
            <h5 className="text-secondary text-lg flex justify-center gap-x-2 uppercase">
              <a href="/">Home</a> / <a href="/contact">Contact Us</a>
            </h5>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <div className="flex flex-col md:flex-row items-start justify-center bg-white py-12 px-4 md:px-16 lg:px-32 gap-12">
        {/* Left Section - Heading & Social Icons */}
        <div className="md:w-1/3">
          <h4 className="text-lg text-secondary font-semibold flex items-center gap-2">
            Get In Touch
          </h4>
          <h2 className="text-4xl font-bold text-gray-800 mt-2">
            Have Any Questions?
          </h2>
          <div className="flex gap-4 mt-4 text-secondary text-2xl">
            {[FaTwitter, FaWhatsapp, FaInstagram, FaLinkedin].map(
              (Icon, index) => (
                <div
                  key={index}
                  className="p-3 bg-primary rounded-full shadow-md cursor-pointer transition-all duration-300 transform hover:bg-secondary hover:scale-110 hover:text-white"
                >
                  <Icon />
                </div>
              )
            )}
          </div>
        </div>

        {/* Right Section - Contact Info Cards */}
        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactDetails.map((item, index) => (
            <div
              key={index}
              className="bg-primary p-6 shadow-md rounded-lg flex items-center gap-4 border-b-4 border-b-secondary hover:shadow-lg hover:scale-105 transition-all"
            >
              {item.icon}
              <div>
                <h4 className="text-lg font-bold text-secondary">
                  {item.title}
                </h4>
                <p className="text-gray-600">{item.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-primary py-12 px-4 md:px-16 lg:px-32">
        <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col md:flex-row items-center gap-8 border-b-4 border-secondary">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              How We Can Help Your{" "}
              <span className="text-secondary">Farm Grow</span>
            </h2>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="p-3 bg-primary rounded-lg border-b-4 border-secondary focus:outline-none focus:ring-0"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="p-3 bg-primary rounded-lg border-b-4 border-secondary focus:outline-none focus:ring-0"
                required
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="p-3 bg-primary rounded-lg border-b-4 border-secondary focus:outline-none focus:ring-0"
                required
              />

              <input
                type="text"
                name="topic"
                placeholder="Topic"
                value={formData.topic}
                onChange={handleChange}
                className="p-3 bg-primary rounded-lg border-b-4 border-secondary focus:outline-none focus:ring-0"
                required
              />

              <textarea
                name="message"
                placeholder="Write Your Message.."
                value={formData.message}
                onChange={handleChange}
                className="p-3 bg-primary rounded-lg h-32 border-b-4 border-secondary focus:outline-none focus:ring-0 col-span-2"
                required
              ></textarea>

              <button
                type="submit"
                className="bg-secondary text-white px-6 py-3 rounded-lg border-4 border-transparent hover:bg-primary hover:text-secondary hover:border-b-secondary transition-all w-full sm:w-auto"
              >
                GET IN TOUCH
              </button>
              
            </form>
          </div>

          {/* Right Section - Image */}
          <div className="w-full md:w-1/2">
            <img
              src={about1}
              alt="Product Image"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
