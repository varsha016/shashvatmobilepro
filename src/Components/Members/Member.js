import React from "react";
import Heading from "../commonComps/Heading";
import MemberList from "./MemberList";
import SubHeading from "../commonComps/SubHeading";


const Member = ()=>{

   
    return(
        <>
        <SubHeading title="Member List" sidebutton="Add New Member " link="/addmember"/>
        <MemberList/>
      
        </>
    )
}

export default Member;