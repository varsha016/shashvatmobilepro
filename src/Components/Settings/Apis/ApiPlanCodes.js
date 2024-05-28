import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Heading from '../../commonComps/Heading';
import { useDispatch, useSelector } from "react-redux";
// import Input from './Input';
import ApiPlanModal from './ApiPlanModal';
import { useNavigate } from "react-router-dom";
import { addApiPlanProviders, getApiPlanProviders } from '../../APIs/settingsApi';
import { saveAipProvider } from '../../../Slices/settingsSlice';
import SubHeading from '../../commonComps/SubHeading';

const ApiPlanCodes = () => {

    const [providerData, setProviderData] = useState([])
    const [Data, setData] = useState([])
    const [selectedId, setSelectedId] = useState(null)

    const token = useSelector((state) => state.auth.token);
    const { pData, pCols } = useSelector((state) => state.settingOption.getProvider);
    const [selectedService, setSelectedService] = useState('All Services');
    const [providers, setProviders] = useState([]);
    const [hRows, setHRows] = useState(pCols);
    const dispatch = useDispatch();
    const { id, name, active } = useParams();






    const [showModal, setShowModal] = useState(false);
    const [selectedProviderId, setSelectedProviderId] = useState(null);


    const handleEditClick = (providerId, i) => {
        setSelectedProviderId(providerId);
        console.log(providerId);
        setSelectedId(i)
        setShowModal(providerId);
    };

    const handleModalClose = () => {
        setShowModal(false);

    };
    useEffect(() => {
        fetchData();
        console.log(id,)
        console.log(selectedId,)


    }, []);

    const fetchData = async () => {
        try {
            const data = await dispatch(getApiPlanProviders({ token, id }));
            setProviders(data?.result?.data);
            console.log(data?.result?.data)
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    console.log(providerData, "providers")

    const handleAddProvider = (e) => {
        e.preventDefault();
        console.log(providers, "Updated Providers");

        const data = {
            providers,
            id,
            name
        };

        dispatch(saveAipProvider(data));
    };

    useEffect(() => {
        if (selectedId !== null) {

            let tempprov = providers;
            tempprov[selectedId].slab = Data;
            setProviders(tempprov);
            setSelectedId(null);
        }
    }, [Data]);

    return (
        <div>
            <SubHeading title={`${name} API Plans`} />
            <pre>{JSON.stringify(providers, null, 2)}</pre>
            <pre>{JSON.stringify(Data, null, 2)}</pre>
            <div className=" bg-sky-400 rounded-t-md  cursor-pointer p-4 mt-3 mb-4 font-semibold">
                {`${name} API Plans Details`}
            </div>
            <div className=" bg-red-500 rounded-t-md  cursor-pointer p-2 mt-3 mb-4 text-white font-bold">
                Clicking "Apply To All" will apply commission for "All Providers" displayed below.
            </div>
            <div className="mt-10 grid grid-cols-4 px-6 py-3 gap-x-6 gap-y-8 sm:grid-cols-4">
                <div className="sm:col-span-1">
                    <label htmlFor="services"
                        className="block text-sm font-medium leading-6 text-gray-900">
                        Select a service
                    </label>
                    {/* <select value={selectedService} onChange={handleChange}
                        className="block sm:max-w-xs w-full h-[48px] mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                        <option value="">Select a Service</option>
                        {services.map((service) => (
                            <option key={service.service_id} value={service.service_name}>{service.service_name}</option>
                        ))}
                    </select> */}
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
                    className=" w-full max-w-60 rounded-md bg-indigo-600  h-[48px] text-sm  text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50 hover:scale-110 transform-origin-center transition-transform font-bold mt-8">
                    Apply To All
                </button>
            </div>
            <hr />


            <h2 className='font-semibold text-xl m-3  '>API ID {id}</h2>
            <div className='className="mt-10 grid grid-cols-5 px-6 py-3 gap-x-6 gap-y-8 sm:grid-cols-5'>
                <div className="sm:col-span-1  ">
                    <h2 className='font-semibold text-xl m-3  '>Providers Name </h2>
                    <div className="">
                        {providers?.map((provider, i) => (
                            <div
                                key={i}
                                className="px-2 block sm:max-w-xs w-full h-[48px] rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 mb-3 font-bold"
                            >{provider.name}</div>
                        ))}
                    </div>
                    {showModal && <ApiPlanModal providerId={selectedProviderId} onClose={handleModalClose} setProviderData={setProviderData} providerData={providerData} providers={providers} setData={setData} />}

                </div>

                <div className="sm:col-span-1 ">
                    <h2 className='font-semibold text-xl m-3'>Amount </h2>
                    <div className=" ">
                        {providers?.map((provider, i) => (
                            <input
                                key={i}
                                defaultValue={provider.commission_amt}
                                onChange={(event) => {
                                    const newValue = event.target.value;
                                    const updatedProviders = providers.map((p, index) =>
                                        index === i ? { ...p, commission_amt: newValue } : p
                                    );
                                    setProviders(updatedProviders);
                                }}
                                className="px-2 block sm:max-w-xs w-full h-[48px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 mb-3"
                            />

                        ))}
                    </div>
                </div>

                <div className="sm:col-span-1 ">
                    <h2 className='font-semibold text-xl m-3 '>Percentage </h2>
                    <div className=" ">
                        {providers?.map((provider, i) => (
                            <input
                                key={i}
                                defaultValue={provider.commission_perc}
                                onChange={(event) => {
                                    const newValue = event.target.value;
                                    const updatedProviders = providers.map((p, index) =>
                                        index === i ? { ...p, commission_perc: newValue } : p
                                    );
                                    setProviders(updatedProviders);
                                }}
                                className="px-2 block sm:max-w-xs w-full h-[48px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 mb-3"
                            />
                        ))}
                    </div>
                </div>
                <div className="sm:col-span-1 ">
                    <h2 className='font-semibold text-xl m-3'>Is Flat </h2>
                    <div className=" ">
                        {providers?.map((provider, i) => (
                            <select
                                key={i}
                                defaultValue={provider.isflat}
                                onChange={(event) => {
                                    const newValue = event.target.value;
                                    const updatedProviders = providers.map((p, index) =>
                                        index === i ? { ...p, isflat: newValue } : p
                                    );
                                    setProviders(updatedProviders);
                                }}
                                className="px-2 block sm:max-w-xs w-full h-[48px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 mb-3"
                            >
                                <option>Select </option>
                                <option value='yes'>Yes</option>
                                <option value='no'>No</option>
                            </select>
                        ))}
                    </div>
                </div>
                <div className="sm:col-span-1 gap-8">
                    <h2 className='font-semibold text-xl  m-3'>Slab</h2>
                    <div className=" ">
                        {providers?.map((provider, i) => (
                            <div className='mb-10'>
                                <button className=' font-bold ' onClick={() => handleEditClick(provider.id, i)}>+</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <button className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-10 ms-5" onClick={handleAddProvider}>
                Save
            </button>
            <button className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-10 ms-5">
                Cancel
            </button>
        </div>
    )
}
export default ApiPlanCodes;