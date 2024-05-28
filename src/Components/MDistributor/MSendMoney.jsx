import React from 'react'
import TableComponent from '../UserComponents/Table2'
import Heading from '../commonComps/Heading'
import SubHeading from '../commonComps/SubHeading'
import Table2 from '../UserComponents/Table2'

const MSendMoney = () => {
   
    
  return (
    <div>
        <SubHeading title="Send Money To Users" />
        <div className='bg-white  rounded-lg mb-10 m-5'>
        <SubHeading heading="Transfer To User's Wallet" />
             <div className='ms-10'>
              <label
                htmlFor="last-date"
                className="block  font-medium leading-6 text-gray-900 mt-5 text-lg "
              >
                Transfer To
              </label>
              <div className="mt-2">
                <select
                  type="number"
                  name=""
                  id=""
                  placeholder="Select User"
                  required={true}
                 className="block  w-[50%] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 h-[48px] "
                >
                <optio>Select User</optio>
                </select>
              </div>
              </div>
            
              <div className='bg-white border-2 border-sky-100 shadow-lg rounded-lg rounded-lg mb-10 m-5 w-[50%] ms-10'>
                <div className=" w-full  ">
        <SubHeading heading="User Info Will be listed here" />
        </div>
        
<div className=" py-8 m-3">
  <div >
  <table className="w-full border-collapse border border-gray-400">
        {/* <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 px-4 py-2">Field</th>
            <th className="border border-gray-400 px-4 py-2">Value</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2 bg-slate-100 text-lg text-gray-500 font-bold">Name</td>
            <td className="border border-gray-300 px-4 py-2 bg-slate-100 text-gray-500 font-semibold">John Doe</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 text-gray-500 font-bold">User Name</td>
            <td className="border border-gray-300 px-4 py-2 text-gray-500 font-semibold">johndoe123</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 bg-slate-100 text-gray-500 font-bold">Mobile</td>
            <td className="border border-gray-300 px-4 py-2 bg-slate-100 text-gray-500 font-semibold">123-456-7890</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 text-gray-500 font-bold">Email</td>
            <td className="border border-gray-300 px-4 py-2 text-gray-500 font-semibold">johndoe@example.com</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 bg-slate-100 text-gray-500 font-bold">Account Balance</td>
            <td className="border border-gray-300 px-4 py-2 bg-slate-100 text-gray-500 font-semibold">$1000</td>
          </tr>
        </tbody>
      </table>
  </div>
</div>
  </div>
          <div className='ms-10 mt-10'>
              <label
                htmlFor="last-date"
                className="block  font-medium leading-6 text-gray-900 text-lg"
              >
                Account To Be Transferred
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name=""
                  id=""
                  placeholder="Amount In Rs"
                  required={true}
                 className="block  w-[50%] h-[48px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                />
                    
               
              </div>
            </div>
            <div className='ms-10 mt-3'>
              <label
                htmlFor="last-date"
                className="block  font-medium leading-6 text-gray-900 text-lg"
              >
                Credit/ Debit
              </label>
              <div className="mt-2">
                <select
                  type="number"
                  name=""
                  id=""
                  placeholder="  Enter Valid date"
                  required={true}
                 
                 
                  className="block  w-[50%] h-[48px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                >
                    <optio>Select Payment</optio>
                </select>
              </div>
              <div className='flex ms-3'>
              <SubHeading button="Send Money" />
              <div className='ms-5'>
              <SubHeading button="Cancel" />
              </div>
              </div>  
            </div>
            </div>
            <Heading heading="Send Money List" />
            <div className='bg-white  rounded-lg mb-10 m-5'>
            <SubHeading heading="Send Money List" />
            <Table2/>
            </div>
    </div>
  )
}

export default  MSendMoney