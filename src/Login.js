import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAsync } from "./Slices/loginInfoSlice";
import login1 from "./Images/Logos/login1.svg";
import cmpLogo from "./Images/Logos/finmatrix-logo.jpeg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SubHeading from "./Components/commonComps/SubHeading";

const Login = (props) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log(username, password);
    dispatch(loginAsync({ email: username, password  }));
  };

  return (
    <div className="bg-cover bg-no-repeat h-screen flex justify-end items-center"
      style={{ backgroundImage: `url('https://www.markaz.com/getmedia/c083b008-b6ba-4e17-9da5-6408b1137a4f/investment.jpg?width=1600&height=800&ext=.jpg')` }}
    >
      <div className="max-w-lg bg-white shadow-lg rounded-lg overflow-hidden mt-10 p-10 mr-4 sm:mr-24 me-[130px]">
        <div className="flex mb-7 justify-center">
          <img
            className="w-[200px] mx-4 hover:scale-110 transform-origin-center transition-transform"
            src={cmpLogo}
            alt="Logo"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-lg font-medium text-gray-900 m-4"
          >
            Email Address
          </label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-96 p-2.5"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-lg font-medium text-gray-900 m-4"
          >
            Your password
          </label>
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-96 p-2.5"
          />
        </div>
      
        <div>
          <SubHeading 
          button="Login"
          // link="login"
            onClick={() => handleLogin()}
            // id="2"
            disabled={auth.state === "loading"}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full sm:w-96"
          >
            {auth.status === "loading" ? "Logging in..." : "Login"}
          </SubHeading>
        </div>
        {auth.status === "failed" && <div className="text-red-500 mt-2 text-md">Error: {auth.error}</div>}
      </div>
    </div>
  );
};

export default Login;
