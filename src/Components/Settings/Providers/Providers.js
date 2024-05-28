import { useEffect, useState } from "react";
import Heading from "../../commonComps/Heading";
import Table from "../../commonComps/Table";
import { getProviders } from "../../APIs/settingsApi";
import { dataFormater } from "../../commonComps/DataFormater";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../commonComps/Spinner";
import { setProviderData } from "../../../Slices/settingsSlice";
import SubHeading from "../../commonComps/SubHeading";

const Providers = () => {
  const { pData, pCols } = useSelector(
    (state) => state.settingOption.getProvider
  );
  const [providerData, setproviderData] = useState(pData);
  const [hRows, setHRows] = useState(pCols);
  const dispatch = useDispatch();
   const itemsPerPage = 2; 
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(0 );   
  const [pages, setPages] = useState();

   const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };


  const onSearch = (searchInput) => {
console.log(searchInput ,"searchInput");
  }

 

  const getProvidersData = async (page=1) => {
    const data = await getProviders(page,itemsPerPage,searchInput);
    console.log(data);
    data &&
      (() => {
        const reqData = dataFormater(data.result);
        setHRows(data.result.cols);
        setproviderData(reqData);
      dispatch(setProviderData({ data: reqData, cols: data.result.cols }));
       setPages(data?.result?.metadata);
    setCurrentPage(data?.result?.metadata?.current_page || 1);
      })();
  };
  useEffect(() => {
    getProvidersData();
  }, []);
  const handlePageClick = async(data) => {
    const selectedPage = data.selected + 1
    const fetchData = await  getProvidersData(selectedPage);
   
  };
  return (
    <>
      <SubHeading
        title="Providers"
        sidebutton="Add New Provider"
        link="/providers/new"
      />
      {providerData 
      ? 
      <Table
        data={providerData}
        hRow={hRows}
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
      
      
    </>
  );
};
export default Providers;