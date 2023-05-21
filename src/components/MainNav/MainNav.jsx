import { NavLink, useLocation } from "react-router-dom";

import { styled } from "styled-components";

const getFlex = (theme) => {
  return `
    display: flex;
    justify-content: center;

  `;
};

const StyledNav = styled(NavLink)`
  ${({ theme }) => getFlex(theme)}
  color: ${({ theme }) => {
    return theme.color.primary;
  }};
  &.active {
    color: ${({ theme }) => theme.color.active};
  }
`;

const MainNav = () => {
  const location = useLocation();
  return (
    <nav>
      <StyledNav to="/">Home</StyledNav>
      <StyledNav to="/about">About</StyledNav>
      <StyledNav
        to={{
          pathname: "/contacts",
          search: "q=21&color=red",
        }}
        state={location}
      >
        Contacts
      </StyledNav>
    </nav>
  );
};

export default MainNav;
