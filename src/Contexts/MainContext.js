import React, { createContext, useState } from "react";

const MainContext = createContext();

function MainStateProvider({ children }) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);



  return (
    <MainContext.Provider value={{data, setData, error, setError, isLoading, setIsLoading}}>
      {children}
    </MainContext.Provider>
  );
}

export { MainContext, MainStateProvider };