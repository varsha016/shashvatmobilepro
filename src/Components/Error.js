import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <>
      <h1>We got an error, please try after some time</h1>
      <div>{error}</div>
    </>
  );
};
export default Error;