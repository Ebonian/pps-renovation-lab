import "../styles/globals.css";
import type { AppProps } from "next/app";
import BaiorghorContext from "../contexts/BaiorghorContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BaiorghorContext>
      <Component {...pageProps} />
    </BaiorghorContext>
  );
}

export default MyApp;
