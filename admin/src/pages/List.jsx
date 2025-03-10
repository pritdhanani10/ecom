import axios from "axios";
import React from "react";
import { useState } from "react";
import { backend_url, currency } from "../App";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { TbTrash } from "react-icons/tb";

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backend_url + "/api/product/list");
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        backend_url + "/api/product/remove",
        { id },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="px-2 sm:px-8 sm:mt-14 w-full">
      <div className="flex flex-col gap-2">
        {/* Header Row */}
        <div className="grid grid-cols-5 md:grid-cols-[1fr_3.5fr_1.5fr_1fr_1fr] items-center py-3 px-4 bg-white border-4 border-secondary font-semibold text-gray-700 rounded-lg w-full">
          <h5 className="text-center">Image</h5>
          <h5 className="text-left">Name</h5>
          <h5 className="text-center">Category</h5>
          <h5 className="text-center">Price</h5>
          <h5 className="text-center">Remove</h5>
        </div>

        {/* Product List */}
        {list.map((item) => (
          <div
            key={item._id}
            className="grid grid-cols-5 md:grid-cols-[1fr_3.5fr_1.5fr_1fr_1fr] items-center gap-4 p-3 border-b-4 border-secondary bg-white rounded-lg shadow-sm w-full"
          >
            <div className="flex justify-center">
              <img
                src={item.image[0]}
                alt="prdctImg"
                className="w-16 h-16 rounded-lg object-cover"
              />
            </div>
            <h5 className="text-sm font-semibold text-left">{item.name}</h5>
            <p className="text-sm font-semibold text-center">{item.category}</p>
            <div className="text-sm font-semibold text-center">
              {currency}
              {item.price}
            </div>
            <div className="flex justify-center">
              <TbTrash
                onClick={() => removeProduct(item._id)}
                className="cursor-pointer text-red-500 text-xl hover:text-red-700"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
