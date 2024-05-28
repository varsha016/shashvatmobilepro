import React from 'react'
import SubHeading from '../commonComps/SubHeading'
import Table2 from '../UserComponents/Table2'

const RequestMoney = () => {
  return (
    <>
        <SubHeading title="Request Money" />
        <div className='grid grid-cols-2'>
            <div className='col-span-1'>
            <div className='bg-white rounded-lg mb-10 m-5'>
            <SubHeading heading="Request Money" />
                <div className='mt-7 m-5 mb-5'>
                <label
                    htmlFor="service"
                    className="form-label block text-lg ">
                    Select User Type
                </label>
                <div className="mt-1">
                    <select
                    //   id=""
                    //   name="Service"
                    //   value={}
                    //   required
                    //   onChange={}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6 px-2 h-[48px]  mt-4"
                    >
                      <option>Airtel</option>
                      <option>VI</option>
                      <option>JIO</option>
                      <option>BSNL Special Tarrif</option>
                      <option>BSNL Talk Time</option>
                    </select>
                </div>
                </div>
            
                <div className='m-5'>
                <label
                    htmlFor="service"
                    className="form-label block text-lg ">
                    Request Amount
                </label>
                  <div className="mt-2">
                    <input
                    //   type='date'
                    //   name="fromDate"
                    //   value={searchParams.fromDate}
                    //   required
                    //   onChange={handleInputChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6 px-2 h-[48px]"
                    >
                     </input>
                  </div>
                </div>

                <div className='mt-7 m-5 mb-5'>
                    <label
                    htmlFor="service"
                    className="form-label block text-lg ">
                    Transfer Mode
                    </label>
                <div className="mt-1">
                    <select
                    //   id=""
                    //   name="Service"
                    //   value={}
                    //   required
                    //   onChange={}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6 px-2 h-[48px]  mt-4"
                    >
                      <option>UPI</option>
                      <option>Netbanking</option>
                    </select>
                </div>
                </div>

                
            <div className="flex mb-5 ms-5">
          <SubHeading button="Send Request" />
          <div className='ms-5'>
          <SubHeading button="Cancel" />
          </div>
          </div>
                </div>
            </div>

            <div className='col-span-1'>
            <div className='bg-white  rounded-lg mb-10 m-5'>
            <SubHeading heading="Your Information" />
            
        <div className=" py-8 m-3 shadow-lg">
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
        </div>
        <div className='mt-5'>
        <SubHeading title="Request Money" />
        <div className='bg-white rounded-lg mb-10 m-5'>
            <SubHeading heading="Request Money" />
            <Table2/>
        </div>
        </div>
    </>
  )
}

export default RequestMoney