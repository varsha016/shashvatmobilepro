import AuthHeader from "../../header/AuthHeader";
import { mainApiUrl } from "../commonComps/Constants";

export const getServices = async (currentPage, itemsPerPage,searchInput) => {
 
  let myHeaders = AuthHeader();
  // myHeaders.append("Authorization", `${token}`);
  const data = await fetch(`${mainApiUrl}/getservices?format=table&page=${currentPage}&limit=${itemsPerPage}&search=${searchInput}`, {
    method: "GET",
    headers: myHeaders,
  });
  const sData = await data.json();
  console.log(sData);
  return sData;
};

export const addService = async (serviceName, status) => {
  const apiUrl = mainApiUrl+"/addService";

  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let bodyData = {
    service_id: "",
    service_name: serviceName,
    isActive: status === "Active",
  };
  console.log(bodyData);

  const response = await fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(bodyData),
    headers: myHeaders,
  });
  const data = await response.json();
  console.log(data);
  return data;
};


export const getMember = async (token,totalPages,itemsPerPage) => {
  console.log(token,totalPages,itemsPerPage);
  let myHeaders = new Headers();
  myHeaders.append("Authorization", `${token}`);
  const data = await fetch(`${mainApiUrl}/user/allUsers?format=table&page=${totalPages}&limit=${itemsPerPage}`, {
    method: "GET",
    headers: myHeaders,
  });
  const sData = await data.json();
  console.log(sData);
  return sData;
};
// export const getApis = async (token,totalPages,itemsPerPage) => {
//   console.log(token,totalPages,itemsPerPage);
//   const apiUrl = `${mainApiUrl}/getapis?format=table&page=${totalPages}&limit=${itemsPerPage}`;
// console.log(apiUrl);
//   let myHeaders = new Headers();
//   myHeaders.append("Authorization", `${token}`);

//   const response = await fetch(apiUrl, {
//     method: "GET",
//     headers: myHeaders,
//   });
//   return response.json();
// };    
export const getApis = async (currentPage, itemsPerPage,searchInput) => {
  const apiUrl = `${mainApiUrl}/getapis?format=table&page=${currentPage}&limit=${itemsPerPage}&search=${searchInput}`;

  let myHeaders = AuthHeader();
  // myHeaders.append("Authorization", `${token}`);

  const response = await fetch(apiUrl, {
    method: "GET",
    headers: myHeaders,
  });
  console.log(response);
  return response.json();
};
export const allUsers = async ( type, currentPage, itemsPerPage,searchInput) => {
  let apiUrl = mainApiUrl + `/user/allUsers?format=table&page=${currentPage}&limit=${itemsPerPage}&search=${searchInput}`;
  if(type !=="all"){
    apiUrl+="&type="+type; 
  }
  let myHeaders = AuthHeader();
  // myHeaders.append("Authorization", `${token}`);

  const response = await fetch(apiUrl, {
    method: "GET",
    headers: myHeaders,
  });
  return response.json();
};
export const addApis = async (apiDetails, callBack) => {
  const apiUrl = mainApiUrl+"/addapi";
  const {
    apiType,
    apiName,
    apiBalance,
    statusName,
    apiDomain,
    statusCheckUrl,
    balanceCheckUrl,
    billFetchUrl,
    successValue,
    failedValue,
    pendingValue,
    refidValue,
    operatorId,
    apiUsername,
    apiKey,
    lapuNo,
    remainBalance,
    remark,
    method,
    format,
  } = apiDetails;
  const {
    statusValue,
    successValue2,
    failedValue2,
    refidValue2,
    operatorId2,
    remark2,
    method2,
    status,
  } = callBack;

  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let body = JSON.stringify({
    type: apiType,
    name: apiName,
    username: apiUsername,
    password: "",
    key: apiKey,
    domain: apiDomain,
    balance: apiBalance,
    status_name: statusName,
    success_value: successValue,
    failed_value: failedValue,
    pending_value: pendingValue,
    refid_value: refidValue,
    remain_balance: remainBalance,
    method: method,
    format: format,
    isActive: true,
    remark: remark,
    callback: {
      status_value: statusValue,
      success_value: successValue2,
      failed_value: failedValue2,
      refid_value: refidValue2,
      operator_id: operatorId2,
      remark: remark2,
      method: method2,
      status: status,
    },
  });

  const response = await fetch(apiUrl, {
    method: "POST",
    body: body,
    headers: myHeaders,
  });
  return await response.json();
};
export const getProviders = async (currentPage,itemsPerPage,searchInput) => {
  const apiUrl = `${mainApiUrl}/getproviders?format=table&page=${currentPage}&limit=${itemsPerPage}&search=${searchInput}`;

  let myHeaders = AuthHeader();
  // myHeaders.append("Authorization", `${token}`);

  const response = await fetch(apiUrl, {
    method: "GET",
    headers: myHeaders,
  });
  return response.json();
};

