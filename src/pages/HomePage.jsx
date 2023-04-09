import { Outlet, useParams } from "react-router-dom";

const HomePage = () => {
  const params = useParams();
  console.log("params :>> ", params);
  return (
    <>
      <h1>HomePage</h1>
      <Outlet />
    </>
  );
};

export default HomePage;
