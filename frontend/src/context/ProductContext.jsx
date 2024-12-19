import React, { createContext, useContext } from 'react';

// Create the context
const AppContext = createContext();

// Create the provider component
const AppProvider = ({ children }) => {
  const value = "sohan"; // Value provided to the context

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the AppContext
const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export { AppProvider, useAppContext };
