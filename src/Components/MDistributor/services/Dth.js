import { useState } from "react";
import SubHeading from "../../commonComps/SubHeading";
import Table2 from "../../UserComponents/Table2";


const Dth = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [rechargeDTH, setRechargeDTH] = useState({
    dthNumber: "",
    serviceProvider: "",
    amount: "",
  });

  const [dthActivation, setDTHActivation] = useState({
    actServiceProvider: "",
    boxType: "",
    months: "",
    amount: "",
    userName: "",
    address: "",
    locality: "",
    mobileNumber: "",
    pinCode: "",
  });

  const DTHRecharge = () => {
    const { dthNumber, serviceProvider, amount } = rechargeDTH;
    return (
      <>
      
      <div>
        {/* //line 1 */}
        <div className="pt-6 grid grid-cols-1 px-6 py-3 gap-x-6 gap-y-8 sm:grid-cols-4">
          <div className="sm:col-span-1">
            <label
              htmlFor="dth-number"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              DTH Number
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="dth-number"
                id="dth-number"
                placeholder="  Enter DTH number"
                required={true}
                value={dthNumber}
                onChange={(e) => {
                  setRechargeDTH({
                    ...rechargeDTH,
                    dthNumber: e.target.value,
                  });
                }}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 h-[50px] px-2"
                />
            </div>
          </div>
          <div className="sm:col-span-1">
            <label
              htmlFor="provider"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Service Provider
            </label>
            <div className="mt-2">
              <select
                id="provider"
                name="provider"
                value={serviceProvider}
                required
                onChange={(e) =>
                  setRechargeDTH({
                    ...rechargeDTH,
                    serviceProvider: e.target.value,
                  })
                }
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 h-[50px] px-2"
                >
                <option>Select Provider</option>
                <option>Airtel Digital TV</option>
                <option>Dish TV</option>
                <option>Sun Direct</option>
                <option>Tata Play</option>
                <option>videocon D2H</option>
              </select>
            </div>
          </div>

          <div className="sm:col-span-1">
            <label
              htmlFor="amount"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Recharge Amount
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="amount"
                id="amount"
                required
                placeholder="  Enter Recharge Amount"
                value={amount}
                onChange={(e) =>
                  setRechargeDTH({
                    ...rechargeDTH,
                    amount: e.target.value,
                  })
                }
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 h-[50px] px-2"
                />
            </div>
          </div>
        </div>
          <div className="flex gap-3 p-5">
          <SubHeading button= "Recharge Now" />
          <SubHeading button= "DTH Info" />
          </div>
          
      </div>
      </>
    );
  };

  const DTHActivation = () => {
    const {
      actServiceProvider,
      boxType,
      months,
      amount,
      userName,
      address,
      locality,
      mobileNumber,
      pinCode,
    } = dthActivation;
    return (
      <div className="">
        {/* //line 1 */}
        <div className="pt-6 grid grid-cols-1 px-6 py-3 gap-x-6 gap-y-8 sm:grid-cols-4">
          <div className="sm:col-span-1">
            <label
              htmlFor="provider"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Service Provider
            </label>
            <div className="mt-2">
              <select
                id="provider"
                name="provider"
                value={actServiceProvider}
                required
                onChange={(e) =>
                  setDTHActivation({
                    ...dthActivation,
                    actServiceProvider: e.target.value,
                  })
                }
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 h-[50px] px-2"
                >
                <option>Select Provider</option>
                <option>Airtel Digital TV</option>
                <option>Dish TV</option>
                <option>Sun Direct</option>
                <option>Tata Play</option>
                <option>videocon D2H</option>
              </select>
            </div>
          </div>

          <div className="sm:col-span-1">
            <label
              htmlFor="box-type"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Box Type
            </label>
            <div className="mt-2">
              <select
                id="box-type"
                name="box-type"
                value={boxType}
                required
                onChange={(e) =>
                  setDTHActivation({
                    ...dthActivation,
                    boxType: e.target.value,
                  })
                }
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 h-[50px] px-2"
                >
                <option>Select Box Type</option>
                <option>SD</option>
                <option>HD</option>
              </select>
            </div>
          </div>

          <div className="sm:col-span-1">
            <label
              htmlFor="months"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Months
            </label>
            <div className="mt-2">
              <select
                id="months"
                name="months"
                value={months}
                required
                onChange={(e) =>
                  setDTHActivation({
                    ...dthActivation,
                    months: e.target.value,
                  })
                }
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 h-[50px] px-2"
                >
                <option>Select months</option>
                <option>1 month</option>
                <option>3 months</option>
                <option>6 months</option>
                <option>9 months</option>
                <option>Annual</option>
              </select>
            </div>
          </div>

          <div className="sm:col-span-1">
            <label
              htmlFor="amount"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Recharge Amount
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="amount"
                id="amount"
                required
                placeholder="  Enter Recharge Amount"
                value={amount}
                onChange={(e) =>
                  setDTHActivation({
                    ...dthActivation,
                    amount: e.target.value,
                  })
                }
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 h-[50px] px-2"
                />
            </div>
          </div>

          <div className="sm:col-span-1">
            <label
              htmlFor="user-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              User Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="user-name"
                id="user-name"
                placeholder="  Enter User Name"
                required={true}
                value={userName}
                onChange={(e) => {
                  setDTHActivation({
                    ...dthActivation,
                    userName: e.target.value,
                  });
                }}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 h-[50px] px-2"
                />
            </div>
          </div>

          <div className="sm:col-span-1">
            <label
              htmlFor="address"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Address
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="address"
                id="address"
                placeholder="  Enter Address"
                required={true}
                value={address}
                onChange={(e) => {
                  setDTHActivation({
                    ...dthActivation,
                    address: e.target.value,
                  });
                }}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 h-[50px] px-2"
                />
            </div>
          </div>

          <div className="sm:col-span-1">
            <label
              htmlFor="localityr"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Nearby Locality
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="localityr"
                id="localityr"
                placeholder="  Enter Nearby locality"
                required={true}
                value={locality}
                onChange={(e) => {
                  setDTHActivation({
                    ...dthActivation,
                    locality: e.target.value,
                  });
                }}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 h-[50px] px-2"
                />
            </div>
          </div>

          <div className="sm:col-span-1">
            <label
              htmlFor="mobile-number"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Mobile Number
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="mobile-number"
                id="mobile-number"
                placeholder="  Enter Mobile number"
                required={true}
                value={mobileNumber}
                onChange={(e) => {
                  setDTHActivation({
                    ...dthActivation,
                    mobileNumber: e.target.value,
                  });
                }}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 h-[50px] px-2"
                />
            </div>
          </div>

          <div className="sm:col-span-1">
            <label
              htmlFor="pin-code"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              PIN Code
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="pin-code"
                id="pin-code"
                placeholder="  Enter PIN code"
                required={true}
                value={pinCode}
                onChange={(e) => {
                  setDTHActivation({
                    ...dthActivation,
                    pinCode: e.target.value,
                  });
                }}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 h-[50px] px-2"
                />
            </div>
          </div>
        </div>

        <div className="pt-6 grid grid-cols-1 px-6 py-3 gap-x-6 gap-y-8 sm:grid-cols-4">
          {/* <button className=" sm:col-span-1 block text-sm font-medium leading-6 text-white bg-sky-400 hover:bg-sky-500 rounded-md py-2">
            Recharge Now
          </button> */}
          <SubHeading button="Recharge Now" />
        </div>
      </div>
    );
  };

  return (
    <>
        <SubHeading title="DTH Recharge" />
        <div className="mx-3 my-4 rounded-lg shadow-md bg-white">
          
        <div className="grid grid-cols-2  text-center cursor-pointer  ">
        
          <div
            onClick={() => setTabIndex(0)}
            className={
              tabIndex === 0
                ? "  rounded-md text-white"
                : ""
            }
          >
           <SubHeading div="DTH" />
          </div>
          <div
            onClick={() => setTabIndex(1)}
            className={
              tabIndex === 1
                ? "  rounded-md text-white"
                : ""
            }
          >
            <SubHeading div="DTH Activation"/>
          </div>
        </div>
        {/* <div> */}
          {/* <div className="bg-white"> */}
            {tabIndex === 0 ? DTHRecharge() : DTHActivation()}
          {/* </div> */}
          {/* </div> */}
       </div>
       <div className='bg-white  rounded-lg mb-10 m-5'>
      <SubHeading heading="Last 10 Transactions"/>
   <Table2/>
   </div>
    </>
  );
};
export default Dth;
