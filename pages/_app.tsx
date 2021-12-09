import "../styles/globals.css";

import Head from "next/head";
import { useEffect } from "react";
import ReactGA from "react-ga4";

import type { AppProps } from "next/app";
function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		ReactGA.initialize("UA-167495277-3");
		ReactGA.send(window.location.pathname + window.location.search);
	}, []);

	return (
		<>
			<Head>
				<title>I Luv Dogs</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
