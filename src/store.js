// import {configureStore} from "@reduxjs/toolkit";
// import dashboardSlice from "./Slices/dashboardSlice";
// import screenSizeSlice from "./Slices/screenSizeSlice";
// import loginInfoSlice from "./Slices/loginInfoSlice";

// const store = configureStore({
//     reducer:{
//         dashboardData: dashboardSlice,
//         screenSize: screenSizeSlice,
//         loginInfo: loginInfoSlice
//     }
// });
// console.log("store", store)

// export default store;
// store.js
import { configureStore} from '@reduxjs/toolkit';
import authReducer,{logout, setUserAndToken} from './Slices/loginInfoSlice';
import dashboardSlice from "./Slices/dashboardSlice";
import screenSizeSlice from "./Slices/screenSizeSlice";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { refreshAccessToken } from './Components/APIs/loginApi';
import settingsSlice from './Slices/settingsSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    dashboardData: dashboardSlice,
       screenSize: screenSizeSlice,
       settingOption:settingsSlice
  },
});


// //refresh token logic
// let refreshTokenInterval;

// store.subscribe(() => {
//   const { expiresIn, refreshToken } = store.getState().auth;

//   if (expiresIn && refreshToken) {
//     const expirationTime = expiresIn;
//     const currentTime = new Date().getTime();
//     // Refresh token 1 minute before it expires
//     const refreshTime = expirationTime - currentTime - 60000;

//     if (!refreshTokenInterval || refreshTime < 60000 ) {
//       console.log("refreshTime", refreshTime)
//       clearInterval(refreshTokenInterval);
//       refreshTokenInterval = setInterval(async () => {
//         try {
//           console.log(currentTime, expirationTime, refreshTime)
//           const  data  = await refreshAccessToken(refreshToken);
//           store.dispatch(setUserAndToken({ token:data.accessToken, refreshToken:data.refreshToken, expiresIn:new Date().getTime()+80*1000 }));
//         } catch (error) {
//           console.error('Token refresh failed:', error);
//           store.dispatch(logout());
//         }
//       }, refreshTime);
//     }
//   }
// });
export const persistor = persistStore(store);
