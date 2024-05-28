import { createSlice} from "@reduxjs/toolkit";


const dashboardSlice = createSlice({
    name:"dashboard",
    initialState:{
        data:[],
    },
    reducers:{
        getData:(state, action)=>
        {
            state.data.push(action.payload);
        }
    }
})

export const{getData} = dashboardSlice.actions;

export default dashboardSlice.reducer;