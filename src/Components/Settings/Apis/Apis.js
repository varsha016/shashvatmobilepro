import { useSelector } from "react-redux";
import { getApis } from "../../APIs/settingsApi";
import Table from "../../commonComps/Table";
import { useEffect, useState } from "react";
import Spinner from "../../commonComps/Spinner";
import {dataFormater } from "../../commonComps/DataFormater";
import {
  faGlobe,
  faListCheck,
  faPlug,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import AuthHeader from "../../../header/AuthHeader";
import SubHeading from "../../commonComps/SubHeading";

const Apis = () => {
  const [apiData, setApiData] = useState(null);
  const [hRows, setHRows] = useState(null);
  const [pages, setPages] = useState();
  
  
  const itemsPerPage = 2; 
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(0 );   

  const actionIcons = [ 
    { name: faListCheck, to: "/apis/ppcodes" },
    { name: faPlug, to: "/apis/pcodes" },
    { name: faGlobe, to: "/apis/ccodes" },
  ];

  const getApiData = async (page=1) => { 
      
    const data = await getApis(page, itemsPerPage,searchInput);
    console.log(data);
    const reqData = dataFormater(data?.result);
  setApiData(reqData);
    setPages(data?.result?.metadata);
    setHRows(data?.result?.cols);
    setCurrentPage(data?.result?.metadata?.current_page || 1);
  };
  
  useEffect(() => {
    
    getApiData(); 
  }, []); 

  
const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };
  const onSearch = (searchInput) => {
    console.log(searchInput ,"searchInput");
  }
  /////////////////////////
  
  const handlePageClick = async(data) => {
    const selectedPage = data.selected + 1
    const fetchData = await  getApiData(selectedPage);
   
  };
  return (
    <div>
      {/* <pre>{JSON.stringify(pages, null, 2)}</pre> */}
      <div className="mt-10"></div>
      <SubHeading title="APIs" sidebutton="Add New Api"  link="/apis/new" className="flex"/>
      <SubHeading  sidebutton="Utility API"  link="/apis/utilityapi"/>
   
      {apiData 
      ? <Table 
          hRow={hRows} 
          data={apiData}
          Action
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
      : <Spinner />}
      
    </div>
  );
};
export default Apis;