import React, { useState, useEffect } from 'react';
import {
    faMobileButton,
    faCreditCard,
    faSatelliteDish,
    faPhone,
    faLandmark,
    faQuestionCircle
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getServices } from '../../APIs/settingsApi';

const MSCard = () => {
    const [serviceData, setServiceData] = useState(null);
    const navigate = useNavigate();

    const getServiceStyles = (serviceName) => {
        switch (serviceName.toLowerCase()) {
            case 'prepaid':
                return {
                    bgColor: "bg-green-500",
                    textColor: "text-green-700",
                    icon: faMobileButton,
                };
            case 'dth':
                return {
                    bgColor: "bg-blue-500",
                    textColor: "text-blue-700",
                    icon: faSatelliteDish,
                };
            case 'creditcardpay':
                return {
                    bgColor: "bg-purple-500",
                    textColor: "text-purple-700",
                    icon: faCreditCard,
                };
            case 'postpaid':
                return {
                    bgColor: "bg-red-500",
                    textColor: "text-red-700",
                    icon: faPhone,
                };
            case 'landline':
                return {
                    bgColor: "bg-yellow-500",
                    textColor: "text-yellow-700",
                    icon: faLandmark,
                };
            case 'water':
                return {
                    bgColor: "bg-blue-500",
                    textColor: "text-yellow-700",
                    icon: faLandmark,
                };
            default:
                return {
                    bgColor: "bg-gray-500",
                    textColor: "text-gray-700",
                    icon: faQuestionCircle,
                };
        }
    };

    const servicesList = async () => {
        const data = await getServices();
        setServiceData(data?.result?.data);
    };

    useEffect(() => {
        servicesList();
    }, []);

    const handleNavigate = (serviceUrl) => {
        navigate(serviceUrl);
    };

    return (
        <>
            {/* <pre>{JSON.stringify(serviceData, null, 2)}</pre> */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
                {serviceData?.map((item, i) => {
                    const { bgColor, textColor, icon } = getServiceStyles(item.service_name);
                    return (
                        <div 
                            key={i} 
                            className={`w-full h-24 shadow-md flex items-center gap-4 p-4 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-lg ${bgColor} border ${textColor}`}
                            onClick={() => handleNavigate(`/masterdistributor/${item.service_name.toLowerCase()}`)}
                            style={{ cursor: 'pointer' }}
                        >
                            <FontAwesomeIcon icon={icon} className={`text-white text-3xl`} />
                            <p className={`text-white text-lg font-medium`}>{item.service_name}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default MSCard;