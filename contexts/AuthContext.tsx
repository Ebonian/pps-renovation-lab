import { createContext, useState } from "react";

export const AuthState = createContext({
  email: "",
  password: "",
  setEmail: (email: string) => {},
  setPassword: (password: string) => {},
});

const AuthContext: React.FC = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <AuthState.Provider value={{ email, setEmail, password, setPassword }}>
      {children}
    </AuthState.Provider>
  );
};

export default AuthContext;
