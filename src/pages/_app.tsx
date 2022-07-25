import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

// The Provider (redux), Authenticator (WebAuth/Stanford Pass),
// Google Analytics, Layout, and Component usually goes here.

const MyApp = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default MyApp;
