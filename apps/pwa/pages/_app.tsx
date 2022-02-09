import Head from 'next/head';
import { AppProps } from 'next/app';
import { NativeBaseProvider } from "native-base";

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <NativeBaseProvider>
      <Head>
        <title>Welcome to pwa!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </NativeBaseProvider>
  );
}

export default CustomApp;
