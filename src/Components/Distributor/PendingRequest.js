import React from 'react'
import SubHeading from '../commonComps/SubHeading'
import Table2 from '../UserComponents/Table2'


const PendingRequest = () => {
  return (
    <>
        <SubHeading title="Pending Wallet Top Up Request" />
        <div className='bg-white  rounded-lg mb-10 m-5'>
          <SubHeading heading="List Of Request Money (Pending)" />
          <Table2/>
        </div>
    </>
  )
}

export default PendingRequest