import React, { useState, useEffect } from 'react'
import axios from 'axios';
import TableComponent from './Table2';
const Ledger= () => {

    
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
        <h1 className='text-3xl'> Complete Ledger</h1>
        
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
                      name="serviceType"
                      value={searchParams.Service}
                      required
                      onChange={handleInputChange}
                      
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
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
                    className="block text-sm font-medium leading-6 text-gray-900"
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
                      
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
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
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Transaction Type
                  </label>
                  <div className="mt-2">
                    <select
                      
                      name="transactionType"
                      value={searchParams.Transaction_Type}
                      required
                      onChange={handleInputChange}
                      
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
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
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Status
                  </label>
                  <div className="mt-2">
                    <select
                     
                      name="status"
                      value={searchParams.Status}
                      required
                      onChange={handleInputChange}
                      
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
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
                      
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                     
                    </input>
                  </div>
                  </div>

                  <div className="sm:col-span-1">
                    <label
                    htmlFor="service"
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
                      
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                     
                    </input>
                  </div>
                  </div>
               
                  <div className="sm:col-span-1">
                    <label
                    htmlFor="service"
                    className="block text-sm font-medium leading-6 text-gray-900"
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
                      
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                    
                    </input>
                  </div>
                  </div>

               <button className="bg-gradient-to-r from-blue-800 to-blue-500 text-white px-4 py-2 shadow-2xl text-lg mb-3 cursor-pointer hover:scale-105 transform-origin-center transition-transform"
               onClick={handleSearch}
               >Search Records</button>
               <ul>
        {records.map((record) => (
          <li key={record.id}>{}</li>
        ))}
      </ul>
  </div>
  <div className=" bg-sky-400 rounded-t-md text-center cursor-pointer p-2">Complete Ledger </div>
  <table className="border-collapse w-full mt-5">
      <thead className="bg-grey-700 ">
        <tr >
          <th >Date</th>
        <th >Transaction Details</th>
        <th >Actual Amount</th>
        <th >Credit</th>
        <th >Debit</th>
       <th >Balance</th>
         
        </tr>
      </thead>
      <tbody>
        {transactions.map(transactions  => (
          <tr key={transactions.id}>
            <td>{transactions.date}</td>
            <td>{transactions.details}</td>
            <td>{transactions.credit}</td>
            <td>{transactions.actualAmount}</td>
            <td>{transactions.debit}</td>
            <td>{transactions.balance}</td>
            
            <td>{transactions.newAmont}</td>
          </tr>
        ))}
      </tbody>
    </table>        
</div>
  )
}

export default Ledger