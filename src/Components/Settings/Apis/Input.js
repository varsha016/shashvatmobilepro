import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Heading from '../../commonComps/Heading';
import { useDispatch, useSelector } from "react-redux";
import Input from './Input';

const ApiPlanCodes = () => {
    const services = [
        'All Services',
        'Adhar Pay',
        'Credit Card payment',
        'Dth',
        'Electricity',
        'GAS',
        'Landline',
        'Money Transfer',
        'Postpaid',
        'Prepaid',
        'UTI PSA Register',
        'Water',
        // Add more services as needed
    ];

    
  const token = useSelector((state) => state.auth.token);
  const { pData, pCols } = useSelector(
    (state) => state.settingOption.getProvider
  );
  const[selectedService, setSelectedService] = useState('All Services');
  const [providers, setProviders] = useState(pData);
  // const [providerData, setproviderData] = useState();
  const [hRows, setHRows] = useState(pCols);
  const dispatch = useDispatch();


    useEffect(() => {
        if (selectedService === 'All Services') {
            // Fetch all providers
            fetch('https://finmatrixnodejs.onrender.com/api/getproviders?format=table')
                .then((response) => response.json())
                .then((data) => setProviders(data));
        } else {
            // Fetch providers based on selected service
            fetch(`https://finmatrixnodejs.onrender.com/api/getproviders${selectedService.toLowerCase()}_providers`)
                .then((response) => response.json())
                .then((data) => setProviders(data));
        }
    }, [selectedService]);

    const handleChange = (e) => {
        const service = e.target.value;
        setSelectedService(service);
    };

    return (
        <>
        {/* <pre>{JSON.stringify(providers, null, 2)}</pre> */}
            {/* <Heading heading={`${name} API Plans`} /> */}
            {/* <div className=" bg-sky-400 rounded-t-md  cursor-pointer p-4 mt-3 mb-4 font-semibold">
                {`${name} API Plans Details`}
            </div> */}
            <div className=" bg-red-500 rounded-t-md  cursor-pointer p-2 mt-3 mb-4 text-white font-bold">
                Clicking "Apply To All" will apply commission for "All Providers" displayed below.
            </div>
            <div className="mt-10 grid grid-cols-4 px-6 py-3 gap-x-6 gap-y-8 sm:grid-cols-4">
                
                <div className="sm:col-span-1">
                   <label htmlFor="services"
                          className="block text-sm font-medium leading-6 text-gray-900">
                          Select a service:
                    </label>
                    <select
                        id="services"
                        value={selectedService}
                        onChange={handleChange}
                        className="block sm:max-w-xs w-full h-[48px] mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        {services.map((service) => (
                            <option key={service} value={service}>
                                {service}
                            </option>
                        ))}
                    </select>
                </div>
                {/* Other form elements */}
                <div className="sm:col-span-1">
                    <label htmlFor="amount" className="block text-sm font-medium leading-6 text-gray-900">
                        Amount
                    </label>
                    <div className="mt-2">
                        <input
                            type="number"
                            placeholder="0"
                            className="px-2 block sm:max-w-xs w-full h-[48px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                        />
                    </div>
                </div>

                <div className="sm:col-span-1">
                    <label htmlFor="account" className="block text-sm font-medium leading-6 text-gray-900">
                        Percentage
                    </label>
                    <div className="mt-2">
                        <input
                            type="number"
                            placeholder="0"
                            className="px-2 block sm:max-w-xs w-full h-[48px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <button
                    className=" w-full max-w-60 rounded-md bg-indigo-600  h-[48px] text-sm  text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50 hover:scale-110 transform-origin-center transition-transform">
                    Apply To All
                </button>
            </div>
            <hr />
            {providers.length > 0 && (
                <div>
                    <h2>Providers:</h2>
                    <ul>
                        {providers.map((providerDetails) => (
                            <li key={providerDetails.id}>{providerDetails.name}</li>
                        ))}
                    </ul>
                </div>
            )}
            
        </>
    );
};

export default ApiPlanCodes;
