import axios from "axios";
import { NextPage } from "next";
import { useContext } from "react";
import { AuthState } from "../contexts/AuthContext";

const Home: NextPage = () => {
  const { session, logout } = useContext(AuthState);

  return (
    <div>
      <p>{session?.username}</p>
      <br />
      <button onClick={() => logout()}>logout</button>
    </div>
  );
};

export default Home;
