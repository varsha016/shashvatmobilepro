import React, { useState } from "react";
import cmpLogo from "../Images/Logos/finmatrix-logo.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import logoutuser from "./../Images/svg/logout.svg"
import {
  faBell,
  faEnvelope,
  faUserGear,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector, } from "react-redux";
import { logout } from "../Slices/loginInfoSlice";

const Header = ({isOpen,setIsOpen,toggleSidebar}) => {
  const dispatch = useDispatch();
   const navigate = useNavigate();
  const [userDetails, showUserDetails] = useState(false);
  const isAdmin = useSelector((state) => state.auth.isAdmin);
  return (
    <>
      <div className=" flex justify-end  w-screen bg-white h-16 shadow-lg text-center">
       
        <div className="flex justify-center items-center pr-80">
          
      
         <div className={`absolute top-0 ${isOpen ? 'left-64' : 'left-24'} p-4`} onClick={toggleSidebar}>
    <div className="bg-gary-400 hover:bg-gray-900  text-white font-bold py-1 px-2 rounded">
      <FontAwesomeIcon icon={faBars} size="lg" style={{ color: "#cbd5e1" }}/>
    </div>
  </div>
        {isAdmin && (
          <h4 className="">
            Welcome to <strong>Finmatrix Pay</strong> Retailer Panner
          </h4>
        )}
        </div>
        <div className="flex justify-end items-end gap-5 pr-9 pb-4 ">
          <FontAwesomeIcon
            icon={faBell}
            size="lg"
            style={{ color: "#cbd5e1" }}
          />
          <FontAwesomeIcon
            icon={faEnvelope}
            size="lg"
            style={{ color: "#cbd5e1" }}
          />
          <div className="flex self-end flex-col">
            <div
              className="cursor-pointer"
              onClick={() => showUserDetails(!userDetails)}
            >
              <img src={logoutuser} alt=""/>
               {/* <FontAwesomeIcon
                icon={faUserGear}
                size="2xl"
                style={{ color: "#ca8a04" }}
              /> */}
            </div>
            {userDetails && (
              <div className="absolute bg-white shadow-xl rounded w-36 h-26 top-16 right-12 py-2 mix-blend-darken align-top shadow-5">
                <ul className="pt-3">
                  <li 
                  
                  onClick={() =>{
                    showUserDetails(false)
                    navigate("/profile")}
                  }
                  className="font-semibold text-blue-700 text-lg hover:bg-gray-100 cursor-pointer"
                  >Profile</li>
                  <li onClick={() => {
                    dispatch(logout())
                    navigate('/')
                  }}
                  className="font-semibold text-red-500 text-lg hover:bg-gray-100 cursor-pointer"
                    >Log Out</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;