import { NavLink } from "react-router-dom";
import { useState } from "react";

const listForItem1_3 = [
  {
    title: "TitleOfLink-1.3.1",
    openingList: null,
    navOptions: {
      to: "some_location",
    },
  },
];

const listForItem1_0 = [
  {
    title: "TitleOfLink-1.1",
    openingList: null,
    navOptions: {
      to: "some_location",
    },
  },
  {
    title: "TitleOfLink-1.2",
    openingList: null,
    navOptions: {
      to: "some_location",
    },
  },
  {
    title: "MenuItemForOpenOtherMenuList-1.3",
    openingList: listForItem1_3,
  },
];

const mainMenuOptions = [
  {
    title: "MenuItemForOpenOtherMenuList-1.0",
    openingList: listForItem1_0,
  },
  {
    title: "TitleOfLink-2.0",
    openingList: null,
    navOptions: {
      to: "some_location",
    },
  },
];

const MenuItem = ({ title, openingList, navOptions }) => {
  const [menuList, setMenuList] = useState(null);
  return openingList ? (
    <>
      <button type="button" onClick={() => setMenuList(openingList)}>
        {title}
      </button>
      <div className="modal">
        <MenuList mainMenuOptions={menuList} />
      </div>
    </>
  ) : (
    <NavLink to={navOptions.to}>{title}</NavLink>
  );
};

const MenuList = ({ mainMenuOptions }) => {
  return mainMenuOptions.map((option) => <MenuItem {...option} />);
};

export default MenuList;

// Call
<MenuList mainMenuOptions={mainMenuOptions} />;
