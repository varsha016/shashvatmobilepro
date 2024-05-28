import React, { useState } from 'react'
import Heading from '../commonComps/Heading';
import SubHeading from '../commonComps/SubHeading';

const AddPayment = () => {
    const [formData, setFormData] = useState({
        Payment_Mode: '',
        Account_Name: '',
        Account_Number: '',
        IFSC_code: '',
        Logo: '',
        Status: '',

       
    });
    const [showTable, setShowTable] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Add your form submission logic here
    };
    const initialFormData = {
      // Initial form data
  };
    const handleCancel = () => {
      setFormData(initialFormData); // Reset form data
      setShowTable(false); // Hide table
  };
  return (<>
    <SubHeading title="Add Payment Mode" />
    <h1 className="bg-sky-400 rounded-t-md  cursor-pointer p-2 mb-4">Add Team Details</h1>
            <form onSubmit={handleSubmit} autoComplete='off' className="w-full">
                <div className="grid grid-cols-1 gap-4">
                    <div>
                        <label htmlFor="Payment_Mode" className="block text-sm font-medium text-gray-700">Payment Mode</label>
                        <input
                            id="Payment_Mode"
                            name="Payment_Mode"
                            type="text"
                            placeholder='Name Of Payment Mode'
                            value={formData.Payment_Mode}
                            required={true}
                            onChange={handleChange}
                            className="block sm:max-w-xs w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                    </div>
                    <div>
                        <label htmlFor="Account_Name" className="block text-sm font-medium text-gray-700">Account Name</label>
                        <input
                            id="Account_Name"
                            name="Account_Name"
                            type="text"
                            placeholder='Enter Account Name'
                            value={formData.Account_Name}
                            required={true}
                            onChange={handleChange}
                            className="block sm:max-w-xs w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 >
                          
                        </input>
                    </div>
                    <div>
                        <label htmlFor="Account_Number" className="block text-sm font-medium text-gray-700">Account Number</label>
                        <input
                            id="Account_Number"
                            name="Account_Number"
                            type="text"
                            placeholder='Enter Account Number'
                            value={formData.Account_Number}
                            required={true}
                            onChange={handleChange}
                            className="block sm:max-w-xs w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        >
                          
                        </input>
                    </div>
                    <div>
                        <label htmlFor="IFSC_code" className="block text-sm font-medium text-gray-700">IFSC Code</label>
                        <input
                            id="IFSC_code"
                            name="IFSC_code"
                            placeholder='IFSC_Code'
                            type="text"
                            value={formData.IFSC_code}
                            required={true}
                            onChange={handleChange}
                            className="block sm:max-w-xs w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            >
                          
                        </input>
                    </div>
                    <div>
                        <label htmlFor="Logo" className="block text-sm font-medium text-gray-700">Logo</label>
                        <input
                            id="Logo"
                            name="Logo"
                            placeholder='Choose Logo'
                            type="file"
                            value={formData.Logo}
                            onChange={handleChange}
                            required={true}
                            className="block sm:max-w-xs w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            >
                          
                        </input>
                    </div>
                    <div>
                        <label htmlFor="Status" className="block text-sm font-medium text-gray-700"> Status</label>
                        <select
                            id="Status"
                            name="Status"
                            placeholder='Choose Status'
                            type="file"
                            value={formData.Status}
                            onChange={handleChange}
                            className="block sm:max-w-xs w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            >
                          
                          <option>Active</option>
                          <option>Block</option>
                        </select>
                    
                    <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">
                    Save
                </button>
                <button type="cancel" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleCancel}>
                    Cancel
                </button>
                </div>
                </div>
                </form>
    </>
    
  )
}

export default AddPayment