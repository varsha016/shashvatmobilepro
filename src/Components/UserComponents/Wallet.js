import React, { useState, useEffect } from 'react'
import axios from 'axios';
import SubHeading from '../commonComps/SubHeading';

const Wallet= () => {

    
    const [searchParams, setSearchParams] = useState({
        
        Transaction_Type: "",
        Status: "",
        Team_Member: "",
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
      axios.get("https://example.com/records", )
      .then(response => {
        setTransactions(response.data.slice(0, 10));
      })
      .catch(error => {
        console.error('Error fetching transactions:', error);
      });
    }, []);
  return (
    <div>
        <SubHeading title="Wallet" />
        
        <div className="pt-6 grid grid-cols-1 px-6 py-3 gap-x-6 gap-y-8 sm:grid-cols-4">
       
                  <div className="sm:col-span-1">
                    <label
                    htmlFor="transaction_type"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Transaction Type
                  </label>
                  <div className="mt-2">
                    <select
                      id="transaction"
                      name="Transaction_Type"
                      value={searchParams.Transaction_Type}
                      required
                      onChange={handleInputChange}
                      
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>Select Transation Type</option>
                      <option>Receive Money</option>
                      <option>Reverse </option>
                      <option>Send Money</option>
                      
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
                      id="status"
                      name="Status"
                      value={searchParams.Status}
                      required
                      onChange={handleInputChange}
                      
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>Select Status</option>
                      <option>Failed</option>
                      <option>Pending</option>
                      <option>Success</option>
                      
                    </select>
                  </div>
                  </div>

                  <div className="sm:col-span-1">
                    <label
                    htmlFor="team member"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Team Member
                  </label>
                  <div className="mt-2">
                    <select
                      id="teammember"
                      name="Team_Member"
                      value={searchParams.Team_Member}
                      required
                      onChange={handleInputChange}
                      
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>Select Team Member</option>
                      <option>xyz</option>
                      
                      
                    </select>
                  </div>
                  </div>
                 
               
                  <div className="sm:col-span-1">
                    <label
                    htmlFor="from date"
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
                    htmlFor="to date"
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
                    htmlFor="Ref Number"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Ref Number
                  </label>
                  <div className="mt-2">
                    <input
                      id="ref number"
                      name="ref number"
                      placeholder='Mobile/DTH/Ref Number'
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
  <div className=" bg-sky-400 rounded-t-md text-center cursor-pointer p-2">Transaction History </div>
  <table className="border-collapse w-full mt-5">
      <thead className="bg-grey-700 ">
        <tr >
          <th >Date</th>
        <th >Transaction Details</th>
        <th >Actual Amount</th>
        <th >Old Amount</th>
        <th >Amount</th>
       <th >New Amount</th>
         
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction  => (
          <tr key={transaction.id}>
            <td>{transaction.Trasanction_Details}</td>
            <td>{transaction.date}</td>
            <td>{transaction.actualamount}</td>
            <td>{transaction.oldAmount}</td>
            <td>{transaction.amount}</td>
            
            <td>{transaction.newAmont}</td>
          </tr>
        ))}
      </tbody>
    </table>
</div>
  )
}

export default Wallet;