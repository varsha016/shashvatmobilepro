import axios from 'axios';
import { mainApiUrl } from "../commonComps/Constants";

const API_BASE_URL = "https://finmatrixnodejs.onrender.com/api";
// const API_BASE_URL = mainApiUrl;
;
export const login = async (email, password) => {
  try{
  const response = await axios.post(`${API_BASE_URL}/user/login`, {email, password});
  return response.data;
  } catch (error){
    console.error('Login error:', error);
    throw error;
  }
};
export const refreshAccessToken = async (refreshToken) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/user/refresh-token`, { refreshToken });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Refresh token error:', error);
    throw error;
  }
};
export const apiRequest = async (url, method, token, data) => {
  try {
    const response = await axios({
      url: `${API_BASE_URL}/${url}`,
      method,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data,
    });
    return response.data;
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
};