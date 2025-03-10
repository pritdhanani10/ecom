import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useLocation, useNavigate } from "react-router-dom";

const Payment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const location = useLocation();
  const navigate = useNavigate();
  const [clientSecret, setClientSecret] = useState("");
  const { order } = location.state || {};

  useEffect(() => {
    if (!order) {
      navigate('/cart');
      return;
    }

    fetch("http://localhost:5000/api/payment/create-payment-intent", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('token')}` 
      },
      body: JSON.stringify({ 
        amount: order.totalPrice
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Payment setup failed');
        }
        return res.json();
      })
      .then((data) => setClientSecret(data.clientSecret))
      .catch((error) => {
        console.error("Error:", error);
        alert("Payment setup failed. Please try again.");
      });
  }, [order, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements || !order) return;

    try {
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (result.error) {
        console.error(result.error.message);
        alert("Payment failed: " + result.error.message);
      } else {
        alert("Payment successful!");
        navigate('/order-success', { state: { orderId: order._id } });
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Payment processing failed. Please try again.");
    }
  };

  if (!order) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Stripe Payment</h2>
      <div className="mb-4">
        <p className="text-lg">Order Total: ${order.totalPrice}</p>
      </div>
      <form onSubmit={handleSubmit} className="w-96 p-4 border border-gray-300 rounded-lg">
        <CardElement className="p-2 border rounded" />
        <button 
          type="submit" 
          className="mt-4 p-2 w-full bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400" 
          disabled={!stripe}
        >
          Pay ${order.totalPrice}
        </button>
      </form>
    </div>
  );
};

export default Payment;
