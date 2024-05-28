import { useState } from "react";
import Heading from "../../commonComps/Heading";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../commonComps/Spinner";
import { addPlanProvider } from "../../../Slices/settingsSlice";
import { addPlan } from "../../APIs/settingsApi";

const AddNewPlan = () => {
  const [pData, setPdata] = useState({
    plan_name: "",
    plan_type: "",
    status: "",
  });
  const { plan_name, plan_type, status } = pData;

  
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const planStatus = useSelector(
    (state) => state.settingOption.addService.status
  );

  const handleAddNewPlan = (e) => {
    e.preventDefault();
   
     dispatch(addPlanProvider(pData));
     navigate("/userplans");
  };
  console.log(pData);
  return (
    <>
      {planStatus === "pending" ? (
        <Spinner />
      ) : (
        <>
          <Heading heading="Plan Details" />
          <h1 className="bg-sky-400 rounded-t-md  cursor-pointer p-2 mb-4">Add New Plan</h1>
          <div>
              <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="plan_name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Plan Name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="plan_name"
                          id="plan_name"
                          value={pData.plan_name}
                          onChange={(e) => setPdata(e.target.value)}
                          className="block sm:max-w-xs w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-4">
                      <label
                        htmlFor="plan_type"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Plan Type
                      </label>
                      <div className="mt-2">
                        <select
                          id="plan_type"
                          name="plan_type"
                          value={pData.plan_type}
                          onChange={(e) => setPdata(e.target.value)}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                          <option>Normal</option>
                          <option>API</option>
                        </select>
                      </div>
                    </div>
                    <div className="sm:col-span-4">
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
                          value={pData.status}
                          onChange={(e) => setPdata(e.target.value)}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                          <option>Active</option>
                          <option>Blocked</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-start gap-x-6">
                
                <button
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50"
                  
                  onClick={(e)=>handleAddNewPlan(e)}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900"
                  onClick={() => navigate(-1)}
                >
                  Cancel
                </button>
              </div>
          </div>
        </>
      )}
    </>
  );
};
export default AddNewPlan;
