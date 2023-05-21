import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import MainNav from "./MainNav/MainNav";
import { useSetModal } from "../context/ModalProvider";

const HomePage = lazy(() => import("../pages/HomePage"));

const SharedLayout = () => {
  const setModal = useSetModal();

  console.log("Render ShL");

  return (
    <>
      <MainNav />
      <button onClick={() => setModal(<h1>Modal from Sahred</h1>)}>
        OpenModal
      </button>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
};

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
