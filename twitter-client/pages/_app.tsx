import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <GoogleOAuthProvider clientId="414173508851-v791q1e9plhk8581t292qr6v34v27t3o.apps.googleusercontent.com">
        <Component {...pageProps} />
      </GoogleOAuthProvider>{" "}
    </div>
  );
}
