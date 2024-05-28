import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Heading from '../commonComps/Heading';
import SubHeading from '../commonComps/SubHeading';
import Table2 from './Table2';

const Disput = () => {

    
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
      axios.get("/example.com/records", )
      .then(response => {
        setTransactions(response.data.slice(0, 10));
      })
      .catch(error => {
        console.error('Error fetching transactions:', error);
      });
    }, []);
  return (
    <div>
         <SubHeading title="Disputes" />
         <div className='bg-white  rounded-lg mb-10 m-5'>
        <SubHeading heading="Filters" />
        
        <div className="pt-6 grid grid-cols-1 px-6 py-3 gap-x-6 gap-y-8 sm:grid-cols-4">
       
                  <div className="sm:col-span-1">
                    <label
                    htmlFor="service"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Service Type
                  </label>
                  <div className="mt-2">
                    <select
                      id="service"
                      name="Service"
                      value={searchParams.Service}
                      required
                      onChange={handleInputChange}
                      
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 h-[50px] px-2"
                      >
                      <option>Adhar Pay</option>
                      <option>Credit Card Payment</option>
                      <option>DTH</option>
                      <option>Electricity</option>
                      <option>Gas</option>
                      <option>Landline</option>
                      <option>Money Transfer</option>
                      <option>PostPaid</option>
                      <option>Prepaid</option>
                    </select>
                  </div>
                  </div>
               
                  <div className="sm:col-span-1">
                    <label
                    htmlFor="Provider"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Provider
                  </label>
                  <div className="mt-2">
                    <select
                      id="Provider"
                      name="Provider"
                      value={searchParams.Provider}
                      required
                      onChange={handleInputChange}
                      
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 h-[50px] px-2"
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
                    htmlFor="From date"
                    className="block text-sm font-medium leading-6 text-gray-900"
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
                      
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 h-[50px] px-2"
                      >
                     
                    </input>
                  </div>
                  </div>

                  <div className="sm:col-span-1">
                    <label
                    htmlFor="to_date"
                    className="block text-sm font-medium leading-6 text-gray-900"
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
                      
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 h-[50px] px-2"
                      >
                     
                    </input>
                  </div>
                  </div>
               
                  <div className="sm:col-span-1">
                    <label
                    htmlFor="Mobile/Dth/Ref"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Mobile/Dth/Ref
                  </label>
                  <div className="mt-2">
                    <input
                      id="Mobile/Dth/Ref"
                      name="Mobile/Dth/Ref"
                      placeholder=' Mobile/Dth/Ref Number'
                      value={searchParams.Mob_Dth_RefNo}
                      required
                      onChange={handleInputChange}
                      
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 h-[50px] px-2"
                      >
                      
                    </input>
                  </div>
                  </div>

               {/* <button className="bg-gradient-to-r from-blue-800 to-blue-500 text-white px-4 py-2 shadow-2xl text-lg mb-3 cursor-pointer hover:scale-105 transform-origin-center transition-transform rounded-md"
               onClick={handleSearch}
               >Search Records</button> */}
               <SubHeading button="Search Records"
               onClick={handleSearch} />
               <ul>
        {records.map((record) => (
          <li key={record.id}>{record.name}</li>
        ))}
      </ul>
  </div>
 </div>
 <div className='bg-white  rounded-lg mb-10 m-5'>
  <SubHeading heading="Last 10 Transactions"/>
   <Table2/>
   </div>
</div>
  )
}

export default Disput