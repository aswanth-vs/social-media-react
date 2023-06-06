import React, { Children, createContext, useState } from "react";

export const postContext = createContext();

function ContextShare({ children }) {
  const [postData, setpostData] = useState({});
  return (
    <>
      <postContext.Provider value={{ postData, setpostData }}>{children}</postContext.Provider>
    </>
  );
}

export default ContextShare;
