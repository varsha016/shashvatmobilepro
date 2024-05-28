import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { getPlan } from "../../APIs/settingsApi";

import Heading from "../../commonComps/Heading";
import Table from "../../commonComps/Table";
import Spinner from "../../commonComps/Spinner";
import { dataFormater } from "../../commonComps/DataFormater";


const UserPlans = ()=>{

    const [planData, setPlanData] = useState(null);
    const [hRows, setHRows] = useState(null);
    const token = useSelector((state)=>state.auth.token);

    useEffect(()=>{
        PlanList();
    },[planData?.length])

const PlanList = async()=>{
    const data = await getPlan(token);
    const reqData = dataFormater(data?.result);
    setHRows(data.result.cols);
    setPlanData(reqData);
}
    return(
        <>
        <Heading heading="User Plans" button="Add New Plan" link="/userplans/new"/>
        {planData ?
        <Table hRow={hRows} data={planData}/> : <Spinner/>}
        </>
    )
}

export default UserPlans;