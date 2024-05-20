import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h3>Error : {err.status} not found</h3>
      <h1>Opps! something went wrong!!</h1>
    </div>
  );
};

export default Error;
