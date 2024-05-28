import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SubHeading from "../../commonComps/SubHeading";
import Table2 from "../../UserComponents/Table2";
import { indianStates } from "../../commonComps/Constants";


const Utility = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [tabIndex, setTabIndex] = useState(0);
  const [electricityDetails, setElectricityDetails] = useState({
    serviceProvider: "",
    accountNumber: "",
    customerNumber: "",
  });

  const [waterGasDetails, setWaterGasDetails] = useState({
    type: "",
    state: "",
    serviceProvider: "",
    accountNumber: "",
    customerNumber: "",
    amount: "",
    lastDate: "",
  });

  useEffect(() => {
    const path = location.pathname.toLowerCase();
    if (path.includes('electricity')) {
      setTabIndex(0);
    } else if (path.includes('water')) {
      setTabIndex(1);
    } else if (path.includes('gas')) {
      setTabIndex(2);
    }
  }, [location.pathname]);

  const handleTabClick = (index, path) => {
    setTabIndex(index);
    navigate(path);
  };


  const electricityForm = () => {
    const { serviceProvider, accountNumber, customerNumber } = electricityDetails;
    return (
      <>
        <div className="">
          <div className="pt-6 grid grid-cols-1 px-6 py-3 gap-x-6 gap-y-8 sm:grid-cols-4">
            <div className="sm:col-span-1">
              <label htmlFor="service-provider" className="block text-sm font-medium leading-6 text-gray-900">
                Service Provider
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="service-provider"
                  id="service-provider"
                  placeholder="Enter service provider"
                  required={true}
                  value={serviceProvider}
                  onChange={(e) => {
                    setElectricityDetails({
                      ...electricityDetails,
                      serviceProvider: e.target.value,
                    });
                  }}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 h-[50px] px-2"
                />
              </div>
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="account" className="block text-sm font-medium leading-6 text-gray-900">
                Account Number
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="account"
                  id="account"
                  required
                  placeholder="Enter account number"
                  value={accountNumber}
                  onChange={(e) =>
                    setElectricityDetails({
                      ...electricityDetails,
                      accountNumber: e.target.value,
                    })
                  }
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 h-[50px] px-2"
                />
              </div>
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="circle" className="block text-sm font-medium leading-6 text-gray-900">
                Customer Number
              </label>
              <div className="mt-2">
                <select
                  id="circle"
                  name="circle"
                  value={customerNumber}
                  required
                  onChange={(e) =>
                    setElectricityDetails({
                      ...electricityDetails,
                      customerNumber: e.target.value,
                    })
                  }
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 h-[50px] px-2"
                >
                  {indianStates.map((state, i) => (
                    <option key={i}>{state}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="pt-6 grid grid-cols-1 px-6 py-3 gap-x-6 gap-y-8 sm:grid-cols-4">
            <SubHeading button="Fetch Bill" />
          </div>
        </div>
      </>
    );
  };

  const waterOrGasForm = () => {
    const { state, serviceProvider, accountNumber, customerNumber, amount, lastDate } = waterGasDetails;
    return (
      <>
        <div className="pt-6 grid grid-cols-1 px-6 py-3 gap-x-6 gap-y-8 sm:grid-cols-4">
          <div className="sm:col-span-1">
            <label htmlFor="state" className="block text-sm font-medium leading-6 text-gray-900">
              Select State
            </label>
            <div className="mt-2">
              <select
                id="state"
                name="state"
                value={state}
                required
                onChange={(e) =>
                  setWaterGasDetails({
                    ...waterGasDetails,
                    state: e.target.value,
                  })
                }
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 h-[50px] px-2"
              >
                <option>Select State</option>
                {indianStates.map((state, i) => (
                  <option key={i}>{state}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="sm:col-span-1">
            <label htmlFor="account-number" className="block text-sm font-medium leading-6 text-gray-900">
              Account Number
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="account-number"
                id="account-number"
                required
                placeholder="Enter Account Number"
                value={accountNumber}
                onChange={(e) =>
                  setWaterGasDetails({
                    ...waterGasDetails,
                    accountNumber: e.target.value,
                  })
                }
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 h-[50px] px-2"
              />
            </div>
          </div>

          <div className="sm:col-span-1">
            <label htmlFor="service-provider" className="block text-sm font-medium leading-6 text-gray-900">
              Service Provider
            </label>
            <div className="mt-2">
              <select
                id="service-provider"
                name="service-provider"
                value={serviceProvider}
                required
                onChange={(e) =>
                  setWaterGasDetails({
                    ...waterGasDetails,
                    serviceProvider: e.target.value,
                  })
                }
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 h-[50px] px-2"
              >
                <option>Select Service Provider</option>
                <option>1 month</option>
              </select>
            </div>
          </div>

          <div className="sm:col-span-1">
            <label htmlFor="amount" className="block text-sm font-medium leading-6 text-gray-900">
              Recharge Amount
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="amount"
                id="amount"
                required
                placeholder="Enter Recharge Amount"
                value={amount}
                onChange={(e) =>
                  setWaterGasDetails({
                    ...waterGasDetails,
                    amount: e.target.value,
                  })
                }
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 h-[50px] px-2"
              />
            </div>
          </div>

          <div className="sm:col-span-1">
            <label htmlFor="customer-number" className="block text-sm font-medium leading-6 text-gray-900">
              Customer Number
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="customer-number"
                id="customer-number"
                placeholder="Enter Customer Number"
                required={true}
                value={customerNumber}
                onChange={(e) =>
                  setWaterGasDetails({
                    ...waterGasDetails,
                    customerNumber: e.target.value,
                  })
                }
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 h-[50px] px-2"
              />
            </div>
          </div>

          <div className="sm:col-span-1">
            <label htmlFor="last-date" className="block text-sm font-medium leading-6 text-gray-900">
              Last Date
            </label>
            <div className="mt-2">
              <input
                type="number"
                name="last-date"
                id="last-date"
                placeholder="Enter Valid date"
                required={true}
                value={lastDate}
                onChange={(e) =>
                  setWaterGasDetails({
                    ...waterGasDetails,
                    lastDate: e.target.value,
                  })
                }
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 h-[50px] px-2"
              />
            </div>
          </div>
        </div>

        <div className="pt-6 grid grid-cols-1 px-6 py-3 gap-x-6 gap-y-8 sm:grid-cols-4">
          <SubHeading button="Recharge Now" />
        </div>
      </>
    );
  };

  return (
    <div className="mx-3 my-4 rounded-lg shadow-md">

      <SubHeading div={
        <div className="grid grid-cols-3 gap-4 rounded-t-md text-center cursor-pointer ">
          <div
            onClick={() => handleTabClick(0, '/masterdistributor/electricity')}
            className={
              tabIndex === 0
                ? "border rounded-md border-white py-3  text-white"
                : "py-3"
            }
          >
            <h1 className="text-white">Electricity</h1>
          </div>
          <div
            onClick={() => handleTabClick(1, '/masterdistributor/water')}
            className={
              tabIndex === 1
                ? "border rounded-md border-white py-3  text-white"
                : "py-3"
            }
          >
            <h1 className="text-white">Water</h1>
          </div>
          <div
            onClick={() => handleTabClick(2, '/masterdistributor/gas')}
            className={
              tabIndex === 2
                ? "border rounded-md border-white py-3  text-white"
                : "py-3"
            }
          >
            <h1 className="text-white">Gas</h1>
          </div>
        </div>
      } divColor="bg-blue-800" />
      {tabIndex === 0 ? electricityForm() : waterOrGasForm()}
      <div className="bg-white rounded-lg mb-10 m-5">
        <SubHeading heading="Last 10 Transactions" />
        {tabIndex === 0 ? (
          <Table2 apiEndpoint="api/electricity/example" />
        ) : tabIndex === 1 ? (
          <Table2 apiEndpoint="api/water/example" />
        ) : (
          <Table2 apiEndpoint="api/gas/example" />
        )}
      </div>
    </div>
  );
};

export default Utility;