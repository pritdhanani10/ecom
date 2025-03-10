import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);
  const [currState, setCurrState] = useState("Login");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (currState === "Sign Up") {
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
          number,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center duration-200 ">
      <div className="h-[700px] w-[700px] bg-secondary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>

      <div className="container absolute pb-8 sm:pb-0">
        <div className="flex w-full items-center justify-center">
          <form
            onSubmit={onSubmitHandler}
            className="flex flex-col m-auto gap-y-5 w-full sm:w-[500px] bg-white rounded-xl p-8 shadow-2xl border-b-4 border-secondary"
          >
            <div className="w-full mb-4">
              <h3 className="bold-36 text-center text-secondary">
                {currState}
              </h3>
            </div>
            {currState === "Sign Up" && (
              <>
                <div className="w-full">
                  <label htmlFor="name" className="medium-15">
                    Name
                  </label>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    type="text"
                    placeholder="Name"
                    className="w-full px-3 py-1.5 ring-1 ring-slate-900/10 rounded bg-primary mt-1 border-b-4 border-secondary focus:outline-none focus:ring-0"
                    required
                  />
                </div>

                <div className="w-full">
                  <label htmlFor="number" className="medium-15">
                    Mobile Number
                  </label>
                  <input
                    onChange={(e) => setNumber(e.target.value)}
                    value={number}
                    type="tel"
                    placeholder="Mobile Number"
                    className="w-full px-3 py-1.5 ring-1 ring-slate-900/10 rounded bg-primary mt-1 border-b-4 border-secondary focus:outline-none focus:ring-0"
                    required
                  />
                </div>
              </>
            )}

            <div className="w-full">
              <label htmlFor="email" className="medium-15">
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Email"
                className="w-full px-3 py-1.5 ring-1 ring-slate-900/10 rounded bg-primary mt-1 border-b-4 border-secondary focus:outline-none focus:ring-0"
                required
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
                className="w-full px-3 py-1.5 ring-1 ring-slate-900/10 rounded bg-primary mt-1 border-b-4 border-secondary focus:outline-none focus:ring-0"
                required
              />
            </div>

            <button
              type="submit"
              className="btn-secondary w-full mt-5 !py-[8px] !rounded"
            >
              {currState === "Sign Up" ? "Sign Up" : "Login"}
            </button>

            <div className="w-full flex flex-col gap-y-3">
              {/* <div className="underline medium-15">Forgot your password?</div> */}

              <div
                className="underline medium-15 cursor-pointer text-blue-500"
                onClick={() => navigate("/forgot-password")}
              >
                Forgot your password?
              </div>

              {currState === "Login" ? (
                <div className="medium-15">
                  <span>Don't have an account?</span>
                  <span
                    onClick={() => setCurrState("Sign Up")}
                    className="underline cursor-pointer text-secondary"
                  >
                    {" "}
                    Create account{" "}
                  </span>
                </div>
              ) : (
                <div className="medium-15">
                  <span>Already have an account?</span>
                  <span
                    onClick={() => setCurrState("Login")}
                    className="underline cursor-pointer text-secondary"
                  >
                    {" "}
                    Login{" "}
                  </span>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
