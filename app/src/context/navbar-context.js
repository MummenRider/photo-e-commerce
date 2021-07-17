import React, { useState, useContext } from "react";

export const NavBackgroundContext = React.createContext();

export function useNavBackground() {
  return useContext(NavBackgroundContext);
}

export function NavBackgroundProvider({ children }) {
  const [navBackground, setNavBackground] = useState();

  return (
    <NavBackgroundContext.Provider value={{ navBackground, setNavBackground }}>
      {children}
    </NavBackgroundContext.Provider>
  );
}
