import { useDispatch } from "react-redux";
import { getData } from "../../Slices/dashboardSlice";

export const useDashboardData = () => {
  const dispatch = useDispatch();

  const getDashboardData = async () => {
    try {
      const response = await fetch(
        "https://finmatrixnodejs.onrender.com/api/stats",
        {
          method: "POST",
        }
      );
      if (!Response.ok) {
        console.log("response not ok");
      }
      const reqData = await response.json();
      dispatch(getData(reqData.result.data));
    } catch (error) {
      console.log("main error", error);
    }
  };
  return { getDashboardData };
};
