import { useState } from "react";
import TableComponent from "./Table2";
import SubHeading from "../commonComps/SubHeading";
import Table2 from "./Table2";

const MoneyTransfer = () => {
  const [mobileNumber, setMobileNumber] = useState("");

  return (
    <>
      <div className="mx-3 my-4 rounded-lg shadow-md">
        {/* <div className="grid  gap-4 bg-blue-800 rounded-t-md text-center cursor-pointer p-2">
          <div className=" text-white text-lg py-1 font-semibold">
           Money Transfer
          </div>
        </div> */}
        <SubHeading heading= "Money Transfer" />
        <div className="bg-white">
          {/* //line 1 */}
          <div className="pt-6 grid grid-cols-1 px-6 py-3 gap-x-6 gap-y-8 sm:grid-cols-4">
            <div className="sm:col-span-1">
              <label
                htmlFor="mobile-number"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Mobile Number
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="mobile-number"
                  id="mobile-number"
                  placeholder="  Enter 10 digit prepaid number"
                  required={true}
                  value={mobileNumber}
                  onChange={(e) => {
                    setMobileNumber(e.target.value);
                  }}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 h-[50px] px-2"
                  />
              </div>
            </div>
          </div>
          <div className="pt-6 grid grid-cols-1 px-6 py-3 gap-x-6 gap-y-8 sm:grid-cols-4">
            {/* <button className=" sm:col-span-1 block text-sm font-medium leading-6 text-white bg-sky-400 hover:bg-sky-500 rounded-md py-2"
            onClick={() => console.log(mobileNumber)}>
             Continue
            </button> */}
            <SubHeading button="Continue"
            onClick={() => console.log(mobileNumber)} />
          </div>
         </div>
       </div>
       <div className='bg-white  rounded-lg mb-10 m-5'>
  <SubHeading heading="Last 10 Transactions"/>
   <Table2/>
   </div>
    </>
  );
};

export default MoneyTransfer;
