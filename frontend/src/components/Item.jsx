import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";

const Item = ({ product }) => {
  return (
    <div className="bottom-12">
      {/* Image */}
      <Link
        to={`/product/${product._id}`}
        className="group flexCenter relative top-12 overflow-hidden rounded-t-lg"
      >
        <img
          src={product.image[0]}
          alt="productImg"
          className="group-hover:opacity-80 transition-opacity duration-300 h-[300px] w-full lg:h-[250px] lg:w-[300px] object-cover"
        />
      </Link>

      {/* Info */}
      <div className="p-4 pt-16 justify-center align-center rounded-lg bg-white shadows h-[200px] lg:h-[200px] border-y-4 border-y-secondary">
        <h4 className="bold-15 line-clamp-1 !my-0">{product.name}</h4>
        <div className="flexBetween pt-1">
          <h5 className="h5 pr-2">${product.price}.00</h5>
          <div className="flex items-baseline gap-x-1">
            <FaStar className="text-secondary" />
            <h5 className="h5 relative bottom-0.5">4.8</h5>
          </div>
        </div>
        <p className="line-clamp-2 py-1">{product.description}</p>
      </div>
    </div>
  );
};

export default Item;