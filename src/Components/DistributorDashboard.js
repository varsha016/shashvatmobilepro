import React from "react";

import { useSelector } from "react-redux";
import Card from "./commonComps/Card";

const DistributorDashboard =()=>{
    
    
    const cardDetails = useSelector((store)=>store.dashboardData.data[0])
    console.log(cardDetails)

    return(
        <div className=" w-full h-full">
            <h1 className="font-semibold text-blue-900 text-2xl mb-2 ms-5 ">Distributor Dashboard </h1>
            <div className="flex flex-wrap">
            {cardDetails?.map((item,i)=><Card key={item._id} item={item}/>)}
            </div>
        </div>
    )
}

export default DistributorDashboard;