import React, { useState } from 'react'
import axios from 'axios';
import Table2 from '../UserComponents/Table2';
import SubHeading from '../commonComps/SubHeading';



const RechargeHistory = () => {

    
    const [searchParams, setSearchParams] = useState({
        service: "",
        provider: "",
        transaction_Type: "",
        status: "",
        Mob_Dth_RefNo:"",
        fromDate: "",
        toDate: "",
      });
    const [records, setRecords] = useState([]);
    const handleSearch = async () => {
      try {
        const response = await axios.get('https://api.example.com/records', {
          params: searchParams
        });
        setRecords(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    
    const handleInputChange = (e) => {
      setSearchParams({ ...searchParams, [e.target.name]: e.target.value });
    };
   
      
      
  return (
    <div>
         <SubHeading title="Recharge History" />
         <div className='bg-white  rounded-lg mb-10 m-5'>
        <SubHeading heading="Filters" />
        <div className="pt-6 grid grid-cols-1 px-6 py-3 gap-x-6 gap-y-8 sm:grid-cols-4">
       
                  <div className="sm:col-span-1">
                    <label
                    htmlFor="service"
                    className="form-label block text-lg"
                  >
                    Service Type
                  </label>
                  <div className="mt-2">
                    <select
                      id="service"
                      name="Service"
                      value={searchParams.service}
                      required
                      onChange={handleInputChange}
                      
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2 h-[48px]"
                    >
                      <option>Airtel</option>
                      <option>VI</option>
                      <option>JIO</option>
                      <option>BSNL Special Tarrif</option>
                      <option>BSNL Talk Time</option>
                    </select>
                  </div>
                  </div>
               
                  <div className="sm:col-span-1">
                    <label
                    htmlFor="Provider"
                    className="form-label block text-lg"
                  >
                    Provider
                  </label>
                  <div className="mt-2">
                    <select
                      id="provider"
                      name="provider"
                      value={searchParams.provider}
                      required
                      onChange={handleInputChange}
                      
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2 h-[48px]"
                    >
                      <option>Airtel</option>
                      <option>VI</option>
                      <option>JIO</option>
                      <option>BSNL Special Tarrif</option>
                      <option>BSNL Talk Time</option>
                    </select>
                  </div>
                  </div>
                  <div className="sm:col-span-1">
                    <label
                    htmlFor="service"
                    className="form-label block text-lg "
                  >
                    Transaction Type
                  </label>
                  <div className="mt-2">
                    <select
                      id="transactionType"
                      name="ransaction_Type"
                      value={searchParams.transaction_Type}
                      required
                      onChange={handleInputChange}
                      
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2 h-[48px]"
                    >
                      <option>Select Transaction</option>
                      <option>Failed</option>
                      <option>Pending</option>
                      <option>Success</option>
                     
                    </select>
                  </div>
                  </div>
               
                  <div className="sm:col-span-1">
                    <label
                    htmlFor="service"
                    className="form-label block text-lg"
                  >
                    Status
                  </label>
                  <div className="mt-2">
                    <select
                      id="Status"
                      name="Status"
                      value={searchParams.status}
                      required
                      onChange={handleInputChange}
                      
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2 h-[48px]"
                    >
                      <option></option>
                      <option></option>
                      <option></option>
                      <option></option>
                      <option></option>
                    </select>
                  </div>
                  </div>
               
                  <div className="sm:col-span-1">
                    <label
                    htmlFor="service"
                    className="form-label block text-lg "
                  >
                    From Date
                  </label>
                  <div className="mt-2">
                    <input
                      type='date'
                      name="fromDate"
                      value={searchParams.fromDate}
                      required
                      onChange={handleInputChange}
                      
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2 h-[48px]"
                    >
                     
                    </input>
                  </div>
                  </div>

                  <div className="sm:col-span-1">
                    <label
                    htmlFor="service"
                    className="form-label block text-lg "
                  >
                    To Date
                  </label>
                  <div className="mt-2">
                    <input
                      type='date'
                      name="toDate"
                      value={searchParams.toDate}
                      required
                      onChange={handleInputChange}
                      
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2 h-[48px]"
                    >
                     
                    </input>
                  </div>
                  </div>
               
                  <div className="sm:col-span-1">
                    <label
                    htmlFor="service"
                    className="form-label block text-lg "
                  >
                    Mobile/Dth/Ref
                  </label>
                  <div className="mt-2">
                    <select
                      id="service"
                      name="serviceType"
                      value={searchParams.Mob_Dth_RefNo}
                      required
                      onChange={handleInputChange}
                      
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2 h-[48px]"
                    >
                      <option></option>
                      <option></option>
                      <option></option>
                      <option></option>
                      <option></option>
                    </select>
                  </div>
                  </div>
                <SubHeading button="Search Records"
                  onClick={handleSearch}/>
               
               <ul>
        {records.map((record) => (
          <li key={record.id}>{}</li>
        ))}
      </ul>
      </div>
  </div>
  {/* <div>
  <input type="file" accept=".pdf" />
      <button className="bg-gradient-to-r from-blue-800 to-blue-500 text-white px-4 py-2 shadow-2xl text-lg mb-3 cursor-pointer hover:scale-105 transform-origin-center transition-transform rounded-md"
>Upload</button>
  </div> */}
   <div className='bg-white  rounded-lg mb-10 m-5'>
    <SubHeading heading="Transaction History"/>
       <Table2/> 
       </div>     
</div>
  )
}

export default RechargeHistory