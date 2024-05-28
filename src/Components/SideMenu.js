import React, { useEffect, useRef, useState } from "react";
import MenuSideItem from "./commonComps/MenuSideItem";
import cmpLogo from "../Images/Logos/finmatrix-logo.jpeg";
import {
  faUsers,
  faCartPlus,
  faRectangleList,
  faFile,
  faGears,
  faBell,
  faEnvelope,
  faMobileButton,
  faCreditCard,
 faSatelliteDish,
 faLightbulb,
 faIndianRupeeSign,
 faHandHoldingDollar,
 faWallet,
 faList,
 faSuitcase,
 faHistory,
 faMessage,
  faSignal,
  faMoneyBillTransfer,
  faMoneyCheck
 
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const SideMenu = ({isOpen,setIsOpen,toggleSidebar}) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const isadmin = useSelector(state=>state.auth.isadmin);
  const isRetailer = useSelector(state=>state.auth.isRetailer);
  const isDistributor = useSelector(state=>state.auth.isDistributor);
  const isMasterDistributor = useSelector(state=>state.auth.isMasterDistributor);
  const handleChange = (i) => {
    activeMenu !== i ? setActiveMenu(i) : setActiveMenu(null);
  };
  let sideMenus = [];
  if(isadmin){
    sideMenus=[
    {
      label: "Members",
      icon: faUsers,
      link: "member",
      // icon: faUsers,
      // subItems: [
      //   { itemName: "Member List", link: "member" },
      //   { itemName: "Add Member", link: "add-member" },
      //   { itemName: "Master Distributor", link: "master-distributor" },
      //   { itemName: "Distributos", link: "distributors" },
      //   { itemName: "Retailers", link: "retailers" },
      //   { itemName: "Api Users" ,link:"api-user" },
      // ],
    },
    {
      label: "Money Request",
      icon: faCartPlus,
      subItems: [
        { itemName: "Pending Request" },
        { itemName: "Reject Request" },
        { itemName: "Approved Request" },
      ],
    },
    {
      label: "History",
      icon: faHistory,
      subItems: [
        { itemName: "Recharge" },
        { itemName: "All History" },
        { itemName: "Wallet History" },
        { itemName: "Admin Fund Transfer" },
        { itemName: "Disputes" },
      ],
    },
    {
      label: "Reports",
      icon: faFile,
      subItems: [
        { itemName: "Live Reports" },
        { itemName: "Txn Wise" },
        { itemName: "Topup Wise" },
        { itemName: "User Wise" },
        { itemName: "Operator Wise" },
        { itemName: "Api Wise" },
        { itemName: "Complain History" },
        { itemName: "New User" },
      ],
    },
    {
      label: "Settings",
      icon: faGears,
      subItems: [
        { itemName: "Services", link:"/services" },
        { itemName: "Providers" ,link:"/providers" },
        { itemName: "API(s)", link:"/apis" },
        { itemName: "User Plans", link:"/userplans" },
        { itemName: "DMR Commision" },
        { itemName: "Payment Options", link:"/payment" },
        { itemName: "Website Setting" },
        { itemName: "UPI Setting" },
        { itemName: "Benner Setting" },
      ],
    },
    {
      label: "Notice Board",
      icon: faBell,
      subItems: [
        { itemName: "Notice Board" }, 
        { itemName: "Notifications" }
      ]
    },
    {
      label: "Sent SMS",
      icon: faEnvelope,
      subItems: [],
    },
  ]
} else if(isRetailer) {
  sideMenus = [
    {
      label: "Mobile",
      icon: faMobileButton,
      link:"retailer/Mobile"
    }, {
      label: "Credit Card",
      icon: faCreditCard,
      link:"/retailer/Creditcard"
    }, {
      label: "DTH",
      icon: faSatelliteDish,
      link:"retailer/DTH"
    }, {
      label: "Utilities",
      icon: faLightbulb,
      link:"retailer/Utilities"
    }, {
      label: "Money Transfer",
      icon: faIndianRupeeSign,
      link:"retailer/MoneyTransfer"
    }, {
      label: "Request Money",
      icon: faHandHoldingDollar,
      link:"retailer/RequestMoney"
    }, {
      label: "History",
      icon: faHistory,
      link:"retailer/History"
    }, {
      label: "Disputes",
      icon: faGears,
      link:"retailer/Disputes"
    }, {
      label: "Wallet History",
      icon: faWallet,
    }, {
      label: "Ledger",
      icon: faSuitcase,
    },
  ]
} else if(isDistributor){
    sideMenus = [
    {
      label: "My Team",
      icon: faUsers,
      subItems: [
        { itemName: "Add Member" ,link :"distributor/AddMember"},
        { itemName: "Retailer", link:"distributor/Retailer" },
       ,
      ]
    }, {
      label: "History",
      icon: faHistory,
      link:"distributor/History"
    }, {
      label: "Wallet History",
      icon: faSatelliteDish,
      link:"distributor/WalletHistory"
    },  {
      label: "Ledger",
      icon: faSuitcase,
      link:"distributor/Ledger"
    },
    {
        label: "Request Money",
        icon: faIndianRupeeSign,
        link:"distributor/RequestMoney"
      },
      {
        label: "Send Money",
        icon: faIndianRupeeSign,
        link:"distributor/SendMoney"
      },
      {
        label: "Money Request",
        icon: faIndianRupeeSign,
        subItems: [
          { itemName: "Pending Request", link:"distributor/PendingRequest" },
          { itemName: "Reject Request", link:"distributor/RejectRequest" },
          
        ]
      },
      {
        label: "Send SMS",
        icon: faMessage,
        link:"distributor/SendSMS"
    }

    ]
}
 else if(isMasterDistributor){
    sideMenus = [
    {
      label: "My Team",
      icon: faUsers,
     link:"masterdistributor/myteam"
    },
    {
      label: "Services",
      icon: faSignal,
     link:"masterdistributor/service"
    }, 
    {
      label: "History",
      icon: faHistory,
      link:"masterdistributor/History",
      
    }, {
      label: "Wallet History",
      icon: faSatelliteDish,
      link:"masterdistributor/WalletHistory"
    },  {
      label: "Ledger",
      icon: faSuitcase,
      link:"masterdistributor/Ledger"
    },
    {
        label: "Request Money",
        icon: faMoneyCheck,
        link:"masterdistributor/Requestmoney"
      },
      {
        label: "Send Money",
        icon: faIndianRupeeSign,
        link:"masterdistributor/SendMoney"
      },
      {
        label: "Money Request",
        icon: faMoneyBillTransfer,
        subItems: [
          { itemName: "Pending Request", link:"masterdistributor/PendingRequest" },
          { itemName: "Reject Request", link:"masterdistributor/RejectRequest" },
          
        ]
      },
      {
        label: "Send SMS",
        icon: faMessage,
        link:"masterdistributor/SendSMS"
    }

    ]
}
return (
    <>
   <div>
  {/* {isOpen && <div className="fixed inset-0  z-40" onClick={toggleSidebar}></div>} */}
  <div className={`fixed inset-y-0 left-0 z-50 bg-white text-gray-700 w-64 ${isOpen ? 'w-[260px]' : 'w-[80px]'} `}>
    <div className="py-6 px-4">
      <div className="flex items-center justify-center">
        <Link to="/">
          <img
            className={` ${!isOpen?'w-10 h-10':'w-24 rounded-sm h-14 mx-5 hover:scale-110 transform-origin-center transition-transform'}`}
            src={cmpLogo}
            alt="Logo"
          />
        </Link>
      </div>
      <hr className="my-4" />
      {sideMenus.map((item, i) => (
        <MenuSideItem
          key={i}
          active={activeMenu === i}
          handleChange={() => handleChange(i)}
          item={item}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      ))}
    </div>
  </div>
 </div>
</>
  );
};
export default SideMenu