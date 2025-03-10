import axios from "axios";
import React, { useEffect, useState } from "react";
import { backend_url } from "../App";
import { toast } from "react-toastify";

const Users = ({ token }) => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(backend_url + "/api/user/all", {
        headers: { token },
      });

      if (response.data.success) {
        setUsers(response.data.data);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error.response?.data || error.message);
      toast.error("Failed to fetch users");
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await axios.post(
        backend_url + "/api/user/delete",
        { id },
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success("User deleted successfully");
        setUsers(users.filter((user) => user._id !== id));
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error.response?.data || error.message);
      toast.error("Failed to delete user");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="px-4 sm:px-8 mt-6 w-full">
      <h2 className="text-2xl font-bold mb-4">Registered Users</h2>
      <div className="grid text-center grid-cols-4 items-center py-3 px-4 bg-white border-4 border-secondary font-semibold text-gray-700 rounded-lg w-full">
        <h5>Name</h5>
        <h5>Email</h5>
        <h5>Phone</h5>
        <h5>Actions</h5>
      </div>
      {users.map((user) => (
        <div
          key={user._id}
          className="grid text-center grid-cols-4 items-center gap-4 mt-4 p-3 border-b-4 border-secondary bg-white rounded-lg shadow-sm w-full"
        >
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.number}</p>
          <div className="flex justify-center">
            <button
              className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-700"
              onClick={() => deleteUser(user._id)} // Pass user ID
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
