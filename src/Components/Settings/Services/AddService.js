import { useState } from "react";
import Heading from "../../commonComps/Heading";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../commonComps/Spinner";
import { addServiceProvider } from "../../../Slices/settingsSlice";
import SubHeading from "../../commonComps/SubHeading";

const AddService = () => {
  const [serviceName, setServiceName] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const serviceStatus = useSelector(
    (state) => state.settingOption.addService.status
  );

  const handleAddService = (e) => {
    e.preventDefault();
    // serviceName && status &&
     dispatch(addServiceProvider(serviceName, status));
    serviceStatus === "fulfilled" && navigate("/services");
  };
  return (
    <>
      {serviceStatus === "pending" ? (
        <Spinner />
      ) : (
        <>
          <SubHeading title="Service details" />
          <div className="m-10">
          <SubHeading heading=" Add Service " />
         
        <div className='bg-white p-2 rounded-lg'>
          <div className="m-10">
              <div className="mt-10 grid grid-cols-2 px-6 py-3 gap-x-6 gap-y-8 sm:grid-cols-2">
                    <div className="sm:col-span-1">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium leading-6 text-gray-900 text-center font-bold"
                      >
                        Service Name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          value={serviceName}
                          onChange={(e) => setServiceName(e.target.value)}
                          className="block  w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-[60px] px-2 font-bold"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-1">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium leading-6 text-gray-900 text-center font-bold"
                      >
                        Country
                      </label>
                      <div className="mt-2">
                        <select
                          id="status"
                          name="status"
                          value={status}
                          onChange={(e) => setStatus(e.target.value)}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6 h-[60px] px-2 font-bold "
                        >
                          <option>Active</option>
                          <option>Blocked</option>
                        </select>
                      </div>
                    </div>
                  </div>
                
              

              <div className="mt-6 flex items-center justify-center gap-x-4">
                
                <SubHeading button ="Save"
                       // disabled={!(serviceName && status)}
                  onClick={(e)=>handleAddService(e)}></SubHeading>
                
                <SubHeading button ="Cancel"
                   onClick={() => navigate(-1)}
                >
                  </SubHeading >
              </div>
          </div>
        </div>
        </div>
        </>

      )}
    </>
  );
};
export default AddService;
