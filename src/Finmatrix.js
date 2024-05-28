import React, { useState } from "react";
import Header from "./Components/Header";
import SideMenu from "./Components/SideMenu";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { getScreenSize } from "./Slices/screenSizeSlice";
// import { useWindowSize } from "./Components/CustomHooks/useWindowSize";
import { useWindowSize } from "./Components/CustomHooks/useWindowSize";

const FinMatrix = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
useWindowSize();

  return (
    <div>
      <div className="fixed">
        <Header isOpen={isOpen} setIsOpen={setIsOpen} toggleSidebar={toggleSidebar}/>
      </div>
    
     
     <div className="flex pt-16">
  <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} toggleSidebar={toggleSidebar}/>
  <div className={`p-1 w-full  pl-8 bg-blue-50 h-full ${isOpen ? 'ml-64' : 'ml-20'}`}>
    <Outlet/>
  </div>
</div>

      <div>
        <Footer/>
      </div>
    </div> 

  );
};
export default FinMatrix