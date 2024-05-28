import { useState } from "react";
import Heading from "../../commonComps/Heading";
import { useDispatch } from "react-redux";
import { addApiAction } from "../../../Slices/settingsSlice";
import { useNavigate } from "react-router-dom";
import SubHeading from "../../commonComps/SubHeading";

const AddApi = () => {
  const [apiDetails, setApiDetails] = useState({
    apiType: "Other",
    apiName: "",
    apiBalance: "",
    statusName: "",
    apiDomain: "",
    statusCheckUrl: "",
    balanceCheckUrl: "",
    billFetchUrl: "",
    successValue: "",
    failedValue: "",
    pendingValue: "",
    refidValue: "",
    operatorId: "",
    apiUsername: "",
    apiKey: "",
    lapuNo: "",
    remainBalance: "",
    remark: "",
    method: "POST",
    format: "JSON",
  });
  const [callBack, setCallBack] = useState({
    statusValue: "",
    successValue2: "",
    failedValue2: "",
    refidValue2: "",
    operatorId2: "",
    remark2: "",
    method2: "POST",
    status: "Active",
  });
  const {
    apiType,
    apiName,
    apiBalance,
    statusName,
    apiDomain,
    statusCheckUrl,
    balanceCheckUrl,
    billFetchUrl,
    successValue,
    failedValue,
    pendingValue,
    refidValue,
    operatorId,
    apiUsername,
    apiKey,
    lapuNo,
    remainBalance,
    remark,
    method,
    format,
  } = apiDetails;
  const {
    statusValue,
    successValue2,
    failedValue2,
    refidValue2,
    operatorId2,
    remark2,
    method2,
    status,
  } = callBack;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddApi = (e) => {
    dispatch(addApiAction(apiDetails, callBack));
    
  };
console.log(apiDetails);
  return (
    <>
      <SubHeading title="Api details" />
      <div className='bg-white  rounded-lg mb-10 m-5 p-5'>
        <div className="">
          <div className="border-b border-gray-900/10">
            {/* //line 1 */}
            <div className="mt-10 grid grid-cols-1 px-6 py-3 gap-x-6 gap-y-8 sm:grid-cols-4">
              <div className="sm:col-span-1">
                <label
                  htmlFor="api-type"
                  className="block   leading-6 text-gray-900 "
                >
                  Api Type
                </label>
                <div className="mt-2">
                  <select
                    id="api-type"
                    name="api-type"
                    value={apiType}
                    required
                    onChange={(e) =>
                      setApiDetails({
                        ...apiDetails,
                        apiType: e.target.value,
                      })
                    }
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2 h-[48px]"
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
                  Api Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="api-name"
                    id="api-name"
                    required={true}
                    value={apiName}
                    onChange={(e) =>
                      setApiDetails({
                        ...apiDetails,
                        apiName: e.target.value,
                      })
                    }
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2 h-[48px]"
                    />
                </div>
              </div>
              <div className="sm:col-span-1">
                <label
                  htmlFor="api-balance"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Api Balance
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="api-balance"
                    id="api-balance"
                    value={apiBalance}
                    onChange={(e) =>
                      setApiDetails({
                        ...apiDetails,
                        apiBalance: e.target.value,
                      })
                    }
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2 h-[48px]"
                    />
                </div>
              </div>
              <div className="sm:col-span-1">
                <label
                  htmlFor="status-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Status Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="status-name"
                    id="status-name"
                    required
                    value={statusName}
                    onChange={(e) =>
                      setApiDetails({
                        ...apiDetails,
                        statusName: e.target.value,
                      })
                    }
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2 h-[48px]"
                    />
                </div>
              </div>
            </div>

            {/* Line 2 */}
            <div className="grid grid-cols-1 px-6 py-3 gap-x-6 gap-y-8 sm:grid-cols-4">
              <div className="sm:col-span-1">
                <label
                  htmlFor="api-domain"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Api Domain
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="api-domain"
                    id="api-domain"
                    value={apiDomain}
                    onChange={(e) =>
                      setApiDetails({
                        ...apiDetails,
                        apiDomain: e.target.value,
                      })
                    }
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2 h-[48px]"
                    />
                </div>
              </div>
              <div className="sm:col-span-1">
                <label
                  htmlFor="status-check-url"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Status Check Url
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="status-check-url"
                    id="status-check-url"
                    value={statusCheckUrl}
                    onChange={(e) =>
                      setApiDetails({
                        ...apiDetails,
                        statusCheckUrl: e.target.value,
                      })
                    }
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2 h-[48px]"
                    />
                </div>
              </div>
           

            {/* Line 3 */}
            
              <div className="sm:col-span-1">
                <label
                  htmlFor="balance-check-url"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Balance Check Url
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="balance-check-url"
                    id="balance-check-url"
                    value={balanceCheckUrl}
                    onChange={(e) =>
                      setApiDetails({
                        ...apiDetails,
                        balanceCheckUrl: e.target.value,
                      })
                    }
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2 h-[48px]"
                    />
                </div>
              </div>
              <div className="sm:col-span-1">
                <label
                  htmlFor="bill-fetch-url"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Bill Fetch Url
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="bill-fetch-url"
                    id="bill-fetch-url"
                    value={billFetchUrl}
                    onChange={(e) =>
                      setApiDetails({
                        ...apiDetails,
                        billFetchUrl: e.target.value,
                      })
                    }
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2 h-[48px]"
                    />
                </div>
              </div>
            </div>
            </div>
          

          <div className="border-b border-gray-900/10">
            {/* Line 4 */}
            <div className="grid grid-cols-1 px-6 py-3 gap-x-6 gap-y-8 sm:grid-cols-4">
              <div className="sm:col-span-1">
                <label
                  htmlFor="success-value"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Success Value
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="success-value"
                    id="success-value"
                    required
                    value={successValue}
                    onChange={(e) =>
                      setApiDetails({
                        ...apiDetails,
                        successValue: e.target.value,
                      })
                    }
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2 h-[48px]"
                    />
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="failed-value"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Failed Value
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="failed-value"
                    id="failed-value"
                    required
                    value={failedValue}
                    onChange={(e) =>
                      setApiDetails({
                        ...apiDetails,
                        failedValue: e.target.value,
                      })
                    }
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2 h-[48px]"
                    />
                </div>
              </div>
              <div className="sm:col-span-1">
                <label
                  htmlFor="api-balance"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Pending Value
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="api-balance"
                    required
                    id="api-balance"
                    value={pendingValue}
                    onChange={(e) =>
                      setApiDetails({
                        ...apiDetails,
                        pendingValue: e.target.value,
                      })
                    }
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2 h-[48px]"
                    />
                </div>
              </div>
              <div className="sm:col-span-1">
                <label
                  htmlFor="refid-value"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Refid Value
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="refid-value"
                    required
                    id="refid-value"
                    value={refidValue}
                    onChange={(e) =>
                      setApiDetails({
                        ...apiDetails,
                        refidValue: e.target.value,
                      })
                    }
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2 h-[48px]"
                    />
                </div>
              </div>
            </div>

            {/* Line 5 */}
            <div className="grid grid-cols-1 px-6 py-3 gap-x-6 gap-y-8 sm:grid-cols-4">
              <div className="sm:col-span-1">
                <label
                  htmlFor="operator-id"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Opertor Id
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="operator-id"
                    id="operator-id"
                    value={operatorId}
                    onChange={(e) =>
                      setApiDetails({
                        ...apiDetails,
                        operatorId: e.target.value,
                      })
                    }
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2 h-[48px]"
                    />
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="api-username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Api Username
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="api-username"
                    id="api-username"
                    value={apiUsername}
                    onChange={(e) =>
                      setApiDetails({
                        ...apiDetails,
                        apiUsername: e.target.value,
                      })
                    }
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2 h-[48px]"
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
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2 h-[48px]"
                    />
                </div>
              </div>
              <div className="sm:col-span-1">
                <label
                  htmlFor="lapu-no"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Lapu No
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="lapu-no"
                    id="lapu-no"
                    value={lapuNo}
                    onChange={(e) =>
                      setApiDetails({
                        ...apiDetails,
                        lapuNo: e.target.value,
                      })
                    }
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2 h-[48px]"
                    />
                </div>
              </div>
            </div>

            {/* Line 6 */}
            <div className="grid grid-cols-1 px-6 py-3 gap-x-6 gap-y-8 sm:grid-cols-4">
              <div className="sm:col-span-1">
                <label
                  htmlFor="remain-balance"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Remain Balance
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="remain-balance"
                    id="remain-balance"
                    value={remainBalance}
                    onChange={(e) =>
                      setApiDetails({
                        ...apiDetails,
                        remainBalance: e.target.value,
                      })
                    }
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2 h-[48px]"
                    />
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="remark"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Remark
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="remark"
                    id="remark"
                    value={remark}
                    onChange={(e) =>
                      setApiDetails({
                        ...apiDetails,
                        remark: e.target.value,
                      })
                    }
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2 h-[48px]"
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
                      setApiDetails({ ...apiDetails, method: e.target.value })
                    }
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2 h-[48px]"
                    >
                    <option>None</option>
                    <option>POST</option>
                    <option>GET</option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-1">
                <label
                  htmlFor="format"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Format
                </label>
                <div className="mt-2">
                  <select
                    id="format"
                    name="format"
                    value={format}
                    onChange={(e) =>
                      setApiDetails({ ...apiDetails, format: e.target.value })
                    }
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2 h-[48px]"
                    >
                    <option>None</option>
                    <option>JSON</option>
                    <option>XML</option>
                    <option>TEXT</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b border-gray-900/10">
            <div className="mt-10 px-4">
              <label
                htmlFor="status-value"
                className="block text-lg font-medium leading-6 text-gray-900"
              >
                Callback Setting
              </label>
            </div>
            {/* Line 7 */}
            <div className="grid grid-cols-1 px-6 py-3 gap-x-6 gap-y-8 sm:grid-cols-4">
              <div className="sm:col-span-1">
                <label
                  htmlFor="status-value"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Status Value
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="status-value"
                    id="status-value"
                    value={statusValue}
                    onChange={(e) =>
                      setCallBack({
                        ...apiDetails,
                        statusValue: e.target.value,
                      })
                    }
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2 h-[48px]"
                    />
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="success-value2"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Success Value
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="success-value2"
                    id="success-value2"
                    required
                    value={successValue2}
                    onChange={(e) =>
                      setCallBack({
                        ...apiDetails,
                        successValue2: e.target.value,
                      })
                    }
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2 h-[48px]"
                    />
                </div>
              </div>
              <div className="sm:col-span-1">
                <label
                  htmlFor="failed-value2"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Failed Value
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="failed-value2"
                    id="failed-value2"
                    value={failedValue2}
                    onChange={(e) =>
                      setCallBack({
                        ...apiDetails,
                        failedValue2: e.target.value,
                      })
                    }
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2 h-[48px]"
                    />
                </div>
              </div>
              <div className="sm:col-span-1">
                <label
                  htmlFor="refid-value2"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Refid Value
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="refid-value2"
                    id="refid-value2"
                    value={refidValue2}
                    onChange={(e) =>
                      setCallBack({
                        ...apiDetails,
                        refidValue2: e.target.value,
                      })
                    }
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2 h-[48px]"
                    />
                </div>
              </div>
            </div>

            {/* Line 8*/}
            <div className=" grid grid-cols-1 px-6 py-3 gap-x-6 gap-y-8 sm:grid-cols-4">
              <div className="sm:col-span-1">
                <label
                  htmlFor="operator-id2"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Operator Id
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="operator-id2"
                    id="operator-id2"
                    value={operatorId2}
                    onChange={(e) =>
                      setCallBack({
                        ...apiDetails,
                        operatorId2: e.target.value,
                      })
                    }
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2 h-[48px]"
                    />
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="remark2"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Remark
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="remark2"
                    id="remark2"
                    value={remark2}
                    onChange={(e) =>
                      setCallBack({
                        ...apiDetails,
                        remark2: e.target.value,
                      })
                    }
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2 h-[48px]"
                    />
                </div>
              </div>
              <div className="sm:col-span-1">
                <label
                  htmlFor="method2"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Method
                </label>
                <div className="mt-2">
                  <select
                    id="method2"
                    name="method2"
                    value={method2}
                    onChange={(e) =>
                      setCallBack({ ...apiDetails, method2: e.target.value })
                    }
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2 h-[48px]"
                    >
                    <option>None</option>
                    <option>POST</option>
                    <option>GET</option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-1">
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
                      setCallBack({ ...apiDetails, status: e.target.value })
                    }
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2 h-[48px]"
                    >
                    <option>Active</option>
                    <option>Blocked</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-2 grid grid-cols-1 items-center ">
          <div className="flex px-16 gap-x-6">
           
            {/* <button
              onClick={() => handleAddApi()}
              disabled={!(apiName && statusName)}
              className=" w-full max-w-60 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="text-sm font-semibold leading-6 rounded-md hover:bg-slate-400 bg-slate-300 text-gray-900 w-full max-w-60"
            >
              Cancel
            </button> */}
            <SubHeading button="Save" 
            onClick={() => handleAddApi()}
            disabled={!(apiName && statusName)}/>
             
            <SubHeading button="Cancel" 
            onClick={() => navigate(-1)}/>

          </div>
        </div>
      </div>
    </>
  );
};
export default AddApi;
