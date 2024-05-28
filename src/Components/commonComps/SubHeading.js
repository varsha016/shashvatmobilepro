import React from 'react';
import { Link } from 'react-router-dom';

const SubHeading = (props) => {
  const {title, sidebutton, heading, button, link, onClick, className, children, div } = props;

  // Set the id value directly in the component
  const id = 2; // You can change this value to 1, 2, or 3 to see different colors

  // Determine colors based on the id
  let titleColor = '';
  let sidebuttonColor = '';
  let headingColor = '';
  let buttonColor = '';
  let divColor = '';

  switch (id) {
    case 1:
      titleColor = 'text-blue-800';
      sidebuttonColor = 'from-blue-800 to-blue-500';
      divColor = 'bg-blue-800';
      headingColor = 'bg-blue-800';
      buttonColor = 'from-blue-800 to-blue-500';
      break;
    case 2:
      titleColor = 'text-green-800';
      sidebuttonColor = 'from-green-800 to-green-500';
      divColor = 'bg-green-800';
      headingColor = 'bg-green-800';
      buttonColor = 'from-green-800 to-green-500';
      break;
    case 3:
      titleColor = 'text-red-800';
      sidebuttonColor = 'from-red-800 to-red-500';
      divColor = 'bg-red-800';
      headingColor = 'bg-red-800';
      buttonColor = 'from-red-800 to-red-500';
      break;
    default:
      titleColor = 'text-gray-800';
      sidebuttonColor = 'from-gray-800 to-gray-500';
      divColor = 'bg-gray-800';
      headingColor = 'bg-gray-800';
      buttonColor = 'from-gray-800 to-gray-500';
  }

  return (
    <div>
      {title && (
        <div className='mt-10 ms-7'>
        <h1 className={`text-3xl inline-block pb-3 hover:scale-110 transform-origin-center transition-transform ${titleColor}`}>
        {title}
      </h1>
      </div> )}
      {div &&(
          <div className={`${divColor} text-xl cursor-pointer p-4  text-white font-semibold text-center w-full ` }>
            {div}
          </div>
     )}
      {heading && (
        <div className={`${headingColor} rounded-t-md text-xl cursor-pointer p-2 h-[50px] text-white font-semibold text-center w-full`} style={{ display: 'inline-block' }}>
          {heading}
        </div>
      )}
      {button && (
          <button
            onClick={onClick}
            type="button"
            className={`bg-gradient-to-r rounded-md ${buttonColor} text-white px-4 py-2 shadow-2xl text-lg cursor-pointer hover:scale-105 transform-origin-center transition-transform h-[48px] mt-7 w-auto ${className}`}
          >
            {children || button}
          </button>
      )}
      {sidebutton && (
        <div className="text-right">
          <Link to={link}>
            <button
              type="button"
              className={`bg-gradient-to-r rounded-md ${sidebuttonColor} text-white px-4 py-2 shadow-2xl text-lg mb-3 cursor-pointer hover:scale-105 transform-origin-center transition-transform`}
            >
              {sidebutton}
            </button>
          </Link>
        </div>
      )}
      {children && (
        <div className="custom-content">
          {children}
        </div>
      )}
    </div>
  );
};

export default SubHeading;
