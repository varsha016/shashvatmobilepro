import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight , faSearch} from "@fortawesome/free-solid-svg-icons";
import { Link,useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";

const Table = ({
  hRow = [
    "S.NO",
    "Username",
    "User Type",
    "Parent",
    "Balance",
    "Location",
    "User Pin",
    "Status",
    "Action",
  ],
  data,
  Action,
  actionIcons,
  handleSearchInputChange,
  onSearch,
  searchInput,
  pages,
  currentPage,
  setCurrentPage,
  itemsPerPage,
  handlePageClick
  
}) => {
  const totalPages = Math.ceil(pages?.total_items / itemsPerPage) || 1;
 
  return (
    <div className="p-9 bg-white shadow-xl">
      {/* <div className=" flex justify-end items-end">
       
        <div className="relative">

  <input 
    type="text" 
    placeholder="Search" 
    value={searchInput} 
    onChange={handleSearchInputChange} 
    className="w-full md:w-[400px] h-[48px] mb-5 rounded-full placeholder-gray-400 outline-none border border-grey-300 rounded-md px-2"
    />
  <button 
    onClick={() => onSearch(searchInput)} 
    className="absolute top-0 right-0.5 h-[48px] w-[48px] rounded-full bg-blue-800 text-white"
    >
    <FontAwesomeIcon icon={faSearch} size="lg" />
  </button>
    </div>
</div> */}
      
      <table className="table-auto border w-full border-slate-700">
        <thead data-aos="fade-in">
          <tr className="border border-slate-100 border-spacing-2 bg-blue-800 bg-opacity-90">
            <th className="border border-slate-500 px-3 py-3 text-white text-xl text-left">
              S.No
            </th>
            {hRow?.map((item, i) => (
              <th
                key={i}
                className="border border-slate-500 px-3 py-3 text-white text-xl text-left"
              >
                {item}
              </th>
            ))}
            {Action && <th className="border border-slate-500 px-3 py-3 text-white text-xl text-left">Action</th>}
          </tr>
        </thead>
       
          <tbody>
          {data?.map((item, index) => (
            <tr key={index} className="border border-slate-100 border-spacing-2">
              <td className="border border-slate-300 p-4 font-semibold text-gray-700 sm:text-lg">
                {/* {index +1}  */}
                {index  - 1 + currentPage * itemsPerPage}
                {/* {index +1+page_index}  */}
                {/* {page_index} */}
              </td>
              {Object.values(item).map((value, columnIndex) => (
                <td
                  key={columnIndex}
                  className="border border-slate-300 p-4 font-semibold text-gray-600 sm:text-lg"
                >
                  {value}
                </td>
              ))}
              {Action && (<td className="border border-slate-300 p-4  sm:text-lg">
          {actionIcons.map((icon, index) => (
             <span key={index}>  
             <Link
            key={index}
            to={`${icon.to}/${item?.id}/${item?.Name}/${item?.Active}`}
            className="text-blue-500 hover:text-blue-700"
               >
                 <FontAwesomeIcon icon={icon.name} size="lg"  />
               </Link>
               </span>
             ))}
              </td>)}
            </tr>
          ))}
        </tbody>
        
      </table>
      <ReactPaginate
      previousLabel={"Previous"}
      nextLabel={"Next"}
      breakLabel={"......"}
      pageCount={totalPages}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      onPageChange={handlePageClick}
      containerClassName={"flex justify-center mt-4"}
      pageClassName={"mx-1"}
      pageLinkClassName={"px-3 py-1 border border-gray-300 rounded text-gray-700 hover:bg-gray-200"}
      activeClassName={"bg-blue-500 text-white"}
      previousClassName={"mx-1"}
      nextClassName={"mx-1"}
      breakClassName={"mx-1"}
      previousLinkClassName={"px-3 py-1 border border-gray-300 rounded text-gray-700 hover:bg-gray-200"}
      nextLinkClassName={"px-3 py-1 border border-gray-300 rounded text-gray-700 hover:bg-gray-200"}
      breakLinkClassName={"px-3 py-1 border border-gray-300 rounded text-gray-700"}
    />
     
    </div>
  );
};

export default Table;