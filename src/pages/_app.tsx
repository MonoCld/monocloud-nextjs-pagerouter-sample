import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/header";
import { MonoCloudAuthProvider } from "@monocloud/monocloud-nextjs/client";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <MonoCloudAuthProvider>
      <Header />
      <Component {...pageProps} />
    </MonoCloudAuthProvider>
  );
}
