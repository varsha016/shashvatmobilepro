import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addApiCircleCodes,
  addApiProviderCodes,
  addApis,
  
  addMember,
  
  addProvider,
  addProvidersSlab,
  addService,
  addapiProvider,
  saveApiProvider,
} from "../Components/APIs/settingsApi";
import MemberList from "../Components/Members/MemberList";

export const addServiceProvider = createAsyncThunk(
  "userData/fetch",
  async (serviceName, status) => {
    const response = await addService(serviceName, status);
    return response.json();
  }
);

export const addPlanProvider = createAsyncThunk(
  "userData/fetch",
  async (pData, status) => {
    const response = await addService(pData, status);
    return response.json();
  }
);

export const addMemberProvider = createAsyncThunk( "userData/add", async (formData,status) => {
    console.log(formData,"formData");
    const response = await addMember(formData,status);
    console.log(response,"response");
    if (!response.ok) {
      console.log("response not ok");
      const errorMessage = await response.text();
      return errorMessage;
    }
    return response.json();
  }
);


export const addApiAction = createAsyncThunk(
  "userData/addApi",
  async (apiDetails, callBack) => {
    const response = await addApis(apiDetails, callBack);
    console.log(response.json());
    return response.json();
  }
);
export const addProviderAction = createAsyncThunk(
  "userData/addProvider",
  async (providerDetails) => {
    const response = await addProvider(providerDetails);
    if (!response.ok) {
      console.log("response not ok");
      const errorMessage = await response.text();
      return errorMessage;
    }
    return response.json();
  }
);

export const addApiProviderCodeAction = createAsyncThunk(
  "userData/addApiProviderCode",
  async(apiProviderCode)=>{
    const response = await addApiProviderCodes(apiProviderCode);
    return response.json();
  }
)

export const addApiCircleCodeAction = createAsyncThunk(
  "userData/addApiCircleCode",
  async(apiCircleCode)=>{
    const response = await addApiCircleCodes(apiCircleCode);
    return response.json();
  }
)
export const saveAipProvider = createAsyncThunk(
  "user/addApiProviders",
  async (provider) => {
    const response = await addapiProvider(provider);
    console.log(response);
    return response.json();
  }
);
export const addApiSlabCodeAction = createAsyncThunk("userData/addApiSlabCode",async(apiSlab)=>{
  const response = await addProvidersSlab(apiSlab,);
  console.log(response);
      return response.json();
    }
  )

const settingSlice = createSlice({
  name: "settings",
  initialState: {
    addService: {
      status: null,
    },
    addMember: {
      status: null,
    },
    addApi: {
      status: null,
    },
    
    getProvider: {
      status: null,
      pCols:null,
      pData: null,
    },
    addProvider: {
      status: null,
    },
    addApiProvider:{
      status:null
    },
    addApiCircles:{
      status:null
    },
    getApiPlan:{
      status:null
      
    },
    addApiSlab:{
    
      status:null
    }
   
 
  },
  reducers: {
    setProviderData:(state,action)=>{
      state.getProvider.pCols = action.payload.cols;
      state.getProvider.pData = action.payload.data;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(addServiceProvider.pending, (state) => {
        state.addService.status = "pending";
      })
      .addCase(addServiceProvider.fulfilled, (state) => {
        state.addService.status = "fulfilled";
      })
      .addCase(addServiceProvider.rejected, (state) => {
        state.addService.status = "rejected";
      })
      .addCase(addApiAction.pending, (state) => {
        state.addApi.status = "pending";
      })
      .addCase(addApiAction.fulfilled, (state) => {
        state.addApi.status = "fulfilled";
      })
      .addCase(addApiAction.rejected, (state) => {
        state.addApi.status = "rejected";
      })
      .addCase(addProviderAction.pending, (state) => {
        state.addProvider.status = "pending";
      })
      .addCase(addProviderAction.fulfilled, (state) => {
        state.addProvider.status = "fulfilled";
      })
      .addCase(addProviderAction.rejected, (state) => {
        state.addProvider.status = "rejected";
      })
      .addCase(addApiProviderCodeAction.pending, (state) => {
        state.addApiProvider.status = "pending";
      })
      .addCase(addApiProviderCodeAction.fulfilled, (state,action)=>{
        state.addApiProvider.status = "fulfilled";
        console.log("fulfilled",action.payload)
      })
      .addCase(addApiProviderCodeAction.rejected, (state,action)=>{
        state.addApiProvider.status = "rejected";
        console.log("rejected",action.payload)
      })
      .addCase(addApiCircleCodeAction.pending, (state)=>{
        state.addApiCircles.status = "pending";
      })
      .addCase(addApiCircleCodeAction.fulfilled, (state,action)=>{
        state.addApiCircles.status = "fulfilled";
      })
      .addCase(addApiCircleCodeAction.rejected, (state,action)=>{
        state.addApiCircles.status = action.status
      })
      .addCase(addApiSlabCodeAction.pending, (state)=>{
        state.addApiSlab.status = "pending";
      })
      .addCase(addApiSlabCodeAction.fulfilled, (state,action)=>{
        state.addApiSlab.status = "fulfilled";
        state.addApiSlab.data = action.payload;
        console.log("fulfilled", state.addApiSlab.data = action.payload);
      })
      .addCase(addApiSlabCodeAction.rejected, (state,action)=>{
        state.addApiSlab.status = action.status
      })
  },
});
export default settingSlice.reducer;

export const { setProviderData } = settingSlice.actions;
