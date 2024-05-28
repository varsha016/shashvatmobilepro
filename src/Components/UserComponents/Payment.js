import React from 'react'
import Heading from '../commonComps/Heading'
import SubHeading from '../commonComps/SubHeading'

const Payment = () => {

   
  return (
    <>
    <SubHeading
        title="Payment Modes"
        sidebutton="Add New Payment Mode"
        link="/payment/new"
      />
    <div className=" bg-sky-400 rounded-t-md text-center cursor-pointer p-2 mt-3 mb-4">List Of Payment Modes</div>
       
    </>
  )
}

export default Payment