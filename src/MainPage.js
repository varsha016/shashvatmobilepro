import { useSelector } from "react-redux";
import FinMatrix from "./Finmatrix";
import Login from "./Login";


const MainPage = () => {
  const authenticated = useSelector((state) => state.auth.isAuthenticated);
  return authenticated ? <FinMatrix /> : <Login />;
  // const userAuthenticed = useSelector((state) => state.auth.user);
  // return userAuthenticed ? <UserDashboard /> : <Login />;
};
export default MainPage;
