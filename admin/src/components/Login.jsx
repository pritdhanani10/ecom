import React, { useState } from "react";
import axios from "axios";
import { backend_url } from "../App";
import { toast } from "react-toastify";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(backend_url + "/api/user/admin", {
        email,
        password,
      });
      if (response.data.success) {
        console.log(response);
        setToken(response.data.token);
      } else {
        console.log(response);
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="relative overflow-hidden min-h-[700px] sm:min-h-[730px] bg-gray-100 flex justify-center items-center duration-200">
      <div className="h-[700px] w-[700px] bg-secondary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>

      {/* Container */}
      <div className="container absolute pb-8 sm:pb-0">
        {/* Form side */}
        <div className="flex w-full items-center justify-center">
          <form
            onSubmit={onSubmitHandler}
            className="flex flex-col m-auto gap-y-5 w-full sm:w-[500px] bg-white rounded-xl p-8 shadow-2xl border-b-4 border-secondary"
          >
            <div className="w-full mb-4">
              <h3 className="bold-36 text-center text-secondary">Login</h3>
            </div>

            <div className="w-full">
              <label htmlFor="email" className="medium-15">
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Email"
                required
                className="w-full px-3 py-1.5 ring-1 ring-slate-900/10 rounded bg-primary mt-1 border-b-4 border-secondary focus:outline-none focus:ring-0"
              />
            </div>

            <div className="w-full">
              <label htmlFor="password" className="medium-15">
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Password"
                required
                className="w-full px-3 py-1.5 ring-1 ring-slate-900/10 rounded bg-primary mt-1 border-b-4 border-secondary focus:outline-none focus:ring-0"
              />
            </div>

            <button
              type="submit"
              className="btn-secondary w-full mt-5 !py-[8px] !rounded"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
