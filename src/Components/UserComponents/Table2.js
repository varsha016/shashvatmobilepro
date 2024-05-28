// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const TableComponent = ({apiEndpoint}) => {
//   const [transactions, setTransactions] = useState([]);

//   useEffect(() => {
//     axios.get(apiEndpoint)
//     .then(response => {
//       setTransactions(response.data.slice(0, 10));
//     })
//     .catch(error => {
//       console.error('Error fetching transactions:', error);
//     });
//   }, []);
// return (

//     <div className='mt-5'>
//         <div className=" bg-sky-400 rounded-t-md text-center cursor-pointer p-2">Last 10 Transaction</div>
//         <table className="border-collapse w-full mt-5">
//       <thead className="bg-grey-700 ">
//         <tr >
//           <th>Date</th>
//         <th >Transaction Details</th>
//         <th >Ref. Number</th>
//         <th >Opid</th>
//         <th >Amount</th>
//         <th >Debit/Credit</th>
//         <th >New Amount</th>
         
//         </tr>
//       </thead>
//       <tbody>
//         {transactions.map(transactions  => (
//           <tr key={transactions.id}>
//             <td>{transactions.details}</td>
//             <td>{transactions.date}</td>
//             <td>{transactions.refNo}</td>
//             <td>{transactions.opid}</td>
//             <td>{transactions.amount}</td>
//             <td>{transactions.debitCredit}</td>
//             <td>{transactions.newAmont}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//     </div>
//   );
// }

// export default TableComponent;
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faListCheck,
  faPlug,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Table2 = ({
  hRow = [
    "Date",
    "User Details",
    "Transaction Details",
    "Ref. Number",
    "Opid",
    "Amount",
    "Debit/Credit",
    "New Balance",
    
  ],
  data,
  Action,
  actionIcons,
  
  itemsPerPage = 10, // Number of items per page
  
}) => {
  
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data?.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-9 bg-white shadow-xl">
      <table className="table-auto border w-full border-slate-700">
        <thead data-aos="fade-in">
          <tr className="border border-slate-400 border-spacing-2  bg-opacity-90">
            <th className="border border-slate-400 px-3 py-3 text-gray-600 text-xl text-left">
              S.No
            </th>
            {hRow?.map((item, i) => (
              <th
                key={i}
                className="border border-slate-400 px-3 py-3 text-gray-600 text-xl text-left"
              >
                {item}
              </th>
            ))}
            {Action && (
              <th className="border border-slate-400 px-3 py-3 text-gray-600 text-xl text-left">
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody>
        {data&& currentItems?.map((item, index) => (
            <tr
            data-aos="slide-up"
              key={index}
              className="border border-slate-400 border-spacing-2"
            >
              <td
                key={index}
                className="border border-slate-400 p-4 font-semibold text-gray-700 sm:text-lg"
              >
                {(currentPage - 1) * itemsPerPage + index + 1}
              </td>
              {Object.keys(item).map((key, i) => (
                <td
                  key={key}
                  className="border border-slate-400 p-4 font-semibold text-gray-600 sm:text-lg"
                >
                  {item[key]}
                </td>
              ))}
              {Action && (
                <td className="border border-slate-400 p-4">
                  {actionIcons.map((icon) => (
                    <span className="px-1 cursor-pointer">
                      <Link
                        to={`${icon.to}/${item.id}/${item.Name}/${item.Active}`}
                      >
                        <FontAwesomeIcon
                          icon={icon.name}
                          size="lg"
                          style={{ color: "#1e40af" }}
                        />
                      </Link>
                    </span>
                  ))}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center items-center mt-4">
        {Array.from({ length: totalPages }, (_i, i) => (
          <button
            key={i}
            onClick={() => paginate(i + 1)}
            className={`mx-1 px-3 py-1 border border-slate-700 rounded ${
              currentPage === i + 1
                ? "bg-blue-800 text-white"
                : "bg-white text-blue-800"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
export default Table2;
