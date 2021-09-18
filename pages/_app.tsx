import type { AppProps } from "next/app";
import Head from "next/head";

import "../styles/globals.scss";

function SunnySide({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Sunnyside Agency</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default SunnySide;
