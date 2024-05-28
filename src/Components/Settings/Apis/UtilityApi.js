import React, { useState } from 'react'
import Heading from "../../commonComps/Heading";
import { addApiAction } from "../../../Slices/settingsSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import SubHeading from '../../commonComps/SubHeading';

const UtilityApi = () => {
    const [isSaved, setIsSaved] = useState(false);
    const handleClick =()=>{
    setIsSaved(!isSaved);
  }
  const [apiDetails, setApiDetails] = useState({
    apiType: "Other",
    apiName: "",
    service: "",
    url: "",
    headers: "",
    method: "",
    bodyType: "",
    queryString: "",
    responseType: "",
    seperator: "",
    statusKey: "",
    successValue: "",
    failureValue: "",
    recordsKey:"",
    arrayIndexKey:"",
    operatorKey: "",
    circleKey: "",
    amountKey: "",
    descriptionKey: "",
    validateKey: "",
    status1: "Active",
    messageKey: "",
    buildData: "",
   });
   const {
    apiType,
    apiName,
    service,
    url,
    headers,
    bodyType,
    queryString,
    responseType,
    seperator,
    statusKey,
    successValue,
    failureValue,
    recordsKey,
    arrayIndexKey,
    operatorKey,
    circleKey,
    amountKey,
    descriptionKey,
    validateKey,
    messageKey,
    buildData,
    statusName,
    status1,
    apiKey,
    method,
    
  } = apiDetails;
  console.log("apiDetails", apiDetails);
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
};
  return (
    <div>
      <div className='mt-10'></div>
         <SubHeading title="Utility API" />
         <div className='bg-white  rounded-lg mb-10 m-5 p-5'>
        <div className="">
          <div className="border-b border-gray-900/10">
            {/* //line 1 */}
            <div className="mt-10 grid grid-cols-1 px-6 py-3 gap-x-6 gap-y-8 sm:grid-cols-4">
              <div className="sm:col-span-1">
                <label
                  htmlFor="api-type"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  API 
                </label>
                <div className="mt-2">
                  <select
                    id="api-type"
                    name="api-type"
                    aria-placeholder="Select"
                    value={apiType}
                    required
                    onChange={(e) =>
                      setApiDetails({
                        ...apiDetails,
                        apiType: e.target.value,
                      })
                    }
                    className="px-2 block sm:max-w-xs w-full h-[48px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                    >  
                    <option>Other</option>
                    <option>Recharge</option>
                    <option>BBPS</option>
                    <option>SMS</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="api-type"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  API Name
                </label>
                <div className="mt-2">
                  <select
                    id="api-name"
                    name="api-name"
                    aria-placeholder="Select"
                    value={apiName}
                    required
                    onChange={(e) =>
                      setApiDetails({
                        ...apiDetails,
                        apiName: e.target.value,
                      })
                    }
                    className="px-2 block sm:max-w-xs w-full h-[48px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                            >
                    <option>Other</option>
                    <option>Recharge</option>
                    <option>BBPS</option>
                    <option>SMS</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="api-type"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Service
                </label>
                <div className="mt-2">
                  <select
                    id="service"
                    name="service"
                    aria-placeholder="Select"
                    value={service}
                    required
                    onChange={(e) =>
                      setApiDetails({
                        ...apiDetails,
                        service: e.target.value,
                      })
                    }
                    className="px-2 block sm:max-w-xs w-full h-[48px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                    >
                    <option>Other</option>
                    <option>Recharge</option>
                    <option>BBPS</option>
                    <option>SMS</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="api-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  URL
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="url"
                    id="url"
                    placeholder="  Enter URL"
                    required={true}
                    value={url}
                    onChange={(e) =>
                      setApiDetails({
                        ...apiDetails,
                        url: e.target.value,
                      })
                    }
                    className="px-2 block sm:max-w-xs w-full h-[48px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                        />                  
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="api-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Headers
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="headers"
                    id="headers"
                    placeholder="  Enter Headers"
                    required={true}
                    value={headers}
                    onChange={(e) =>
                      setApiDetails({
                        ...apiDetails,
                        headers: e.target.value,
                      })
                    }
                    className="px-2 block sm:max-w-xs w-full h-[48px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                        />                 
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="method"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Method
                </label>
                <div className="mt-2">
                  <select
                    id="method"
                    name="method"
                    value={method}
                    onChange={(e) =>
                      setApiDetails({ ...apiDetails, 
                        method: e.target.value, })
                    }
                    className="px-2 block sm:max-w-xs w-full h-[48px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                    >                  
                    <option>None</option>
                    <option>POST</option>
                    <option>GET</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="api-type"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Body Type 
                </label>
                <div className="mt-2">
                  <select
                    id="body-type"
                    name="body-type"
                    aria-placeholder="Select"
                    value={bodyType}
                    required
                    onChange={(e) =>
                      setApiDetails({
                        ...apiDetails,
                        bodyType: e.target.value,
                      })
                    }
                    className="px-2 block sm:max-w-xs w-full h-[48px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                    >                
                    <option>Other</option>
                    <option>Recharge</option>
                    <option>BBPS</option>
                    <option>SMS</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="api-balance"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Query String
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="query-string"
                    id="query-string"
                    value={queryString}
                    onChange={(e) =>
                      setApiDetails({
                        ...apiDetails,
                        queryString: e.target.value,
                      })
                    }
                    className="px-2 block sm:max-w-xs w-full h-[48px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                    />    
                </div>
              </div>
             

             <div className="sm:col-span-1">
                <label
                  htmlFor="api-type"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Response Type 
                </label>
                <div className="mt-2">
                  <select
                    id="response-type"
                    name="response-type"
                    aria-placeholder="Select"
                    value={responseType}
                    required
                    onChange={(e) =>
                      setApiDetails({
                        ...apiDetails,
                        responseType: e.target.value,
                      })
                    }
                    className="px-2 block sm:max-w-xs w-full h-[48px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                    >
                    <option>Other</option>
                    <option>Recharge</option>
                    <option>BBPS</option>
                    <option>SMS</option>
                  </select>
                </div>
                </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="api-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Seperator
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="seperator"
                    id="seperator"
                    placeholder="  Enter Headers"
                    required={true}
                    value={seperator}
                    onChange={(e) =>
                      setApiDetails({
                        ...apiDetails,
                        seperator: e.target.value,
                      })
                    }
                    className="px-2 block sm:max-w-xs w-full h-[48px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                        />   
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="api-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Status Key
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="status-key"
                    id="status-key"
                    placeholder=" Enter Key"
                    required={true}
                    value={statusKey}
                    onChange={(e) =>
                      setApiDetails({
                        ...apiDetails,
                        statusKey: e.target.value,
                      })
                    }
                    className="px-2 block sm:max-w-xs w-full h-[48px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                        />      
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="api-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Success Value
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="success-value"
                    id="success-value"
                    placeholder=" Enter Key"
                    required={true}
                    value={successValue}
                    onChange={(e) =>
                      setApiDetails({
                        ...apiDetails,
                        successValue: e.target.value,
                      })
                    }
                    className="px-2 block sm:max-w-xs w-full h-[48px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                    />                  
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="api-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Failure Value
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="Failure-value"
                    id="Failure-value"
                    placeholder=" value"
                    required={true}
                    value={failureValue}
                    onChange={(e) =>
                      setApiDetails({
                        ...apiDetails,
                        failureValue: e.target.value,
                      })
                    }
                    className="px-2 block sm:max-w-xs w-full h-[48px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                    />                 
                </div>
              </div>
              {/* Line 2 */}
            
              <div className="sm:col-span-1">
                <label
                  htmlFor="success-value"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Records Key
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="records-key"
                    id="records-key"
                    required
                    value={recordsKey}
                    onChange={(e) =>
                      setApiDetails({
                        ...apiDetails,
                        recordsKey: e.target.value,
                      })
                    }
                    className="px-2 block sm:max-w-xs w-full h-[48px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                    />                 
                  <label>
            <input 
                type="checkbox" 
                checked={isChecked} 
                onChange={handleCheckboxChange} 
            />
            Is Array Records
        </label>
                </div>
              </div>
              
              
             <div className="sm:col-span-1">
                <label
                  htmlFor="failed-value"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Array Index Key
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="Enter Key"
                    id="Enter Key"
                    placeholder="Enter Key"
                    required={true}
                    value={arrayIndexKey}
                    onChange={(e) =>
                      setApiDetails({
                        ...apiDetails,
                        arrayIndexKey: e.target.value,
                      })
                    }
                    className="px-2 block sm:max-w-xs w-full h-[48px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                        />                  
                </div>
              </div>
              <div className="sm:col-span-1">
                <label
                  htmlFor="api-balance"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Operator Key
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="operator-key"
                    id="operator-key"
                    required ={true}
                    placeholder="Enter Key"
                    value={operatorKey}
                    onChange={(e) =>
                      setApiDetails({
                        ...apiDetails,
                        operatorKey: e.target.value,
                      })
                    }
                    className="px-2 block sm:max-w-xs w-full h-[48px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
       />
                </div>
              </div>


            </div>
            </div>

            {/* Line 3 */}
          
          <div className="border-b border-gray-900/10">
            {/* Line 4 */}
            <div className="grid grid-cols-1 px-6 py-3 gap-x-6 gap-y-8 sm:grid-cols-4">
             
             
              <div className="sm:col-span-1">
                <label
                  htmlFor="refid-value"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Circle Key
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="circle-key"
                    required
                    id="circle-key"
                    placeholder="Enter Key"
                    value={circleKey}
                    onChange={(e) =>
                      setApiDetails({
                        ...apiDetails,
                        circleKey: e.target.value,
                      })
                    }
                    className="px-2 block sm:max-w-xs w-full h-[48px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
        />
                </div>
                </div>
              <div className="sm:col-span-1">
                <label
                  htmlFor="amount-key"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Amount Key
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="amount-key"
                    id="amount-key"
                    value={amountKey}
                    onChange={(e) =>
                      setApiDetails({
                        ...apiDetails,
                        amountKey: e.target.value,
                      })
                    }
                    className="px-2 block sm:max-w-xs w-full h-[48px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                    />
                </div>
              </div>
              <div className="sm:col-span-1">
                <label
                  htmlFor="description-key"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Description Key
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="description-key"
                    id="description-key"
                    value={descriptionKey}
                    onChange={(e) =>
                      setApiDetails({
                        ...apiDetails,
                        descriptionKey: e.target.value,
                      })
                    }
                    className="px-2 block sm:max-w-xs w-full h-[48px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
       />
                </div>
              </div>
              
            <div className="sm:col-span-1">
                <label
                  htmlFor="api-key"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Api Key
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="api-key"
                    id="api-key"
                    value={apiKey}
                    onChange={(e) =>
                      setApiDetails({
                        ...apiDetails,
                        apiKey: e.target.value,
                      })
                    }
                    className="px-2 block sm:max-w-xs w-full h-[48px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
              />
                </div>
              </div>
            </div>

{/* Line 5 */}
            <div className="grid grid-cols-1 px-6 py-3 gap-x-6 gap-y-8 sm:grid-cols-4">

              


              <div className="sm:col-span-1">
                <label
                  htmlFor="api-type"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Status
                </label>
                <div className="mt-2">
                  <select
                    id="status1"
                    name="status1"
                    aria-placeholder="STATUS"
                    value={status1}
                    required
                    onChange={(e) =>
                      setApiDetails({
                        ...apiDetails,
                        status1: e.target.value,
                      })
                    }
                    className="px-2 block sm:max-w-xs w-full h-[48px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                    >
                    <option>Other</option>
                    <option>Recharge</option>
                    <option>BBPS</option>
                    <option>SMS</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="lapu-no"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Validate Key
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="validate-key"
                    id="validate-key"
                    value={validateKey}
                    onChange={(e) =>
                      setApiDetails({
                        ...apiDetails,
                        validateKey: e.target.value,
                      })
                    }
                    className="px-2 block sm:max-w-xs w-full h-[48px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
             />
                </div>
              </div>
              <div className="sm:col-span-1">
                <label
                  htmlFor="message-key"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Message Key
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="message-key"
                    id="message-key"
                    value={messageKey}
                    onChange={(e) =>
                      setApiDetails({
                        ...apiDetails,
                        messageKey: e.target.value,
                      })
                    }
                    className="px-2 block sm:max-w-xs w-full h-[48px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
      />
                </div>
              </div>
              
              <div className="sm:col-span-1">
                <label
                  htmlFor="Build-data"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Build Data
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="build-data"
                    id="build-data"
                    value={buildData}
                    onChange={(e) =>
                      setApiDetails({
                        ...apiDetails,
                        buildData: e.target.value,
                      })
                    }
                    className="px-2 block sm:max-w-xs w-full h-[48px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                   />
                </div>
              </div>
            </div>
          <div className='ms-5 w-[200px]'>
            {/* <button
              onClick={handleClick}
             className=" w-full max-w-60 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50 ms-6 mt-4 h-10"
            > {isSaved ?'saved':'Save'}
              
            </button> */}
            <SubHeading button="Save"
            onClick={handleClick}
             />
            </div>
          </div>
    </div>
    </div>
    </div>
  )
}

export default UtilityApi