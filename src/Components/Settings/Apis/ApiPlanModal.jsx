import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addApiSlabCodeAction } from '../../../Slices/settingsSlice';

const ApiPlanModal = ({ onClose, providerId, providers, setProviders, setProviderData, providerData, setData, }) => {
    const [filledForms, setfilledForms] = useState([{ amount: "", percentage: "", isflat: '', from: '', to: '' }])

    const token = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();
    const { id } = useParams();

    // Find the provider with the matching providerId
    const provider = providers.find(provider => provider.id === providerId);

    // Extract slab data from the provider, or default to an empty array
    const initialSlabData = provider ? provider.slab : [];

    const [formData, setFormData] = useState(initialSlabData.length > 0 ? initialSlabData : filledForms);

    const handleInputChange = (index, e) => {
        const { name, value } = e.target;
        setFormData(prevData => {
            const newData = [...prevData];
            newData[index] = { ...newData[index], [name]: value };
            return newData;
        });
    };


    const handleSave = () => {
        const filteredForms = formData.filter(form => (
            form.amount !== '' &&
            form.percentage !== '' &&
            form.isflat !== '' &&
            form.from !== '' &&
            form.to !== ''
        ));
        setData(filteredForms);
        // Reset formData
        setFormData([{ amount: '', percentage: '', isflat: '', from: '', to: '' }]);

        if (filteredForms.length === 0) {
            onClose();
            return;
        }

        const data = {
            api_id: id,
            provider_id: providerId,
            isActive: true,
            token,
            slab: filteredForms,
        };
        const updatedProviderData = [...providerData, data];
        setProviderData(updatedProviderData);
        console.log(providerData)

        dispatch(addApiSlabCodeAction(data));
        onClose();
    };

    const handleAdd = () => {
        setFormData([...formData, { amount: '', percentage: '', isflat: '', from: '', to: '' }]);
    };

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-white p-4 rounded shadow-lg">
                    <h2 className="text-lg font-bold mb-4">Modal Title {providerId}</h2>
                    <div className="bg-white rounded p-3 w-auto h-auto z-50">
                        {formData?.map((data, index) => (
                            <form key={index}>
                                <label className="m-3 me-1">From</label>
                                <input
                                    type="number"
                                    name="from"
                                    value={data.from}
                                    onChange={(e) => handleInputChange(index, e)}
                                    className="border border-gray-200 rounded-md w-auto py-2 px-1 mt-4 me-2"
                                />
                                <label htmlFor="end" className="m-3 me-1">To</label>
                                <input
                                    type="number"
                                    name="to"
                                    value={data.to}
                                    onChange={(e) => handleInputChange(index, e)}
                                    className="border border-gray-200 rounded-md py-2 px-1 me-2"
                                />
                                <label htmlFor="end" className="m-3 me-1">Amount</label>
                                <input
                                    type="number"
                                    name="amount"
                                    value={data.amount}
                                    onChange={(e) => handleInputChange(index, e)}
                                    className="border border-gray-200 rounded-md py-2 px-1 me-2"
                                />
                                <label htmlFor="end" className="m-3 me-1">Percentage</label>
                                <input
                                    type="number"
                                    name="percentage"
                                    value={data.percentage}
                                    onChange={(e) => handleInputChange(index, e)}
                                    className="border border-gray-200 rounded-md py-2 px-1 me-2"
                                />
                                <label className='m-3 me-1'>Is Flat</label>
                                <select
                                    type="text"
                                    className="border border-gray-200 rounded-md py-2 px-1 me-2"
                                    id="isflat"
                                    name="isflat"
                                    value={data.isflat}
                                    required
                                    onChange={(e) => handleInputChange(index, e)}
                                >
                                    <option value="">Select</option>
                                    <option value="true">True</option>
                                    <option value="false">False</option>
                                </select>

                                {index === formData.length - 1 && (
                                    <div>
                                        <button
                                            onClick={handleAdd}
                                            className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 ms-5"
                                        >
                                            Add
                                        </button>

                                    </div>
                                )}
                            </form>
                        ))}

                        <div className="flex justify-end">
                            <button
                                onClick={onClose}
                                className="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-10 mr-5"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-10"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ApiPlanModal;