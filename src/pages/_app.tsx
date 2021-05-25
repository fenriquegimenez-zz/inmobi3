// import App from "next/app";
import type { AppProps /*, AppContext */ } from "next/app"

import "../database/firebase"
import "bootswatch/dist/flatly/bootstrap.min.css"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import Layout from "../components/layout/Layout"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <ToastContainer />
    </Layout>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp
