import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { allUsers } from '../APIs/settingsApi';
import { dataFormater } from '../commonComps/DataFormater';
import Table from '../commonComps/Table';

import Spinner from '../commonComps/Spinner';
import SubHeading from '../commonComps/SubHeading';


const DistributorList = () => {
  const [distributorlist, setDistributorlist] = useState(null);
  const [hRows, setHRows] = useState(null);
const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    getDistributor();
  }, [distributorlist?.length]);

  const getDistributor = async () => {
    const data = await allUsers(token,"Distributor");
    const reqData = dataFormater(data?.result);
    setHRows(data.result.cols);
    setDistributorlist(reqData);
  };
  return (
    <div>
      <SubHeading title="Distributor List"/>
      {distributorlist ? <Table data={distributorlist} hRow={hRows}/> : <Spinner />}
    </div>
  )
}
export default DistributorList