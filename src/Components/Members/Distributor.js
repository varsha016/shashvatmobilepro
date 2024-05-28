import React, { useEffect, useState } from 'react'
import Table from '../commonComps/Table'
import { allUsers } from '../APIs/settingsApi';
import { useSelector } from 'react-redux';
import { dataFormater } from '../commonComps/DataFormater';
import Spinner from '../commonComps/Spinner';
import Heading from '../commonComps/Heading';
import SubHeading from '../commonComps/SubHeading';


const Distributor = () => {
  const [distributor, setDistributor] = useState(null);
  const [hRows, setHRows] = useState(null);
 
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    getDistributor();
  }, [distributor?.length]);

  const getDistributor = async () => {
    const data = await allUsers(token,"Distributor");
    const reqData = dataFormater(data?.result);
    setHRows(data.result.cols);
    setDistributor(reqData);
  };
  return (
    <div>
      <SubHeading title="Distributor List"/>
      {distributor ? <Table data={distributor} hRow={hRows}/> : <Spinner />}
    </div>
  )
}

export default Distributor