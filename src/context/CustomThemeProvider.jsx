import { createContext, useCallback, useContext, useState } from "react";

import { ThemeProvider } from "styled-components";

const theme = {
  color: {
    primary: "green",
    active: "blue",
  },
};

const lightTheme = {
  ...theme,
  color: {
    ...theme.color,
    primary: "green",
  },
};

const darkTheme = {
  ...theme,
  color: {
    ...theme.color,
    primary: "red",
  },
};

const themes = {
  DARK: "dark",
  LIGHT: "light",
};

const CustomThemeContext = createContext();
export const useSetTheme = () => useContext(CustomThemeContext);

const CustomThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.LIGHT);

  const toggleTheme = useCallback(() => {
    setTheme((p) => (p === themes.LIGHT ? themes.DARK : themes.LIGHT));
  }, []);

  const themeProps = theme === themes.DARK ? darkTheme : lightTheme;

  return (
    <CustomThemeContext.Provider value={toggleTheme}>
      <ThemeProvider theme={themeProps}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
};

export default CustomThemeProvider;
