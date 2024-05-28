import { useState } from "react";
import { indianStates } from "../../commonComps/Constants";
import Heading from "../../commonComps/Heading";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProviderAction } from "../../../Slices/settingsSlice";
import SubHeading from "../../commonComps/SubHeading";

const AddProvider = () => {
  const[plan,setPlan]=useState("");
  const[roffer,setRoffer]=useState("");
  const[promocode,setPromocode]=useState("");
  const[billfetch,setBillfetch]=useState("");
  const[amounteditable,setAmounteditable]=useState("");
  const [providerDetails, setProviderDetails] = useState({
    provider_name: "",
    service_name: "",
    operator_name: "",
    operator_code: "",
    service_type: "",
    select_logo: "",
    api: "",
    backupapi: "",
    status: "Active" ? true : false,
    state: "",
    logo: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddProvider = (e) => {
    e.preventDefault();
    dispatch(addProviderAction(providerDetails));
  };
  const { provider_name, service_name, api, backupapi, status, state, logo,operator_name,operator_code,service_type,select_logo} =
    providerDetails;
  return (
    <>
      <div className="m-5">
        <SubHeading title="Provider Details" />
        <SubHeading heading="Provider Details" />
        <div className='bg-white p-2  rounded-lg mb-10 '>
          {/* //line 1 */}
          
          <div className="mt-10 grid grid-cols-4 px-6 py-3 gap-x-6 gap-y-8 sm:grid-cols-4">
            <div className="sm:col-span-1">
              <label
                htmlFor="provider-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Provider Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="api-name"
                  id="api-name"
                  placeholder="Enter Provider Name"
                  value={provider_name}
                  onChange={(e) =>
                    setProviderDetails({
                      ...providerDetails,
                      provider_name: e.target.value,
                    })
                  }
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2 h-[48px]"
     />
              </div>
            </div>
            <div className="sm:col-span-1">
              <label
                htmlFor="provider-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Operator Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="api-name"
                  id="api-name"
                  placeholder="Enter Operator Name"
                  required={true}
                  value={operator_name}
                  onChange={(e) =>
                    setProviderDetails({
                      ...providerDetails,
                      operator_name: e.target.value,
                    })
                  }
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2 h-[48px]"
        />
              </div>
            </div>
            <div className="sm:col-span-1">
              <label
                htmlFor="provider-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Operator Code
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="api-name"
                  id="api-name"
                  placeholder="Enter Operator Name"
                  required={true}
                  value={operator_code}
                  onChange={(e) =>
                    setProviderDetails({
                      ...providerDetails,
                      operator_code: e.target.value,
                    })
                  }
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2 h-[48px]"
            />
              </div>
            </div>
            <div className="sm:col-span-1">
              <label
                htmlFor="api"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Api 
              </label>
              <div className="mt-2">
                <select
                  id="api"
                  name="api"
                  value={api}
                  onChange={(e) =>
                    setProviderDetails({
                      ...providerDetails,
                      api: e.target.value,
                    })
                  }
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2 h-[48px]"
       >
                  <option>None</option>
                  <option>EZYTM PLAN API</option>
                  <option>MobiKwik</option>
                  <option>Patilpe test</option>
                </select>
              </div>
            </div>
          </div>
    {/* Line 2 */}
          <div className="grid grid-cols-1 px-6 py-3 gap-x-6 gap-y-8 sm:grid-cols-4">
            <div className="sm:col-span-1">
              <label
                htmlFor="backup-api"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Backup Api
              </label>
              <div className="mt-2">
                <select
                  id="backup-api"
                  name="backup-api"
                  value={backupapi}
                  onChange={(e) =>
                    setProviderDetails({
                      ...providerDetails,
                      backupapi: e.target.value,
                    })
                  }
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2 h-[48px]"
                  >
                  <option>None</option>
                  <option>EZYTM PLAN API</option>
                  <option>MobiKwik</option>
                  <option>Patilpe test</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-1">
              <label
                htmlFor="api"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Service Type
              </label>
              <div className="mt-2">
                <select
                  id="api"
                  name="api"
                  placeholder="Select Service Type"
                  value={service_type}
                  onChange={(e) =>
                    setProviderDetails({
                      ...providerDetails,
                      service_type: e.target.value,
                    })
                  }
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2 h-[48px]"
                  >
                  <option>None</option>
                  <option>EZYTM PLAN API</option>
                  <option>MobiKwik</option>
                  <option>Patilpe test</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-1">
              <label
                htmlFor="logo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Select Logo
              </label>
              <div className="mt-2">
                <input
                  type="file"
                  name="logo"
                  id="logo"
                  placeholder="Select Logo"
                  value={select_logo}
                  onChange={(e) =>
                    setProviderDetails({
                      ...providerDetails,
                      select_logo: e.target.value,
                    })
                  }
                  className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2 h-[48px]"
       />
              </div>
            </div>
            <div className="sm:col-span-1">
              <label
                htmlFor="api-domain"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                State
              </label>
              <div className="mt-2">
                <select
                  id="state"
                  name="state"
                  value={state}
                  onChange={(e) =>
                    setProviderDetails({
                      ...providerDetails,
                      state: e.target.value,
                    })
                  }
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2 h-[48px]"
           >
                  {indianStates.map((state, i) => (
                    <option key={i}>{state}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Line 4 */}
          <div className="grid grid-cols-1 px-6 py-3 gap-x-8 gap-y-10 sm:grid-cols-4">
            
            <div className="sm:col-span-2">
              <label
                htmlFor="status"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Status
              </label>
              <div className="mt-2">
                <select
                  id="status"
                  name="status"
                  value={status}
                  onChange={(e) =>
                    setProviderDetails({
                      ...providerDetails,
                      status: e.target.value,
                    })
                  }
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6 px-2 h-[48px]"
                  >
                  <option>Active</option>
                  <option>Blocked</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="logo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Provider Logo
              </label>
              <div className="mt-2">
                <input
                  type="file"
                  name="logo"
                  id="logo"
                  value={logo}
                  onChange={(e) =>
                    setProviderDetails({
                      ...providerDetails,
                      logo: e.target.value,
                    })
                  }
                  className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6 px-2 h-[48px]"
           />
              </div>
            </div>
          </div>

          {/* Line 5 */}
         
          <div className="grid grid-cols-5 px-6 py-3 gap-x-6 gap-y-8 mt-5 ">
          <div>
            <div className="justify-between">
            <label className="text-lg font-semibold ms-9 ">
              Plan 
              </label>
              </div>
              <div className="mt-1">
                <input 
                className="m-1 h-5 w-5 text-md"
                    type="radio" 
                    value="yes" 
                    checked={plan === "yes"}
                    onChange={(e)=>setPlan(e.target.value)}
                />
                Yes
                <span className="text-md m-1"></span>
                  <input 
                    className="m-1 h-5 w-5"
                    type="radio" 
                    value="no" 
                    checked={plan === "no"}
                    onChange={(e)=>setPlan(e.target.value)}
                />
                No
           </div>
        </div>

        <div>
            <label className="text-lg font-semibold ms-7"> ROffer </label>
            <div className="mt-1">
                <input 
                className="m-1 h-5 w-5"
                    type="radio" 
                    value="yes" 
                    checked={roffer === "yes"}
                    onChange={(e)=>setRoffer(e.target.value)}
                />
                Yes
                <span className="text-md m-1"></span>
                <input 
                className="m-1 h-5 w-5"
                    type="radio" 
                    value="no" 
                    checked={roffer === "no"}
                    onChange={(e)=>setRoffer(e.target.value)}
                />
                No
          </div>
          </div>
        <div>
            <label className="text-lg font-semibold ms-3"> Promocode </label>
            <div className="mt-1">
                <input 
                className="m-1 h-5 w-5"
                    type="radio" 
                    value="yes" 
                    checked={promocode === "yes"}
                    onChange={(e)=>setPromocode(e.target.value)}
                />
                Yes
                <span className="text-md m-1"></span>
                <input 
                    className="m-1 h-5 w-5"
                    type="radio" 
                    value="no" 
                    checked={promocode === "no"}
                    onChange={(e)=>setPromocode(e.target.value)}
                />
                No
            </div>
        </div>
        <div>
            <label className="text-lg font-semibold ms-5"> Bill Fetch </label>
            <div className="mt-1">
                <input 
                className="m-1 h-5 w-5"
                    type="radio" 
                    value="yes" 
                    checked={billfetch === "yes"}
                    onChange={(e)=>setBillfetch(e.target.value)}
                />
                Yes
                <span className="text-md m-1"></span>
                <input 
                    className="m-1 h-5 w-5"
                    type="radio" 
                    value="no" 
                    checked={billfetch === "no"}
                    onChange={(e)=>setBillfetch(e.target.value)}
                />
                No
            </div>
            </div>
        <div>
            <label className="text-lg font-semibold me-4"> Amount Editable </label>
            <div className="mt-1">
                <input 
                className="m-1 h-5 w-5"
                    type="radio" 
                    value="yes" 
                    checked={amounteditable  === "yes"}
                    onChange={(e)=>setAmounteditable(e.target.value)}
                />
                Yes
                <span className="text-md m-1"></span>
                  <input 
                    className="m-1 h-5 w-5"
                    type="radio" 
                    value="no" 
                    checked={amounteditable === "no"}
                    onChange={(e)=>setAmounteditable(e.target.value)}
                />
                No
            </div>
            </div>
        </div>
          {/* Line 6 */}
        <div className="mt-6 grid grid-cols-1 items-center gap-x-6 sm:grid-cols-8 ">
          <div className="sm:col-span-4 flex px-4 p-2">
            <div className="me-3">
            {/* <button
              className="bg-gradient-to-r rounded-md from-blue-800 to-blue-500 text-white px-4 py-2 shadow-2xl text-lg  cursor-pointer hover:scale-105 transform-origin-center transition-transform h-[48px]  w-full"
              onClick={(e)=>handleAddProvider(e)}
            >Add Provider</button> */}
            <SubHeading button="Add Provider" onClick={(e)=>handleAddProvider(e)}/>
            </div>
            {/* <button
             className="bg-gradient-to-r rounded-md from-blue-800 to-blue-500 text-white px-4 py-2 shadow-2xl text-lg  cursor-pointer  hover:scale-105 transform-origin-center transition-transform h-[48px]"
            onClick={() => navigate(-1)}>
              Cancel
            </button> */}
            <SubHeading button="Cancel" onClick={() => navigate(-1)}/>
             </div>
          </div>
        
        </div>
        
      </div>
    </>
  );
};
export default AddProvider;