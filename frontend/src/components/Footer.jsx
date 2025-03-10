import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-padd-container flex flex-wrap flex-col md:flex-row justify-between gap-6 md:gap-12 mt-12">
        {/* Logo & Description */}
        <div className="flex flex-col max-w-sm gap-y-5 text-center md:text-left">
          <div className="text-3xl font-bold">
            Outfir<span className="text-secondary">o</span>
          </div>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            earum reprehenderit possimus!
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-7 xl:gap-x-36 justify-center md:justify-start">
          {[
            {
              title: "Customer Service",
              links: [
                "Help center",
                "Payment methods",
                "Contact",
                "Shipping status",
                "Complaints",
              ],
            },
            {
              title: "Legal",
              links: [
                "Privacy Policy",
                "Cookie settings",
                "Terms & conditions",
                "Cancellation",
                "Imprint",
              ],
            },
            {
              title: "Others",
              links: ["Our teams", "Sustainability", "Press", "Jobs", "Newsletter"],
            },
          ].map((section, index) => (
            <ul key={index} className="text-center md:text-left">
              <h4 className="text-lg font-semibold mb-3">{section.title}</h4>
              {section.links.map((item) => (
                <li key={item} className="my-2">
                  <a href="#" className="text-gray-400 hover:text-secondary transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {/* Copyright & Social Media */}
      <div className="max-padd-container flex flex-col md:flex-row items-center justify-between bg-gray-800 text-gray-400 text-sm py-4 mt-6 rounded gap-4 md:gap-0">
        <p>© 2025 Outfiro. All rights reserved.</p>

        {/* Social Media Icons */}
        <div className="flex gap-x-4">
          {[
            { icon: <FaFacebookF />, link: "#" },
            { icon: <FaTwitter />, link: "#" },
            { icon: <FaInstagram />, link: "#" },
            { icon: <FaLinkedinIn />, link: "#" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 text-gray-400 hover:bg-secondary hover:text-white transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
