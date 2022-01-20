import axios from "axios";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";

axios.defaults.withCredentials = true;

export const AuthState = createContext({
  loginBody: {},
  registerBody: {},
  session:
    {} || {
      _id: "",
      username: "",
      firstName: "",
      lastName: "",
      sex: "",
      __v: 0,
    } ||
    null,
  error: "",
  username: "",
  password: "",
  firstname: "",
  lastname: "",
  gender: "",
  setError: (error: string) => {},
  setUsername: (username: string) => {},
  setPassword: (password: string) => {},
  setFirstname: (firstname: string) => {},
  setLastname: (lastname: string) => {},
  setGender: (gender: string) => {},
  login: () => {},
  logout: () => {},
});

const AuthContext: React.FC = ({ children }) => {
  const router = useRouter();

  const [session, setSession] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("");

  const loginBody = {
    username: username,
    password: password,
  };

  const registerBody = {
    username: username,
    firstName: firstname,
    lastName: lastname,
    sex: gender,
    password: password,
  };

  const [error, setError] = useState("");

  const login = async () => {
    setError("");
    await axios
      .post(
        `${
          process.env.NEXT_PUBLIC_ENVIRONMENT === "PRODUCTION"
            ? process.env.NEXT_PUBLIC_PRODUCTION_API
            : process.env.NEXT_PUBLIC_DEVELOPMENT_API
        }/account/login`,
        loginBody
      )
      .then(() => getUser())
      .catch((err) => setError(err));
  };

  const logout = async () => {
    await axios
      .post(
        `${
          process.env.NEXT_PUBLIC_ENVIRONMENT === "PRODUCTION"
            ? process.env.NEXT_PUBLIC_PRODUCTION_API
            : process.env.NEXT_PUBLIC_DEVELOPMENT_API
        }/account/logout`
      )
      .then(() => {
        eraseCookie("connect.sid");
      })
      .catch((err) => err);
    router.reload();
  };

  const eraseCookie = async (cookieName: string) => {
    await axios.post("/api/cookie/erase", { cookie: cookieName });
  };

  const getUser = async () => {
    await axios
      .get(
        `${
          process.env.NEXT_PUBLIC_ENVIRONMENT === "PRODUCTION"
            ? process.env.NEXT_PUBLIC_PRODUCTION_API
            : process.env.NEXT_PUBLIC_DEVELOPMENT_API
        }/account/user`
      )
      .then((res) => {
        if (!res.data.user) {
          setSession(res.data.user);
          return;
        }

        setSession(res.data.user);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <AuthState.Provider
      value={{
        loginBody,
        registerBody,
        session,
        error,
        username,
        password,
        firstname,
        lastname,
        gender,
        setError,
        setUsername,
        setPassword,
        setFirstname,
        setLastname,
        setGender,
        login,
        logout,
      }}
    >
      {children}
    </AuthState.Provider>
  );
};

export default AuthContext;
