import "../styles/globals.css";
import type { AppProps } from "next/app";
import BaiorghorContext from "../contexts/BaiorghorContext";
import AuthContext from "../contexts/AuthContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContext>
      <BaiorghorContext>
        <Component {...pageProps} />
      </BaiorghorContext>
    </AuthContext>
  );
}

export default MyApp;
