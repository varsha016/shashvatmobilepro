import React, { useEffect, useState } from 'react'
import Table from '../commonComps/Table'
import { allUsers } from '../APIs/settingsApi';
import { useSelector } from 'react-redux';
import { dataFormater } from '../commonComps/DataFormater';
import Spinner from '../commonComps/Spinner';
import Heading from '../commonComps/Heading';
import SubHeading from '../commonComps/SubHeading';

const MasterDistributor = () => {
  const [masterdistributor, setMasterDistributor] = useState(null);
  const [hRows, setHRows] = useState(null);

  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    getMastDistributor();
  }, [masterdistributor?.length]);

  const getMastDistributor = async () => {
    const data = await allUsers(token,"Master Distributor");
    const reqData = dataFormater(data?.result);
    setHRows(data.result.cols);
    setMasterDistributor(reqData);
  };
  return (
    <div>
      
      <SubHeading title="Master Distributor List" />
      {masterdistributor ? <Table data={masterdistributor} hRow={hRows}  /> : <Spinner />}
    </div>
  )
}

export default MasterDistributor