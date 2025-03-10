import React, { useState, useEffect, useContext } from "react";
// import {  } from "";
import Title from "../components/Title";
import { FaCheck, FaStar } from "react-icons/fa6";
import user1 from "../assets/testimonials/user1.png";
import user2 from "../assets/testimonials/user2.png";
import product1 from "../assets/product_1.png";
import product2 from "../assets/product_2_1.png";
import product3 from "../assets/product_3.png";
import product4 from "../assets/product_6.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Reveiw = () => {
  
  const initialReviews = JSON.parse(localStorage.getItem("reviews")) || [
    {
      id: 1,
      name: "John Doe",
      image: user1,
      rating: 5,
      title: "High Quality",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      products: [product1, product2],
    },
    {
      id: 2,
      name: "Izabella Stress",
      image: user2,
      rating: 5,
      title: "Modern Design",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      products: [product3, product4],
    },
  ];

  const [reviews, setReviews] = useState(initialReviews);
  const [newReview, setNewReview] = useState({
    name: "",
    image: "",
    rating: 5,
    title: "",
    text: "",
    products: [],
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  const convertToBase64 = (file, callback) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => callback(reader.result);
  };

  const handleProductChange = (e) => {
    const files = Array.from(e.target.files);
    let productImages = [];

    files.forEach((file, index) => {
      convertToBase64(file, (base64) => {
        productImages.push(base64);
        if (productImages?.length === files.length) {
          setNewReview((prev) => ({
            ...prev,
            products: [...prev.products, ...productImages],
          }));
        }
      });
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      convertToBase64(file, (base64) => {
        setNewReview({ ...newReview, image: base64 });
      });
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    const newId = Date.now(); 
    const updatedReviews = [...reviews, { ...newReview, id: newId }];

    setReviews(updatedReviews);
    localStorage.setItem("reviews", JSON.stringify(updatedReviews)); 

    setNewReview({
      name: "",
      image: "",
      rating: 5,
      title: "",
      text: "",
      products: [],
    });
    setIsModalOpen(false);

    console.log("Updated Reviews:", updatedReviews);
  };

  return (
    <div>
      <div className="bg-primary mb-16">
        <div className="max-padd-container py-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-20 mb-16 rounded-2xl">
            <div className="items-start justify-between flex-col ">
              <Title
                title1={"What People"}
                title2={"Says"}
                title1Styles={"pb-10"}
                paraStyles={"!block"}
              />
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-secondary text-white px-4 mt-5 py-2 rounded"
              >
                Add Review
              </button>
            </div>

            {/* Swiper Slider with Auto Slide */}
            {!isModalOpen && (
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                // navigation
                // pagination={{ clickable: true }}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className="w-full"
              >
                {reviews.map((review) => (
                  <SwiperSlide key={review.id}>
                    <div className="flex flex-col gap-1 rounded-lg p-4 bg-white">
                      <div className="flexBetween">
                        <div className="flexCenter gap-x-2">
                          <img
                            src={review.image}
                            alt="userImg"
                            height={30}
                            width={50}
                            className="rounded-lg object-cover"
                          />
                          <h5 className="bold-14">{review?.name}</h5>
                        </div>
                      </div>
                      <hr className="h-[1px] w-full my-2" />
                      <div className="flex gap-x-1 text-secondary mt-5 mb-1 text-xs">
                        {Array.from({
                          length: Math.min(5, review.rating || 0),
                        }).map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </div>
                      <h4 className="h4">{review.title}</h4>
                      <p>{review.text}</p>
                      {review?.products?.length > 0 && (
                        <div className="flex gap-2 mt-3">
                          {review.products.map((product, index) => (
                            <img
                              key={index}
                              src={product}
                              alt="product"
                              className="w-12 h-12 rounded-md"
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 flexCenter bg-black bg-opacity-50"
          onClick={(e) => e.target === e.currentTarget && setIsModalOpen(false)}
        >
          <form
            className="bg-white p-6 rounded-lg w-[90%] max-w-md"
            onSubmit={handleSubmit}
          >
            <h3 className="text-lg font-semibold mb-4">Add a Review</h3>

            {/* Name Input */}
            <label className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border p-2 rounded mb-2"
              value={newReview.name}
              onChange={(e) =>
                setNewReview({ ...newReview, name: e.target.value })
              }
              required
            />

            {/* Profile Image Upload */}
            <label className="block text-sm font-medium text-gray-700">
              Profile Picture
            </label>
            <input
              type="file"
              accept="image/*"
              className="w-full border p-2 rounded mb-2"
              onChange={handleImageChange}
            />
            {newReview.image && (
              <img
                src={newReview.image}
                alt="Profile"
                className="w-12 h-12 rounded-full mt-2"
              />
            )}

            {/* Review Title */}
            <label className="block text-sm font-medium text-gray-700">
              Review Title
            </label>
            <input
              type="text"
              placeholder="Give your review a title"
              className="w-full border p-2 rounded mb-2"
              value={newReview.title}
              onChange={(e) =>
                setNewReview({ ...newReview, title: e.target.value })
              }
              required
            />

            {/* Review Text */}
            <label className="block text-sm font-medium text-gray-700">
              Your Review
            </label>
            <textarea
              placeholder="Write your review..."
              className="w-full border p-2 rounded mb-2"
              value={newReview.text}
              onChange={(e) =>
                setNewReview({ ...newReview, text: e.target.value })
              }
              required
            ></textarea>

            {/* Star Rating */}
            <label className="block text-sm font-medium text-gray-700">
              Your Rating
            </label>
            <div className="flex gap-1 text-secondary mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  className={`cursor-pointer ${
                    star <= newReview.rating
                      ? "text-yellow-500"
                      : "text-gray-300"
                  }`}
                  onClick={() => setNewReview({ ...newReview, rating: star })}
                />
              ))}
            </div>

            {/* Product Images Upload */}
            <label className="block text-sm font-medium text-gray-700">
              Upload Product Images
            </label>
            <input
              type="file"
              multiple
              accept="image/*"
              className="w-full border p-2 rounded mb-2"
              onChange={handleProductChange}
            />
            {newReview.products.length > 0 && (
              <div className="flex gap-2 mt-2">
                {newReview.products.map((product, index) => (
                  <img
                    key={index}
                    src={product}
                    alt="Product"
                    className="w-12 h-12 rounded-md"
                  />
                ))}
              </div>
            )}

            {/* Buttons */}
            <div className="flex justify-end gap-2 mt-4">
              <button
                type="submit"
                className="bg-secondary text-white px-4 py-2 rounded"
              >
                Submit
              </button>
              <button
                type="button"
                className="bg-gray-300 px-4 py-2 rounded"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Reveiw;