// export const getProviders = async (token,totalPages,itemsPerPage) => {
//   console.log(token,totalPages,itemsPerPage);
//   let myHeaders = new Headers();
//   myHeaders.append("Authorization", `${token}`);
//   const data = await fetch(`${mainApiUrl}/getproviders?format=table&page${totalPages}&limit=${itemsPerPage}`, {
//     method: "GET",
//     headers: myHeaders,
//   });
//   const sData = await data.json();
//   console.log(sData);
//   return sData;
// };

export const addProvider = async (providerDetails) => {
  const apiUrl = mainApiUrl +"/addprovider";
  const { providerName, serviceName, api, backupApi, status, state, logo } =
    providerDetails;

  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let bodyData = {
    provider: providerName,
    service: serviceName,
    api: { name: api },
    state: state,
    logo: logo,
    backup_api: { name: backupApi },
    isActive: status,
  };

  const response = await fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(bodyData),
    headers: myHeaders,
  });
  console.log(response);
  return await response.json();
};
export const getApiProviderCodes = ({ token, id }) => {
  return async (dispatch) => {
    console.log(token, id);
    const apiUrl = mainApiUrl+`/getapiprovidercodes?api_id=${id}`;
    console.log(apiUrl);

    let myHeaders = new Headers();
    myHeaders.append("Authorization", `${token}`);

    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: myHeaders,
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; 
    }
  };
};
export const addApiProviderCodes = async (apiProviderCode) => {
  const apiUrl = mainApiUrl + "/addApiProviderCodes";

  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const response = await fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(apiProviderCode),
    headers: myHeaders,
  });
  console.log(response);
  return await response.json();
};

