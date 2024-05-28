import { useEffect, useState } from "react";
import Heading from "../../commonComps/Heading";
import Table from "../../commonComps/Table";
import {dataFormater} from "../../commonComps/DataFormater";
import { useSelector } from "react-redux";
import { getServices } from "../../APIs/settingsApi";
import Spinner from "../../commonComps/Spinner";
import SubHeading from "../../commonComps/SubHeading";


const Services = ()=>{
    
    const [serveData, setServerData] = useState(null);
    const [hRows, setHRows] = useState(null);
    const [pages, setPages] = useState();
  
  
  const itemsPerPage = 2; 
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(0 );   

 


  
  

  
const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };
  const onSearch = (searchInput) => {
    console.log(searchInput ,"searchInput");
  }
  /////////////////////////
  
  

const servicesList = async(page=1)=>{
    const data = await getServices(page,itemsPerPage,searchInput);
    console.log(data);
    const reqData = dataFormater(data?.result);
    setHRows(data?.result?.cols);
    setServerData(reqData);
     setPages(data?.result?.metadata);
    setCurrentPage(data?.result?.metadata?.current_page || 1);
  
}
useEffect(() => {
    servicesList();
}, []); 
    const handlePageClick = async(data) => {
    const selectedPage = data.selected + 1
    const fetchData = await  servicesList(selectedPage);
   
  };
    return(
        <>
        <SubHeading title="Services" sidebutton="Add New Service" link="/services/new"/>
        
        {serveData ?
                <Table
                    hRow={hRows}
                    data={serveData} 
                        pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage} 
          onSearch={onSearch}
          searchInput={searchInput}
          handleSearchInputChange={handleSearchInputChange}
          itemsPerPage={itemsPerPage}
          handlePageClick={handlePageClick}
        
         /> : <Spinner/>}
        </>
    )
}

export default Services;