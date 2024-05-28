import React, { useState, useEffect } from 'react'
import axios from 'axios';

const RequestMoneyListTable = () => {
    const [tableData, setTableData] = useState([]);
    const [status, setStatus] = useState('');

    const updateStatus = (isTransfer) => {
      if (isTransfer) {
        setStatus('Balance Transferred');
      } else {
        setStatus('Balance Rejected');
      }
    };
  
    useEffect(() => {
      axios.get('')
        .then(response => response.json())
        .then(data => setTableData(data));
    }, []);
  return (
    <div>
        <h1 className='mt-4 text-2xl'> Request Money List</h1>
        <div className=" bg-sky-400 rounded-t-md text-center cursor-pointer p-2 mt-3 mb-4">Last 10 Transaction</div>
       
         <table className="border-collapse w-full">
    <thead className="bg-green-700 text-white">
      <tr>
        <th className="py-2 px-4 border-b">Request Date</th>
        <th className="py-2 px-4 border-b">Request To</th>
        <th className="py-2 px-4 border-b">Amount</th>
        <th className="py-2 px-4 border-b">Details</th>
        <th className="py-2 px-4 border-b">Status</th>
      </tr>
    </thead>
    <tbody>
      {tableData.map((item, index) => (
        <tr key={index}>
          <td className="py-2 px-4 border-b">{item.requestDate}</td>
          <td className="py-2 px-4 border-b">{item.requestTo}</td>
          <td className="py-2 px-4 border-b">{item.amount}</td>
          <td className="py-2 px-4 border-b">{item.details}</td>
          <td className="py-2 px-4 border-b"> <button> {status}</button></td>
          
        </tr>
      ))}
    </tbody>
  </table></div>
  )
}

export default RequestMoneyListTable