import { lazy, Suspense } from "react";
import {
  Link,
  Navigate,
  NavLink,
  Outlet,
  Route,
  Routes,
  useParams,
  // useLocation,
  // useNavigate,
} from "react-router-dom";
import MainNav from "./MainNav/MainNav";

const HomePage = lazy(() => import("../pages/HomePage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));

const SharedLayout = () => {
  return (
    <>
      <MainNav />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
};

const ProductPage = () => {
  const { productId } = useParams();

  // console.log("params :>> ", params);

  return <h1>Product-{productId}-Page</h1>;
};

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />}>
            <Route path="cast" element={<h2>Cast</h2>} />
            <Route path="rew" element={<h2>Rew</h2>} />
          </Route>
          <Route path="/contacts" element={<h1>ContactsPage</h1>} />
          {/* <Route
            path="/product/phone1"
            element={<h1>Product-phone1-Page</h1>}
          />
          <Route
            path="/product/phone2"
            element={<h1>Product-phone2-Page</h1>}
          /> */}
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

// const params = {};

// const R = ({ element, path }) => {
//   const { pathname } = useLocation();

//   if ("dParam" === true) {
//     params.productId = "value";
//   }
//   if (path === pathname) return element;
//   return null;
// };

// const L = ({ to, children }) => {
//   const navigate = useNavigate();

//   const handleClick = (e) => {
//     e.preventDefault();
//     navigate(to);
//   };

//   return (
//     <a href={to} onClick={handleClick}>
//       {children}
//     </a>
//   );
// };
