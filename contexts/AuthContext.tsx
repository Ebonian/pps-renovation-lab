import { createContext, useState } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../client/firebase";

export const AuthState = createContext({
  email: "",
  password: "",
  setEmail: (email: string) => {},
  setPassword: (password: string) => {},

  session: {} || null,
  err: "",
  setErr: (err: string) => {},

  login: async () => {},
  logout: async () => {},
});

const AuthContext: React.FC = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [session, setSession] = useState<Object | null>({});
  onAuthStateChanged(auth, (currentUser) => {
    setSession(currentUser);
  });

  const [err, setErr] = useState("");

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        email + ".com",
        password
      );
      console.log(user);
    } catch (error) {
      let errorMessage = "error";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      setErr(errorMessage);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };
  return (
    <AuthState.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        session,
        err,
        setErr,
        login,
        logout,
      }}
    >
      {children}
    </AuthState.Provider>
  );
};

export default AuthContext;
