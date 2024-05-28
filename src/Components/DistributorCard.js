import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuildingColumns,
  faCircleCheck,
  faHourglassEnd,
  faSquareXmark,
} from "@fortawesome/free-solid-svg-icons";

const DistributorCard = (props) => {
  const { _id, amt, qty } = props.item;

  const borderColor =
    _id === "Turnover"
      ? "border-yellow-600"
      : _id === "commission"
      ? "border-green-700"
      : _id === "Capital Invested"
      ? "border-red-700"
      : _id === "Disputs"
      ? "border-blue-500"
      : "border-purple-400";

  const textColor =
    _id === "Pending"
      ? "text-yellow-600"
      : _id === "Success"
      ? "text-green-700"
      : _id === "Failed"
      ? "text-red-700"
      : _id === "InQueue"
      ? "text-blue-500"
      : "text-purple-400";

  const iColor =
    _id === "Pending"
      ? "#ca8a04"
      : _id === "Success"
      ? "#15803d"
      : _id === "Failed"
      ? "#dc2626"
      : _id === "InQueue"
      ? "#3b82f6"
      : "#c084fc";

  const icon =
    _id === "Pending"
      ? faHourglassEnd
      : _id === "Success"
      ? faCircleCheck
      : _id === "Failed"
      ? faSquareXmark
      : _id === "InQueue"
      ? faBuildingColumns
      : faBuildingColumns;

  return (
    <div
    data-aos="slide-up" className={`w-72 h-36 border-l-8 ${borderColor} bg-white rounded-lg p-4 m-3 grid`}
    >
      <div className="flex justify-between items-center">
        <div className="grid gap-1">
          <h1 className={`${textColor} font-bold text-xl`}>
            {_id?.toUpperCase()}
          </h1>
          <h1 className={`${textColor} text-2xl`}>₹ {amt}</h1>
          <h1 className={`${textColor} text-2xl`}>Total Recharges : {qty}</h1>
        </div>
        <div>
          <FontAwesomeIcon
            icon={icon}
            size="2xl"
            style={{ color: `${iColor}` }}
          />
        </div>
      </div>
    </div>
  );
};

export default DistributorCard;
