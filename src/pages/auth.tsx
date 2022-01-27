import { useContext, useEffect } from "react";
import { NextPage } from "next";
import Link from "next/link";
import { AuthState } from "../contexts/AuthContext";
import { useRouter } from "next/router";
import { FiKey, FiUser } from "react-icons/fi";

const Auth: NextPage = () => {
  const { username, setUsername, password, setPassword, login, session } =
    useContext(AuthState);

  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session]);

  return (
    <div className="flex bg-background-100 min-h-screen w-full p-6 md:space-x-6 font-poppins select-none">
      <div className="hidden md:flex flex-grow bg-cover bg-banner1 bg-center rounded-[38px] shadow-color" />
      <div className="flex flex-col items-center justify-between w-full md:w-96 bg-primary rounded-[38px] shadow-color p-8 text-white">
        <div className="flex flex-col items-center justify-between h-full mb-40">
          <div className="rounded-full bg-white shadow-secondary w-[5.5rem] h-[5.5rem] mt-20 p-2">
            <div className="w-full h-full bg-cover bg-[url('/img/icons/user.png')]" />
          </div>
          <form onSubmit={login} className="flex flex-col items-center">
            <div className="flex items-center border-[3px] border-white rounded-[20px]">
              <FiUser className="text-2xl ml-4" />
              <input
                className="bg-transparent outline-none h-12 w-52 p-4 font-bold placeholder:text-white placeholder:text-opacity-70 placeholder:font-bold"
                placeholder="Username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex items-center border-[3px] border-white rounded-[20px] mt-6">
              <FiKey className="text-2xl ml-4" />
              <input
                className="bg-transparent outline-none h-12 w-52 p-4 font-bold placeholder:text-white placeholder:text-opacity-70 placeholder:font-bold"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-white shadow-secondary text-gray-900 font-bold px-14 py-3 rounded-[18px] mt-12"
            >
              Sign in
            </button>
          </form>
        </div>
        <Link href="/">
          <a className="font-semibold text-sm hover:text-gray-200 duration-200">
            PPS Renovation Lab
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Auth;
