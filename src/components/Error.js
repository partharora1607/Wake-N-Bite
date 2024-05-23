import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="text-center">
      <h3 className="font-bold text-4xl py-20">We'll be back shortly</h3>
      <h1 className="font-semibold text-2xl">We are fixing a temporary glitch. Sorry for the inconvenience.!</h1>
    </div>
  );
};

export default Error;
