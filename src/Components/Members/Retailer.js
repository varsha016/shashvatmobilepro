import React, { useEffect, useState } from 'react'
import Table from '../commonComps/Table'
import { allUsers } from '../APIs/settingsApi';
import { useSelector } from 'react-redux';
import { dataFormater } from '../commonComps/DataFormater';
import Spinner from '../commonComps/Spinner';
import {
  faGlobe,
  faListCheck,
  faPlug,
} from "@fortawesome/free-solid-svg-icons";
import Heading from '../commonComps/Heading';
import SubHeading from '../commonComps/SubHeading';

const Retailer = () => {
  const [retailer, setRetailer] = useState(null);
  const [hRows, setHRows] = useState(null);
  const actionIcons = [
    { name: faListCheck, to: "/apis/ppcodes" },
    { name: faPlug, to: "/apis/pcodes" },
    { name: faGlobe, to: "/apis/ccodes" },
  ];
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    getRetailer();
  }, [retailer?.length]);

  const getRetailer = async () => {
    const data = await allUsers(token,"Retailer");
    const reqData = dataFormater(data?.result);
    setHRows(data.result.cols);
    setRetailer(reqData);
  };
  return (
    <div>
      <SubHeading title="Retailer List" />
      {retailer ? <Table data={retailer} hRow={hRows} Action actionIcons={actionIcons} /> : <Spinner />}
    </div>
  )
}

export default Retailer