import axios from "axios";
import React, { useState, useEffect } from "react";
import { backend_url } from "../App";
import { toast } from "react-toastify";
import { TbTrash } from "react-icons/tb";

const Contact = ({ token }) => {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    try {
      const response = await axios.get(backend_url + "/api/contact/all");
      if (response.data.success) {
        setMessages(response.data.data);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch messages");
    }
  };

  const removeMessage = async (id) => {
    try {
        const response = await axios.post(
            backend_url + "/api/contact/remove",
            { id },
            { headers: { token } }
          );
  
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchMessages();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Failed to delete message");
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="px-4 sm:px-8 mt-6 w-full">
      <h2 className="text-2xl font-bold mb-4">Contact Messages</h2>
      <div className="grid text-center grid-cols-6 items-center py-3 px-4 bg-white border-4 border-secondary font-semibold text-gray-700 rounded-lg w-full">
        <h5>Name</h5>
        <h5>Email</h5>
        <h5>Phone</h5>
        <h5>Topic</h5>
        <h5>Message</h5>
        <h5>Delete</h5>
      </div>
      {messages.map((item) => (
        <div
          key={item._id}
          className="grid text-center grid-cols-6 items-center gap-4 mt-4 p-3 border-b-4 border-secondary bg-white rounded-lg shadow-sm w-full"
        >
          <p>{item.fullName}</p>
          <p>{item.email}</p>
          <p>{item.phone}</p>
          <p>{item.topic}</p>
          <p className="truncate">{item.message}</p>
          <div className="flex justify-center">
            <TbTrash
              onClick={() => removeMessage(item._id)}
              className="cursor-pointer text-red-500 text-xl hover:text-red-700"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contact;
