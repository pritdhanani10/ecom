import React, { useContext, useState, useEffect } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import Footer from "../components/Footer";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const PlaceOrder = () => {
  const {
    navigate,
    token,
    cartItems,
    setCartItems,
    getCartAmount,
    delivery_charges,
    products,
    backendUrl,
  } = useContext(ShopContext);
  
  const [method, setMethod] = useState("cod");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (method === "stripe") {
      axios
        .post(`${backendUrl}/api/payment/create-payment-intent`, {
          amount: getCartAmount() + delivery_charges,
          currency: "usd",
        })
        .then((res) => setClientSecret(res.data.clientSecret))
        .catch((err) => console.error("Stripe error:", err));
    }
  }, [method]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      let orderItems = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find((product) => product._id === items)
            );
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_charges,
        paymentMethod: method,
        paymentStatus: method === "cod" ? "Pending" : "Paid",
      };

      if (method === "stripe") {
        console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
        if (!stripe || !elements) return;
        const result = await stripe.confirmCardPayment(clientSecret, {
          payment_method: { card: elements.getElement(CardElement) },
        });
        console.log("########################",result);
        if (result.error) {
          toast.error("Payment failed: " + result.error.message);
          return;
        }

        orderData.transactionId = result.paymentIntent.id;
      }

      const response = await axios.post(`${backendUrl}/api/order/place`, orderData, { headers: { token } });
      console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$",response.data)
      

      if (response.data.success) {
        setCartItems({});
        toast.success(response.data.message);
        navigate("/orders");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div>
      <div className="bg-primary mb-16">
        <form onSubmit={onSubmitHandler} className="max-padd-container py-10">
          <div className="flex flex-col xl:flex-row gap-20 xl:gap-28">
            <div className="flex flex-1 flex-col gap-3 text-[95%]">
              <Title title1={"Delivery"} title2={"Information"} />
              <input onChange={onChangeHandler} value={formData.firstName} type="text" name="firstName" placeholder="First Name" className="input-style" required />
              <input onChange={onChangeHandler} value={formData.lastName} type="text" name="lastName" placeholder="Last Name" className="input-style" required />
              <input onChange={onChangeHandler} value={formData.email} type="email" name="email" placeholder="Email" className="input-style" required />
              <input onChange={onChangeHandler} value={formData.phone} type="text" name="phone" placeholder="Phone" className="input-style" required />
              <input onChange={onChangeHandler} value={formData.street} type="text" name="street" placeholder="Street" className="input-style" required />
              <input onChange={onChangeHandler} value={formData.city} type="text" name="city" placeholder="City" className="input-style" required />
              <input onChange={onChangeHandler} value={formData.state} type="text" name="state" placeholder="State" className="input-style" required />
              <input onChange={onChangeHandler} value={formData.zipcode} type="text" name="zipcode" placeholder="Zipcode" className="input-style" required />
              <input onChange={onChangeHandler} value={formData.country} type="text" name="country" placeholder="Country" className="input-style" required />
            </div>

            <div className="flex flex-1 flex-col">
              <CartTotal />
              <div className="my-6">
                <h3 className="bold-20 mb-5">Payment <span className="text-secondary">Method</span></h3>
                <div className="flex gap-3">
                  <div onClick={() => setMethod("stripe")} className={` ${method === "stripe" ? "btn-dark" : "btn-white"} !py-1 text-xs cursor-pointer`}>Stripe</div>
                  <div onClick={() => setMethod("cod")} className={` ${method === "cod" ? "btn-dark" : "btn-white"} !py-1 text-xs cursor-pointer`}>Cash on Delivery</div>
                </div>
              </div>

              {method === "stripe" && (
                <div className="p-4 border rounded-md">
                  <h3 className="bold-18 mb-2">Card Payment</h3>
                  <CardElement className="p-2 border rounded" />
                </div>
              )}

              <button type="submit" className="btn-secondary mt-4">Place Order</button>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default PlaceOrder;
