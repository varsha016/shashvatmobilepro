import {store} from "../store";

const AuthHeader = () => {
   const  authState= store.getState().auth;
    const { token } = authState;
    let myHeaders = new Headers();
    myHeaders.append("Authorization",` ${token}`);
    return myHeaders

  };
export default AuthHeader;