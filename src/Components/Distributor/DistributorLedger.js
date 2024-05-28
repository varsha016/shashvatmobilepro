import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Table2 from '../UserComponents/Table2';

import SubHeading from '../commonComps/SubHeading';


const DistributorLedger= () => {

    
    const [searchParams, setSearchParams] = useState({
        Service: "",
        Provider: "",
        Transaction_Type: "",
        Status: "",
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
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
      axios.get('https://api.example.com/records',)
      .then(response => {
        setTransactions(response.data.slice(0, 10));
      })
      .catch(error => {
        console.error('Error fetching transactions:', error);
      });
    }, []);
      
  return (
    <div>
        <SubHeading title="Complete Ledger" />
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
                      name="serviceType"
                      value={searchParams.Service}
                      required
                      onChange={handleInputChange}
                      
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:max-w-xs sm:text-sm sm:leading-6 px-2 h-[48px]"
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
                    className="form-label block text-lg"
                  >
                    Provider
                  </label>
                  <div className="mt-2">
                    <select
                      id="provider"
                      name="Provider"
                      value={searchParams.Provider}
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
                    htmlFor="transactionType"
                    className="form-label block text-lg"
                  >
                    Transaction Type
                  </label>
                  <div className="mt-2">
                    <select
                      
                      name="transactionType"
                      value={searchParams.Transaction_Type}
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
                    htmlFor="status"
                    className="form-label block text-lg"
                  >
                    Status
                  </label>
                  <div className="mt-2">
                    <select
                     
                      name="status"
                      value={searchParams.Status}
                      required
                      onChange={handleInputChange}
                      
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2 h-[48px]"
                    >
                      <option>Select Status</option>
                      <option>Failed</option>
                      <option>Pending</option>
                      <option>Success</option>
                      <option></option>
                    </select>
                  </div>
                  </div>
               
                  <div className="sm:col-span-1">
                    <label
                    htmlFor="service"
                    className="form-label block text-lg"
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
                    className="form-label block text-lg"
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
                    className="form-label block text-lg"
                  >
                    Mobile/Dth/Ref
                  </label>
                  <div className="mt-2">
                    <input
                    type='text'
                      id="mobile"
                      name="mobile dth ref"
                      placeholder='Mob/Dth/Ref'
                      value={searchParams.Mob_Dth_RefNo}
                      required
                      onChange={handleInputChange}
                      
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-1 px-2 h-[48px]"
                    >
                    
                    </input>
                  </div>
                  </div>

               <SubHeading button="Search Records" onClick={handleSearch}/>
               <ul>
        {records.map((record) => (
          <li key={record.id}>{}</li>
        ))}
      </ul>
      </div>
  </div>
  <div className='bg-white  rounded-lg mb-10 m-5'>
  <SubHeading heading="Complete Ledger" />
     <Table2/>
     </div>   
</div>
  )
}

export default DistributorLedger