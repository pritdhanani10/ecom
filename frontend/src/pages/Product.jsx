import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { FaStar, FaStarHalfStroke, FaTruckFast } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { TbShoppingBagPlus } from "react-icons/tb";
import ProductDescription from "../components/ProductDescription";
import ProductFeatures from "../components/ProductFeatures";
import RelatedProducts from "../components/RelatedProducts";
import Footer from "../components/Footer";
import Logo from "../assets/logo.png";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [product, setProduct] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    const selectedProduct = products.find((item) => item._id === productId);
    if (selectedProduct) {
      setProduct(selectedProduct);
      setImage(selectedProduct.image[0]);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  if (!product) {
    return <div className="flex justify-center items-center min-h-screen">
    <img
      src={Logo}
      alt="Brand Logo"
      className="w-[500px] sm:w-[200px] md:w-[400px] lg:w-[300px] object-contain transition-transform duration-300 hover:scale-105"
    />
  </div>;
  }

  return (
    <div>
      <div className="max-padd-container">
        {/* Product data */}
        <div className="flex gap-12 flex-col xl:flex-row bg-primary rounded-2xl p-3 mb-6">
          {/* Product image */}
          <div className="flex flex-1 gap-x-2 xl:flex-1">
            <div className="flexCenter flex-col gap-[7px] flex-wrap">
              {product.image.map((item, i) => (
                <img
                  onClick={() => setImage(item)}
                  key={i}
                  src={item}
                  alt="productImg"
                  className=" max-w-[50px] overflow-hidden bg-cover rounded-lg"
                />
              ))}
            </div>
            <div className="max-[500px] w-auto flex">
              <img
                src={image}
                alt="productImg"
                className="rounded-xl bg-gray-10"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="flex-[1.5] rounded-2xl xl:px-7">
            <h3 className="h3 leading-none">{product.name}</h3>

            {/* Rating and price */}
            <div className="flex items-baseline gap-x-5">
              <div className="flex items-center gap-x-2 text-secondary">
                <div className="flex gap-x-2 text-secondary">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfStroke />
                </div>
                <span className="medium-14">(122)</span>
              </div>
            </div>
            <h4 className="h4 my-2">
              {currency}
              {product.price}.00
            </h4>
            <p className="max-w-[555px]">{product.description}</p>
            <div className="flex flex-col gap-4 my-4 mb-5">
              <div className="flex gap-2">
                {[...product.sizes]
                  .sort((a, b) => {
                    const order = ["S", "M", "L", "XL", "XXL"];
                    return order.indexOf(a) - order.indexOf(b);
                  })
                  .map((item, i) => (
                    <button
                      key={i}
                      onClick={() => setSize(item)}
                      className={`${
                        item === size
                          ? "ring-1 ring-slate-900/20"
                          : "ring-1 ring-slate-900/5"
                      } medium-14 h-8 w-10 bg-primary rounded`}
                    >
                      {item}
                    </button>
                  ))}
              </div>
            </div>
            <div className="flex items-center gap-x-4">
              <button
                onClick={() => addToCart(product._id, size)}
                className="btn-secondary !rounded-lg sm:w-1/2 flexCenter gap-x-2 capitalize"
              >
                Add to Cart
                <TbShoppingBagPlus />
              </button>
              <button className="btn-light !rounded-lg !py-3.5">
                <FaHeart />
              </button>
            </div>
            <div className="flex items-center gap-x-2 mt-3">
              <FaTruckFast className="text-lg" />
              <span className="medium-14">
                Free Delivery on orders over 500$
              </span>
            </div>
            <hr className="my-3 w-2/3" />
            <div className="mt-2 flex flex-col gap-1 text-gray-30 text-[14px]">
              <p>Authenticy You Can Trust</p>
              <p>Enjoy Cash on Delivery for Your Convenince</p>
              <p>Enjoy Cash on Delivery for Your Convenince</p>
            </div>
          </div>
        </div>
        <ProductDescription />
        <ProductFeatures />
        <RelatedProducts
          category={product.category}
          subCategory={product.subCategory}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Product;
