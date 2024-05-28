import React, { useEffect } from "react";
import Dashboard from "./Dashboard";
import { useDashboardData } from "./APIs/dashboardApi";
import { useSelector } from "react-redux";
import UserDashboard from "./UserDashboard";
import DistributorDashboard from "./DistributorDashboard";
import MasterDistributorDashboard from "./MasterDistributorDashboard";

const Body = () => {
  const isadmin = useSelector(state => state.auth.isadmin);
  const isRetailer = useSelector(state => state.auth.isRetailer);
  const isDistributor = useSelector(state => state.auth.isDistributor);
  const isMasterDistributor = useSelector(state => state.auth.isMasterDistributor);
  const {getDashboardData} = useDashboardData();
  useEffect(() => {
   getDashboardData();
  }, []);

  return (
    <>
      <div className=" pt-14 bg-slate-100 h-[100vh]">
       
        {isadmin && <Dashboard />}
        {isRetailer && <UserDashboard />}
        {isDistributor && <DistributorDashboard />}
        {isMasterDistributor && <MasterDistributorDashboard/>}
      </div>
    </>
  );
};
export default Body;

