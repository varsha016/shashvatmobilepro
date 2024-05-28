import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Heading from "../../commonComps/Heading";
import { useDispatch, useSelector } from "react-redux";
import { addApiCircleCodeAction } from "../../../Slices/settingsSlice";
import { getApiCircleCodes } from "../../APIs/settingsApi";
import SubHeading from "../../commonComps/SubHeading";

const ApiCircleCodes = () => {
  const [prevCode, setPrevCode] = useState([]);
  const [circleCodes, setCircleCodes] = useState([]);
  const [dd, setdd] = useState()
  const token = useSelector((state) => state.auth.token);
  const { id, name, active } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await dispatch(getApiCircleCodes({ token, id }));
        setPrevCode(data?.result?.data);
        setdd(data?.result?.data)
      console.log(data?.result?.data , "data varsha")
        setCircleCodes(data?.result?.data || []);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [token, id, dispatch]);

  const handleCircleCode = (id, code) => {
    const updatedCircleCodes = circleCodes.map((circle) =>
      circle.id === id ? { ...circle, code } : circle
    );
    setCircleCodes(updatedCircleCodes);

    const updatedPrevCode = prevCode.map((item) =>
      item.id === id ? { ...item, code } : item
    );
    setPrevCode(updatedPrevCode);
  };

  const handleAddApiCircleCode = () => {
    const data = {
      data: {
        api: { id: id, name: name },
        isActive: active === "Active",
        circle: circleCodes,
      },
    };
    dispatch(addApiCircleCodeAction(data));
  };

  return (
    <>
      <SubHeading title={`${name} Circle Codes`} />
      <div>
        {/* <pre>{JSON.stringify(prevCode, null, 2)}</pre>
        <pre>{JSON.stringify(circleCodes, null, 2)}</pre> */}
        <pre>{JSON.stringify(dd, null, 2)}</pre>
        <div className="border-b border-gray-900/10">
          <div className="mt-10 grid grid-cols-1 px-6 py-3 gap-x-6 gap-y-8 sm:grid-cols-2">
            {circleCodes.map((circle, i) => (
              <div
                key={i}
                data-aos="fade-up"
                className="sm:col-span-1 grid grid-cols-1 sm:grid-cols-2 px-6"
              >
                <label
                  htmlFor={`circle-code-${circle.id}`}
                  className="block text-lg font-medium leading-6 text-gray-500"
                >
                {circle.name}
                </label>
                <input
                  type="text"
                  name={`circle-code-${circle.id}`}
                  id={`circle-code-${circle.id}`}
                  placeholder="  Circle Code"
                  value={prevCode.find((item) => item.id === circle.id)?.code || ""}
                  onChange={(e) => handleCircleCode(circle.id, e.target.value)}
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-1 sm:mt-0"
                />
            </div>
            ))}
          </div>
          <div
            data-aos="fade-up"
            className="mt-6 grid grid-cols-1 items-center gap-x-6"
          >
            <div className="flex px-16 justify-between">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="text-sm font-semibold leading-6 rounded-md hover:bg-slate-400 bg-slate-300 text-gray-900 w-full max-w-60 hover:scale-110 transform-origin-center transition-transform"
              >
                Cancel
              </button>
              <button
                onClick={() => handleAddApiCircleCode()}
                disabled={!circleCodes.length}
                className="w-full max-w-60 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50 hover:scale-110 transform-origin-center transition-transform"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApiCircleCodes