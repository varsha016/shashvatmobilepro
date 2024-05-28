import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


// import SubHeading from "../commonComps/SubHeading";
// import MobileTable from "../UserComponents/MobileTable";
// import Table2 from "../UserComponents/Table2";
import { indianStates } from "../../commonComps/Constants";
import MobileTable from "../../UserComponents/MobileTable";
import Table2 from "../../UserComponents/Table2";
import SubHeading from "../../commonComps/SubHeading";



const Mobiles = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [tabIndex, setTabIndex] = useState(0);
  const [rechargeDetails, setRechargeDetails] = useState({
    rechargeNumber: "",
    serviceProvider: "",
    circle: "",
    amount: "",
    accountNumber: "",
  });

  const { rechargeNumber, serviceProvider, circle, amount, accountNumber } = rechargeDetails;

  useEffect(() => {
    const path = location.pathname.toLowerCase();
    if (path.includes('prepaid')) {
      setTabIndex(0);
    } else if (path.includes('postpaid')) {
      setTabIndex(1);
    } else if (path.includes('landline')) {
      setTabIndex(2);
    }
  }, [location.pathname]);

  const handleTabClick = (index, path) => {
    setTabIndex(index);
    navigate(path);
  };
  return (
    <>
      <div className="mx-3 my-4 rounded-lg shadow-md">
        <SubHeading div={<div className="grid grid-cols-3 gap-4 rounded-t-md text-center cursor-pointer">
          <div
            onClick={() => handleTabClick(0, '/masterdistributor/prepaid')}
            className={
              tabIndex === 0 ? " text-white  font-[400]  text-blue-400 text-2xl rounded-md  py-3" : "py-3"
            }
          >
            Prepaid
          </div>
          <div
            onClick={() => handleTabClick(1, '/masterdistributor/postpaid')}
            className={
              tabIndex === 1 ? " text-white  font-[400]  text-blue-400 text-2xl rounded-md  py-3" : "py-3"
            }
          >
            Postpaid
          </div>
          <div
            onClick={() => handleTabClick(2, '/masterdistributor/landline')}
            className={
              tabIndex === 2 ? " text-white  font-[400]  text-blue-400 text-2xl rounded-md  py-3" : "py-3"
            }
          >
            LandLine
          </div>
        </div>} />

        <div>
          <div className="bg-white">
            <div className="">
              {/* //line 1 */}
              <div className="pt-6 grid grid-cols-1 px-6 py-3 gap-x-6 gap-y-8 sm:grid-cols-4">
                <div className="sm:col-span-1">
                  <label
                    htmlFor="prepaid-number"
                    className="block text-sm font-medium leading-6 text-gray-900 text-lg ms-2"
                  >
                    {tabIndex === 0
                      ? "Prepaid Number"
                      : tabIndex === 1
                        ? "Postpaid Number"
                        : "Landline Number"}

                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="prepaid-number"
                      id="prepaid-number"
                      placeholder="  Enter 10 digit prepaid number"
                      required={true}
                      value={rechargeNumber}
                      onChange={(e) => {
                        setRechargeDetails({
                          ...rechargeDetails,
                          rechanrgeNumber: e.target.value,
                        });
                      }}
                      className="block sm:max-w-xs w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-[50px] px-2 ms-2"
                    />
                  </div>
                  <div>
                  </div> </div>
                <div className="sm:col-span-1">
                  <label
                    htmlFor="provider"
                    className="block text-sm font-medium leading-6 text-gray-900 text-lg"
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
                        setRechargeDetails({
                          ...rechargeDetails,
                          serviceProvider: e.target.value,
                        })
                      }
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 h-[50px] px-2"
                    >
                      <option>Airtel</option>
                      <option>VI</option>
                      <option>JIO</option>
                      <option>BSNL Special Tarrif</option>
                      <option>BSNL Talk Time</option>
                    </select>
                  </div>
                </div>

                {tabIndex === 2 && <div className="sm:col-span-1">
                  <label
                    htmlFor="account"
                    className="block text-sm font-medium leading-6 text-gray-900 text-lg"
                  >
                    Account Number
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="account"
                      id="account"
                      required
                      placeholder=" Enter account number"
                      value={accountNumber}
                      onChange={(e) =>
                        setRechargeDetails({
                          ...rechargeDetails,
                          accountNumber: e.target.value,
                        })
                      }
                      className="block sm:max-w-xs w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-[50px] px-2"
                    />
                  </div>
                </div>}

                <div className="sm:col-span-1">
                  <label
                    htmlFor="circle"
                    className="block text-sm font-medium leading-6 text-gray-900 text-lg"
                  >
                    Service Circle
                  </label>
                  <div className="mt-2">
                    <select
                      id="circle"
                      name="circle"
                      value={circle}
                      required
                      onChange={(e) =>
                        setRechargeDetails({
                          ...rechargeDetails,
                          circle: e.target.value,
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
                <div className="sm:col-span-1">
                  <label
                    htmlFor="amount"
                    className="block text-sm font-medium leading-6 text-gray-900 text-lg"
                  >
                    Recharge Amount
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="amount"
                      id="amount"
                      required
                      value={amount}
                      onChange={(e) =>
                        setRechargeDetails({
                          ...rechargeDetails,
                          amount: e.target.value,
                        })
                      }
                      className="block sm:max-w-xs w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-[50px] px-2"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-6 grid grid-cols-1 px-6 py-3 gap-x-6 gap-y-8 sm:grid-cols-4">
                <SubHeading button={"   Recharge Now"} />
                {/* <button className=" bg-gradient-to-r from-blue-800 to-blue-500 text-white px-4 py-2 shadow-2xl text-white font-bold py-2 px-4 rounded me-3 mb-10 h-[50px]">
                  Recharge Now
                </button> */}
              </div>
            </div>
            <div className="p-5">
              {tabIndex === 0 ? <MobileTable /> : null}
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white  rounded-lg mb-10 m-5'>
        <SubHeading heading="Last 10 Transactions" />
        {
          tabIndex === 0 ? <Table2 apiEndpoint="api/postpaid/example" />
            : tabIndex === 1 ?
              <Table2 apiEndpoint="api/postpaid/example" />
              : <Table2 apiEndpoint="api/landlin/example" />
        }

      </div>
    </>
  );
};
export default Mobiles;