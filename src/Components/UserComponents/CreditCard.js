import { useState } from "react";
import TableComponent from "./Table2";
import Heading from "../commonComps/Heading";
import SubHeading from "../commonComps/SubHeading";
import Table2 from "./Table2";

const CreditCard = () => {
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    amount: "",
  });

  const { cardNumber, amount } = cardDetails;
  return (
    <>
      <div className="mx-3 my-4 rounded-lg ">
        {/* <div className=" bg-sky-400 rounded-t-md text-center cursor-pointer p-2"> */}
        
        {/* </div> */}
        <SubHeading title="Credit Card" />
        <SubHeading heading="Fill the form to add credit card" />
        <div>
          <div className="bg-white">
            <div className="">
              {/* //line 1 */}
              <div className="pt-6 grid grid-cols-1 px-6 py-3 gap-x-6 gap-y-8 sm:grid-cols-4">
                <div className="sm:col-span-1">
                  <label
                    htmlFor="card-number"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Credit Card Number
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="card-number"
                      id="card-number"
                      placeholder="  Enter credit card number"
                      required={true}
                      value={cardNumber}
                      onChange={(e) => {
                        setCardDetails({
                          ...cardDetails,
                          cardNumber: e.target.value,
                        });
                      }}
                      className="block sm:max-w-xs w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-[50px]"
                    />
                  </div>
                </div>
                <div className="sm:col-span-1">
                  <label
                    htmlFor="amount"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Amount
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="amount"
                      id="amount"
                      required
                      value={amount}
                      onChange={(e) =>
                        setCardDetails({
                          ...cardDetails,
                          amount: e.target.value,
                        })
                      }
                      className="block sm:max-w-xs w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-[50px]"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-6 grid grid-cols-1 px-6 py-3 gap-x-6 gap-y-8 sm:grid-cols-4">
                {/* <button className="bg-gradient-to-r from-blue-800 to-blue-500 text-white px-4 py-2 shadow-2xl text-white font-bold py-2 px-4 rounded me-3 mb-10">
             Pay Now
                </button> */}
                <SubHeading button="Pay Now" />
              </div>
            </div>
          </div>
      
        </div>
        <div className='bg-white  rounded-lg mb-10 m-5'>
  <SubHeading heading="Credit Card History"/>
   <Table2/>
   </div>
      </div>
    </>
  );
};

export default CreditCard;
