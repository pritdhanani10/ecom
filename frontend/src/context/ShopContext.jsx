import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_charges = 50;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(true);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [cartItems, setCartItems] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || {};
  });

  // Save cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add items to cart
  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Please select a size first");
      return;
    }

    const cartData = { ...cartItems };
    cartData[itemId] = { ...(cartData[itemId] || {}), [size]: (cartData[itemId]?.[size] || 0) + 1 };
    setCartItems(cartData);

    if (token) {
      try {
        await axios.post(`${backendUrl}/api/cart/add`, { itemId, size }, { headers: { Authorization: `Bearer ${token}` } });
        toast.success("Item added to cart successfully");
      } catch (error) {
        console.error("Error adding item to cart:", error);
        toast.error(error.response?.data?.message || "Failed to add item to cart");
      }
    }
  };

  // Update quantity
  const updateQuantity = async (itemId, size, quantity) => {
    const newCart = { ...cartItems };

    if (quantity > 0) {
      newCart[itemId][size] = quantity;
    } else {
      delete newCart[itemId][size];
      if (Object.keys(newCart[itemId]).length === 0) {
        delete newCart[itemId];
      }
    }

    setCartItems(newCart);

    if (token) {
      try {
        await axios.post(`${backendUrl}/api/cart/update`, { itemId, size, quantity }, { headers: { Authorization: `Bearer ${token}` } });
      } catch (error) {
        console.error(error);
        toast.error(error.message);
      }
    }
  };

  // Get total cart count
  const getCartCount = () => {
    return Object.values(cartItems).reduce((total, sizes) => total + Object.values(sizes).reduce((sum, qty) => sum + qty, 0), 0);
  };

  // Get total cart amount
  const getCartAmount = () => {
    return Object.entries(cartItems).reduce((total, [itemId, sizes]) => {
      const product = products.find((p) => p._id === itemId);
      if (!product) return total;
      return total + Object.values(sizes).reduce((sum, qty) => sum + qty * product.price, 0);
    }, 0);
  };

  // Fetch products
  const getProductsData = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/product/list`);
      if (response.data.success) {
        setProducts(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  // Fetch user cart from the backend
  const getUserCart = async () => {
    try {
      const response = await axios.post(`${backendUrl}/api/cart/get`, {}, { headers: { Authorization: `Bearer ${token}` } });
      if (response.data.success) {
        setCartItems(response.data.cartData);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getProductsData();
    if (token) getUserCart();
  }, [token]);

  return (
    <ShopContext.Provider value={{ currency, delivery_charges, navigate, products, token, setToken, search, setSearch, showSearch, setShowSearch, addToCart, getCartCount, cartItems, setCartItems, updateQuantity, getCartAmount, backendUrl }}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
