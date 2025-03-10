import React from "react";
import { useState } from "react";
import { TfiPackage } from "react-icons/tfi";
import { backend_url, currency } from "../App";
import { useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) {
      return null;
    }
    try {
      const response = await axios.post(
        backend_url + "/api/order/list",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setOrders(response.data.orders.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const statusHandler = async (e, orderId) => {
    try {
      const response = await axios.post(
        backend_url + "/api/order/status",
        { orderId, status: e.target.value },
        { headers: { token } }
      );
      if (response.data.success) {
        await fetchAllOrders();
      }
    } catch (error) {
      console.log(error);
      toast.error(response.data.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div className="px-2 sm:px-8 mt-4 sm:mt-14 w-full">
      <div className="flex flex-col gap-4 w-full">
        {orders.map((order) => (
          <div
            key={order._id}
            className="w-full grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_0.5fr_1fr] gap-4 items-start p-3 text-gray-700 bg-white border-b-secondary border-b-4 rounded-lg"
          >
            <div className="flexCenter">
              <TfiPackage className="text-3xl text-secondary" />
            </div>
            <div>
              <div className="flex items-start gap-1">
                <div className="medium-14">Items:</div>
                <div className="flex flex-col relative top-0.5">
                  {order.items.map((item, index) => (
                    <p key={index}>
                      {item.name} * {item.quantity}
                      <span>"{item.size}</span>
                      {index !== order.items.length - 1 && ","}
                    </p>
                  ))}
                </div>
              </div>
              <p className="medium-14">
                <span className="text-tertiary">Name: </span>
                {order.address.firstName + " " + order.address.lastName}
              </p>
              <p className="medium-14">
                <span className="text-tertiary">Address: </span>
                <span>{order.address.street + ", "}</span>
                <span>
                  {order.address.city +
                    ", " +
                    order.address.state +
                    ", " +
                    order.address.country +
                    ", " +
                    order.address.zipcode}
                </span>
              </p>
              <p>{order.address.phone}</p>
            </div>
            <div>
              <p className="text-sm">Total: {order.items.length}</p>
              <p className="mt-3">Method: {order.paymentMethod}</p>
              <p>Payment: {order.payment ? "Done" : "Pending"}</p>
              <p>Date: {new Date(order.date).toLocaleDateString()}</p>
            </div>
            <p className="text-sm font-semibold">
              {currency}
              {order.amount}
            </p>
            <select
              onChange={(e) => statusHandler(e, order._id)}
              value={order.status}
              className="text-xs font-semibold p-1 ring-1 ring-slate-900/5 rounded max-w-36 bg-primary"
            >
              <option value="Order Placed">Order Placed</option>
              <option value="Packing">Packing</option>
              <option value="Shipped">Shipped</option>
              <option value="Out for Delivery">Out for Delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