export const addApiCircleCodes = async (apiCircleCode) =>{
  const apiUrl = mainApiUrl + "/addApiCircleCodes";

  let myHeaders = new Headers ();
  myHeaders.append("Content-Type", "application/json");
  console.log(apiCircleCode)

  const response = await fetch(apiUrl,{
    method:"POST",
    body: JSON.stringify(apiCircleCode),
    headers: myHeaders,
  })
  console.log(response);
  return await response.json();
}
export const addMember = async (formData,status) => {
  const apiUrl = mainApiUrl + "/user";

  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var split = new Date().toString().split(" ");
  var timeZoneFormatted = split[split.length - 2] + " " + split[split.length - 1];
  let bodyData = {
  email:formData.email,
    password:formData.password,
    type: formData.type,
    name: formData.name,
    mobile: formData.mobile,
    adhaar_card:formData.adhaar_card,
    pan_card: formData.pan_card,
    gst_no: formData.gst_no,
    language: "en",
    platform: "Web",
    timezone: 0,
    deviceId: "1234"
  }
  console.log(bodyData);

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(bodyData),
      headers: myHeaders,
    });
   console.log(response,"settingApi.js");
    if (!response.ok) {
     
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data,"addmember is done");
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
export const getPlan = async (token) => {
  let myHeaders = new Headers();
  myHeaders.append("Authorization", `${token}`);
  const data = await fetch(`${mainApiUrl}/getplan?format=table`, {
    method: "GET",
    headers: myHeaders,
  });
  const sData = await data.json();
  console.log(sData);
  return sData;
};
export const addPlan = async (pData, status) => {
  const apiUrl = mainApiUrl + "/addPlan";

  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let bodyData = {
   pData,
    isActive: status === "Active",
  };
  console.log(bodyData);

  const response = await fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(bodyData),
    headers: myHeaders,
  });
  const data = await response.json();
  console.log(data);
  return data;
};
export const getApiCircleCodes = ({ token, id }) => {
  return async (dispatch) => {
    console.log(token, id);
    const apiUrl = mainApiUrl + `/getapicirclecodes?api_id=${id}`;
    console.log(apiUrl);

    let myHeaders = new Headers();
    myHeaders.append("Authorization", `${token}`);

    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: myHeaders,
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; 
    }
  };
};
export const getApiPlanProviders = ({ token, id }) => {
  return async (dispatch) => {
    console.log(token, id);
    const apiUrl = mainApiUrl + `/getapiproviders?api_id=${id}`;
    console.log(apiUrl);

    let myHeaders = new Headers();
    myHeaders.append("Authorization",  `${token}`);

    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: myHeaders,
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; 
    }
  };
};

// export const saveApiProvider = async (providers) => {
// try {
//   const apiUrl = mainApiUrl + "/addApiProviders";
//   console.log(apiUrl);
 
  
//   let myHeaders = new Headers();
//   myHeaders.append("Content-Type", "application/json");
//   console.log(myHeaders);
//   console.log(providers);
//   const response = await fetch(apiUrl, {
//     method: "POST",
//     body: JSON.stringify(providers),
//     headers: myHeaders,
//   });
//   console.log(providers);
//   console.log(response);
//   return await response.json();
// } catch (error) {
//   console.log(error,"HERE IS ERROR");
// }
// };

export const addapiProvider = async (provider) => {
  const apiUrl = mainApiUrl + "/addApiProviders";

  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
console.log(provider);
  let data = {
    data:{
    api: {id:provider.id, name: provider.name},
    api_providers: provider.providers,
    isActive: true,
  }};
  console.log(data);

  const response = await fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(data),
    headers: myHeaders,
  });
  const pdata = await response.json();
  console.log(pdata);
  return pdata;
};

export const addProvidersSlab = async  (data) =>   {
  console.log(data, "hello");
  try {
    
    const apiUrl = mainApiUrl + "/setApiProviderSlab";
    console.log(apiUrl);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `${data.token}`);
    // myHeaders.append("Authorization", Bearer ${token}); 
    console.log("Request headers:", myHeaders);   
    // console.log(data.token);
    delete data.token 
    console.log(data);
    let data1={
data
    }
   
    console.log(data1);
    const response = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(data1),
      headers: myHeaders,
    });
    console.log(data1);

    if (!response.ok) {
      throw new Error("Failed to add API plan providers");
    }
    
    const res = await response.json();
    console.log(res,);
    return res;
  } catch (error) {
    console.error("Error adding API plan providers:", error);
    throw error;
  }
};
// export const addapiProvider = async (provider) => {
//   const apiUrl = mainApiUrl + "/addApiProviders";
  
//   let myHeaders = new Headers();
//   myHeaders.append("Content-Type", "application/json");
// console.log(provider);
//   let data = {
//     api:{id:1,name:"MobiKwik"},
//     isActive:true,
//     api_providers:provider
//   };
//   let data={data1}
//   console.log(data);
//   const response = await fetch(apiUrl, {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: myHeaders,
//   });
//   const pdata = await response
//     .json()
//     .then((data) => {
//       console.log(data);
//       return data;
//     })
//     .catch((error) => {
//       console.error(error);
//     });
//   console.log(pdata);
//   return pdata;
// };
