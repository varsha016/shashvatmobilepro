import { createBrowserRouter } from "react-router-dom";
import Body from "./Components/Body";

import MainPage from "./MainPage";
import Services from "./Components/Settings/Services/Services";
import Error from "./Components/Error";
import AddService from "./Components/Settings/Services/AddService";
import Apis from "./Components/Settings/Apis/Apis";
import AddApi from "./Components/Settings/Apis/AddApi";
import Providers from "./Components/Settings/Providers/Providers";
import AddProvider from "./Components/Settings/Providers/AddProvider";
import ApiProviderCodes from "./Components/Settings/Apis/ApiProviderCodes";
import ApiCircleCodes from "./Components/Settings/Apis/ApiCircleCodes";
import Mobile from "./Components/UserComponents/Mobile";
import CreditCard from "./Components/UserComponents/CreditCard";
import DTH from "./Components/UserComponents/DTH";
import Utilities from "./Components/UserComponents/Utilities";
import MoneyTransfer from "./Components/UserComponents/MoneyTransfer";
import UtilityApi from "./Components/Settings/Apis/UtilityApi";
import UserDashboard from "./Components/UserDashboard";
import RequestMoney from "./Components/UserComponents/RequestMoney";

import Disput from "./Components/UserComponents/Disput";
import Wallet from "./Components/UserComponents/Wallet";
import MemberList from "./Components/Members/MemberList";
import Ledger from "./Components/UserComponents/Ledger";
import Distributor from "./Components/Members/Distributor";
import DistributorDashboard from "./Components/DistributorDashboard";
import RechargeHistory from "./Components/Distributor/RechargeHistory";
import WalletHistory from "./Components/Distributor/WalletHistory";
import DistributorLedger from "./Components/Distributor/DistributorLedger";
import DistributorRequestMoney from "./Components/Distributor/DistributorRequestMoney";
import SendMoney from "./Components/Distributor/SendMoney";

import PendingRequest from "./Components/Distributor/PendingRequest";
import RejectRequest from "./Components/Distributor/RejectRequest";

import ApiUser from "./Components/Members/ApiUser";
import SendSMS from "./Components/Members/SendSMS";
import Payment from "./Components/UserComponents/Payment";
import AddPayment from "./Components/UserComponents/AddPayment";
import Retailer from "./Components/Members/Retailer";
import MasterDistributor from "./Components/Members/MasterDistributor";

import AddMembers from "./Components/Distributor/Addmembers";
import AddMember from "./Components/Members/AddMember";
import UserPlans from "./Components/Settings/UserPlan/UserPlans";
import AddNewPlan from "./Components/Settings/UserPlan/AddNewPlan";
import ApiPlanCodes from "./Components/Settings/Apis/ApiPlanCodes";

import History from "./Components/UserComponents/History";

import MRechargeHistory from "./Components/MDistributor/MRechargeHistory";
import MWalletHistory from "./Components/MDistributor/MWalletHistory";
import MLedger from "./Components/MDistributor/MLedger";
import MSendMoney from "./Components/MDistributor/MSendMoney";
import MPendingRequest from "./Components/MDistributor/MPendingRequest";
import MRejectRequest from "./Components/MDistributor/MRejectMoney";
import MRequestMoney from "./Components/MDistributor/MRequestMoney";
import Profile from "./Components/Profile";
// import DistributorList from "./Components/MDistributor/DistributorList";
import MyTeam from "./Components/MDistributor/MyTeam";
import MService from "./Components/MDistributor/services/MService";
import Dth from "./Components/MDistributor/services/Dth";
// import Mobiles from "./Components/MDistributor/services/Mobiles";
import Utility from "./Components/MDistributor/services/Utility";
import MDAddMember from "./Components/MDistributor/MDAddMember";
import Member from "./Components/Members/Member";
import MDCredit from "./Components/MDistributor/services/MDCredit";
import Mobiles from "./Components/MDistributor/services/Mobiles";





