import React, { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
import Footer from "../components/Footer";
import axios from "axios";
import { toast } from "react-toastify";

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null
      }
      const response = await axios.post(backendUrl + "/api/order/userorders", {}, {headers: { token }})
      if (response.data.success) {
        let allOrdersItem = []
        response.data.orders.map((order)=>{
          order.items.map((item)=>{
            item['status'] = order.status
            item['payment'] = order.payment
            item['paymentMethod'] = order.paymentMethod
            item['date'] = order.data
            allOrdersItem.push(item)
          })
        })
        setOrderData(allOrdersItem)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  // Temporary data
  useEffect(() => {
    loadOrderData()
  }, [token]);

  return (
    <div>
      <div className="bg-primary mb-16">
        {/* Container */}
        <div className="max-padd-container py-10">
          <Title title1={"Order"} title2={"List"} />
          {/* container */}
          {orderData.map((item, i) => (
            <div key={i} className="bg-white p-2 mt-3 rounded-lg">
              <div className="text-gray-700 flex flex-col gap-4">
                <div className="flex gap-x-3 w-full">
                  {/* image */}
                  <div className="flex gap-6">
                    <img
                      src={item.image[0]}
                      alt="orderImg"
                      className="sm:w-[77px] rounded-lg"
                    />
                  </div>

                  {/* order info */}
                  <div className="block w-full">
                    <h5 className="h5 capitalize line-clamp-1">{item.name}</h5>
                    <div className="flexBetween flex-wrap">
                      <div>
                        <div className="flex items-center gap-x-2 sm:gap-x-3">
                          <div className="flexCenter gap-x-2">
                            <h5 className="medium-14">Price:</h5>
                            <p>
                              {currency}
                              {item.price}
                            </p>
                          </div>

                          <div className="flexCenter gap-x-2">
                            <h5 className="medium-14">Quantity:</h5>
                            <p>{item.quantity}</p>
                          </div>

                          <div className="flexCenter gap-x-2">
                            <h5 className="medium-14">Size:</h5>
                            <p>{item.size}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-x-2">
                          <h5 className="medium-14">Date:</h5>
                          <p>{new Date(item.date).toDateString()}</p>
                        </div>
                        <div className="flex items-center gap-x-2">
                          <h5 className="medium-14">Payment</h5>
                          <p>{item.paymentMethod}</p>
                        </div>
                      </div>
                      {/* Status & button */}
                      <div className="flex gap-3">
                        <div className="flex items-center gap-2">
                          <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                          <p>{item.status}</p>
                        </div>
                        <button onClick={loadOrderData} className="btn-secondary !p-1.5 !py-1 !text-xs">Track Order</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Orders;
