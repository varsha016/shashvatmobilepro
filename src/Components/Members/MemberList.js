import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Heading from "../commonComps/Heading";
import Spinner from "../commonComps/Spinner";
import Table from "../commonComps/Table";
import { useSelector } from "react-redux";
import { allUsers } from "../APIs/settingsApi";
import { dataFormater } from "../commonComps/DataFormater";
import { faGolfBall, faListDots, faAddressBook } from "@fortawesome/free-solid-svg-icons";

const MemberList = () => {
  const [allUsersData, setAllUsersData] = useState([]);
  const [hRows, setHRows] = useState(null);
  const [itemsPerPage] = useState(2);
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState();
  const [userType, setUserType] = useState("all");

  useEffect(() => {
    fetchUsers();
  }, [userType, currentPage, searchInput]);

  const fetchUsers = async (type = userType, page = currentPage) => {
    try {
      const data = await allUsers(type, page, itemsPerPage, searchInput);
      const reqData = dataFormater(data?.result);
      setHRows(data?.result?.cols);
      setAllUsersData(reqData);
      setPages(data?.result?.metadata);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handlePageClick = (data) => {
    const selectedPage = data.selected + 1;
    setCurrentPage(selectedPage);
  };

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSelectChange = (event) => {
    setUserType(event.target.value);
    setCurrentPage(1); // Reset to first page on type change
  };

  const actionIcons = [
    { name: faGolfBall, to: "/apis/ppcodes" },
    { name: faListDots, to: "/apis/pcodes" },
    { name: faAddressBook, to: "/apis/ccodes" },
  ];

  const onSearch = () => {
    fetchUsers();
  };

 

  return (
    <div className="">
      {/* <Heading heading="All List" /> */}
      <div className="bg-white">
        <div className="flex justify-between items-between p-9">
          <select onChange={handleSelectChange} className="mb-4 border border-gray-200 rounded-md">
            <option value="all">All</option>
            <option value="Master Distributor">Master Distributor</option>
            <option value="Distributor">Distributors</option>
            <option value="Retailer">Retailers</option>
          </select>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search" 
              value={searchInput} 
              onChange={handleSearchInputChange} 
              className="w-full md:w-[400px] h-[48px] mb-5 rounded-full placeholder-gray-400 outline-none border border-grey-300 rounded-md px-2"
            />
            <button 
              onClick={onSearch} 
              className="absolute top-0 right-0.5 h-[48px] w-[48px] rounded-full bg-blue-800 text-white"
            >
              <FontAwesomeIcon icon={faSearch} size="lg" />
            </button>
          </div>
        </div>
        {allUsersData ? (
          <Table
            data={allUsersData}
            hRow={hRows}
            actionIcons={actionIcons}
            pages={pages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            onSearch={onSearch}
            searchInput={searchInput}
            handleSearchInputChange={handleSearchInputChange}
            itemsPerPage={itemsPerPage}
            handlePageClick={handlePageClick}
          />
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default MemberList