const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
    children: [
      ///Admin routes
      {
        path: "/",
        element: <Body/>,
      },
      {
        path:"/profile",
        element:<Profile/>
       },
      
     {
        path: "member",
        element: <Member/>
      },
      {
        path: "addmember",
        element: <AddMember/>
      },
      // {
      //   path: "add-member/new",
      //   element: <AddMember />,
      // },
      {
        path: "distributors",
        element: <Distributor/>,
      },
      {
        path: "master-distributor",
        element: <MasterDistributor/>,
      },
      {
        path: "retailers",
        element: <Retailer/>,
      },
      {
        path: "api-user",
        element: <ApiUser/>,
      },

      {
        path:"services",
        element: <Services/>
      },
      {
        path:"services/new",
        element:<AddService/>
      },
      {
        path:"providers",
        element:<Providers/>
      },
      {
        path:"providers/new",
        element:<AddProvider/>
      },
      {
        path:"/payment",
        element:<Payment/>
      },
      {
        path:"/payment/new",
        element:<AddPayment/>
      },
      {
        path:"apis",
        element:<Apis/>
      },
      {
        path:"apis/new",
        element:<AddApi/>
      },
      {
        path:"apis/utilityapi",
        element:<UtilityApi/>
      },
      // {
      //   path:"apis/utilityapi",
      //   element:<UtilityApi/>
      // },
      {
        path:"apis/pcodes/:id/:name/:active",
        element:<ApiProviderCodes/>
      },
      {
        path:"apis/ppcodes/:id/:name/:active",
        element:<ApiPlanCodes/>
      },
      
      
      {
        path:"apis/ccodes/:id/:name/:active",
        element: <ApiCircleCodes/>
      },
      {
        path:"/userplans",
        element:<UserPlans/>
      },
      {
        path:"/userplans/new",
        element:<AddNewPlan/>
      },

      /////Retailer routes
      
       {
        path:"/retailer/mobile",
        element: <Mobile/>
      },
      {
        path:"/retailer/Creditcard",
        element:<CreditCard/>
      },
      {
        path:"/retailer/DTH",
        element:<DTH/>
      },
      {
        path:"/retailer/Utilities",
        element:<Utilities/>
      },
      {
        path:"/retailer/MoneyTransfer",
        element:<MoneyTransfer/>
      },
      {
        path:"/retailer/RequestMoney",
        element:<RequestMoney/>
      },
      {
        path:"/retailer/History",
        element:<History/>
      },
      {
        path:"/retailer/disputes",
        element:<Disput/>
      },
      {
        path:"//walletHistory",
        element:<Wallet/>
      },
      {
        path:"/user/ledger",
        element:<Ledger/>
      },
     
      // Distributor routes
     
      {
        path:"distributor/AddMember",
        element: <AddMembers/>
      },
      {
        path:"distributor/Retailer",
        element: <Retailer/>
      },
      {
        path:"distributor/History",
        element: <RechargeHistory/>
      },
      {
         path:"distributor/WalletHistory",
          element: <WalletHistory/>
        },
        {
          path:"distributor/Ledger",
           element: <DistributorLedger/>
         },
         {
          path:"distributor/Requestmoney",
           element: <DistributorRequestMoney/>
         },
         {
          path:"distributor/sendmoney",
           element: <SendMoney/>
         },
         {
          path:"distributor/moneyRequest",
           
         },
         {
          path:"distributor/pendingRequest",
           element: <PendingRequest/>
         },
         {
          path:"distributor/rejectRequest",
           element: <RejectRequest/>
         },
         {
          path:"distributor/SendSMS",
           element: <SendSMS/>
         },

         //Master Distributor routes
         
          {
            path:"masterdistributor/addmember",
            element:<MDAddMember/>
          },
          {
            path:"masterdistributor/myteam",
            element:<MyTeam/> 
            },
          {
            path:"masterdistributor/service",
            element:<MService/>
          },
        //   {
        //   path:"/services/prepaid",
        //   element:<Mobiles/>
        // },
        {
          path:"masterdistributor/prepaid",
          element:<Mobiles/>
      },
          {
            path:"masterdistributor/postpaid",
             element:<Mobiles/>
           },
          {
            path:"masterdistributor/landline",
             element:<Mobiles/>
      },
           ////////////////
          ////////////////
          {
          path:"masterdistributor/water",
          element:<Utility/>
      },
          {
            path:"masterdistributor/gas",
             element:<Utility/>
           },
          {
            path:"masterdistributor/electricity",
             element:<Utility/>
      },
           ////////////////
          {
            path:"masterdistributor/dth",
             element:<Dth/>
           },
           {
            path:"masterdistributor/creditcardpay",
             element:<MDCredit/>
           },
          //  {
          //   path:"/masterdistributor/service/masterdistributor/mobile",
          //    element:<Mobiles/>
          //  },
          //  {
          //   path:"/masterdistributor/service/masterdistributor/utility",
          //    element:<Utility/>
          //  },
        
         {
          path:"masterdistributor/History",
            element: <MRechargeHistory/>
         },
         {
          path:"masterdistributor/WalletHistory",
          element:<MWalletHistory/>
           
         },
         {
          path:"masterdistributor/Ledger",
          element:<MLedger/>
           
         },
         {
          path:"masterdistributor/Requestmoney",
          element:<MRequestMoney/>
           
         },
         {
          path:"masterdistributor/sendmoney",
          element:<MSendMoney/>
           
         },
         {
          path:"masterdistributor/Pendingrequest",
          element:<MPendingRequest/>
           
         },
         {
          path:"masterdistributor/RejectRequest",
          element:<MRejectRequest/>
           
         },
         
    ],
    errorElement:<Error/>

  },
]);

export default AppRoutes;
