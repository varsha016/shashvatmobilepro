import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addApiProviderCodeAction } from "../../../Slices/settingsSlice";
import { getApiProviderCodes } from "../../APIs/settingsApi";
import SubHeading from "../../commonComps/SubHeading";



const ApiProviderCodes = () => {

    const [service, setService] = useState("All Services");
    // const [providerCode, setProviderCode] = useState({ provider: [] });
    const [providerCode, setProviderCode] = useState([]);
    const [prevCode, setPrevCode] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const providers = useSelector((state) => state.settingOption.getProvider.pData);
    console.log(providers, "providers");
    const { id, name, active } = useParams();
    const token = useSelector((state) => state.auth.token);

    const providersData =
        providers &&
        (service === "All Services"
            ? providers
            : providers.filter((item, i) => item.Service === service));
    const providersName =
        providersData &&
        providersData.map((provider, i) => ({
            id: provider.id,
            name: provider["Provider Name"],
        }));

    const handleProviderCode = (id, code) => {
      
        const updatedProCodes = providerCode.map((providerC) =>
            providerC.id === id ? { ...providerC, code } : providerC
        );
        setProviderCode(updatedProCodes);

        const updatedPrevCode = prevCode.map((item) =>
            item.id === id ? { ...item, code } : item
        );
        setPrevCode(updatedPrevCode);
    };

    const handleAddApiProviderCode = (e) => {
        let data = {
            data: {
                api: { id: id, name: name },
                isActive: active === "Active",
                provider: providerCode
            }
        }
        dispatch(addApiProviderCodeAction(data))

    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await dispatch(getApiProviderCodes({ token, id }));
                // setPrevCode(data?.result?.data);
                // setdd(data?.result?.data)
                console.log(data?.result?.data, "data is here")
                setProviderCode(data?.result?.data || []);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [token, id, dispatch]);
    return (
        <div>
            <SubHeading title={`${name} API Provider Codes`}/> 
            <div className=" bg-sky-400 rounded-t-md  cursor-pointer p-4 mt-3 mb-4 font-semibold">
                {`${name} API Plans Details`}
            </div>
            <div>
                <div className="border-b border-gray-900/10">
                    <div className="mt-10 grid grid-cols-2 px-6 py-3 gap-x-6 gap-y-8 sm:grid-cols-3">
                        <div className="sm:col-span-1">
                            <label
                                htmlFor="services"
                                className="block text-md font-medium leading-6 text-gray-900"
                            >
                                Services
                            </label>
                            <div className="mt-2">
                                <select
                                    id="services"
                                    name="services"
                                    required
                                    onChange={(e) => setService(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    <option>All Services</option>
                                    {providers &&
                                        providers.map((item, i) => (
                                            <option key={i}>{item.Service}</option>
                                        ))}
                                </select>
                            </div>
                        </div>

                    </div>
                    <hr/>
                    {/* //line 1  Provider headings*/}
                    <div className="mt-6 grid grid-cols-4 px-6 py-3 gap-x-4 gap-y-2 sm:grid-cols-4">
                      <div className="col-span-1">
                        <h2 className='font-semibold text-xl  m-1'>Provider Names</h2>
                      </div>
                      <div className="col-span-1">
                        <h2 className='font-semibold text-xl  m-1'>Provider Codes</h2>
                      </div>
                      <div className="col-span-1">
                        <h2 className='font-semibold text-xl  m-1'>Provider Names</h2>
                      </div>
                      <div className="col-span-1">
                        <h2 className='font-semibold text-xl  m-1'>Provider Codes</h2>
                      </div>
                    </div>
                    <div className="mt-1 grid grid-cols-4 px-6 py-3 gap-x-4 gap-y-2 sm:grid-cols-4">
                      
                        {
                          providerCode?.map((p, i) => (<>
                                  <div key={i} className="col-span-1">
                               
                                    <label
                                        htmlFor="api-type"
                                        className="px-2 mt-2 block sm:max-w-xs w-full h-[48px] rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 mb-3 font-bold"
                                    >
                                        {p.name}
                                    </label>

                                </div>
                                
                                <div className="col-span-1">
                                
                                    <div className="mt-2">
                                    
                                        <input
                                            type="text"
                                            name="status-check-url"
                                            id="status-check-url"
                                            placeholder="  Provide Code"
                                            value={p.code || ""}
                                            // value={prevCode.find((item) => item.id === p.id)?.code || ""}
                                            onChange={(e) => handleProviderCode(p.id, e.target.value)}
                                            className="px-2 block sm:max-w-xs w-full h-[48px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 mb-3"
                                        />
                                    </div>
                                </div>
                            </>
                            ))}
                    </div>
                    <div className="mt-6 grid grid-cols-1 items-center gap-x-2">
                        <div className="flex ">
                           
                            <button
                                onClick={() => handleAddApiProviderCode()}
                                disabled={!(providersName?.length === providerCode.provider?.length)}
                                className=" bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-6 ms-5"
                            >
                                Save
                            </button>
                            <button
                                type="button"
                                onClick={() => navigate(-1)}
                                className="bg-blue-500 hover:bg-red-500 text-white font-bold py-2 px-4 rounded mt-6 ms-5"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ApiProviderCodes;