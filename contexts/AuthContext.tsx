import { createContext, useState } from "react";

export const AuthState = createContext({});

const AuthContext: React.FC = ({ children }) => {
  return <AuthState.Provider value={{}}>{children}</AuthState.Provider>;
};

export default AuthContext;
