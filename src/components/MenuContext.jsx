import { createContext, useState } from "react";

export const MenuContext = createContext(0);

export default function MenuProvider({ children }) {
  const [menu, setMenu] = useState(0);
  return (
    <MenuContext.Provider value={{ menu, setMenu }}>
      {children}
    </MenuContext.Provider>
  );
}
