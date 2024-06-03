// do not modify this file
import React from 'react';

// it's just for tailwind css
import '../../public/global.css';

import { AppProps } from 'next/app';
import Head from 'next/head';

function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title key='title'>Solitaire</title>
        <meta
          key='og:title'
          property="og:title" 
          content="Solitaire" />
        <meta
          key='og:site_name'
          property="og:site_name"
          content="Solitaire" />
        <meta
          key='viewport'
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      </Head>
      <Component { ...pageProps } />
    </React.Fragment>
  );
}

export default App;
