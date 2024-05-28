import React from 'react'

const MobileTable = () => {
  return (
    <div>
      <h1 className='ms-5 text-2xl text-blue-800'>R Offers</h1>
      <hr className='ms-5 mb-5 w-[75%]'></hr>
       <table className="w-[75%] border-collapse border border-gray-400 ms-5">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 px-4 py-2 text-gray-500">Description</th>
            <th className="border border-gray-400 px-4 py-2 text-gray-500">Validity</th>
            <th className="border border-gray-400 px-4 py-2 text-gray-500">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2 text-gray-500 font-bold">Plans Will Be Listed Here</td>
            <td className="border border-gray-300 px-4 py-2 text-gray-500 font-semibold">johndoe123</td>
          </tr>
         </tbody>
      </table>
  </div>
  )
}

export default MobileTable