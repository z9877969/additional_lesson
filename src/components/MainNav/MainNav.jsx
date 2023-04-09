import { NavLink, useLocation } from "react-router-dom";

const getActiveStyles = ({ isActive }) =>
  !isActive ? { color: "green" } : { color: "red" };

const MainNav = () => {
  const location = useLocation();
  console.log("location :>> ", location);
  return (
    <nav>
      <NavLink style={getActiveStyles} to="/">
        Home
      </NavLink>
      <NavLink
        style={getActiveStyles}
        // className={({ isActive }) => {
        //   return isActive ? "activeClass" : "standartClass";
        // }}
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        style={getActiveStyles}
        to={{
          pathname: "/contacts",
          search: "q=21&color=red",
        }}
        state={location}
      >
        Contacts
      </NavLink>
    </nav>
  );
};

export default MainNav;
