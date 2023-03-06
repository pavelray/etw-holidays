import Layout from "@/components/business/Layout/Layout";
import { Fragment } from "react";
import "@/styles/global.scss";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>ETW Holidays - Explore the world</title>
        <meta name="description" content="Looking for the perfect vacation? Look no further than ETW Holidays (Explore The World). We offer personalized travel packages, flights, and tours to help you discover the world. DMC Represent Compay for Thailand and Srilanka" />
        <meta
          name="keywords"
          content="Travel, Travel Agency, ETW, Etw Holidays, Holiday, Tours, Vacation, Business, Familiy, DMC, International, Domestic, Thailand, Srilanka, Malaysia, Singapore, Ladakh, Kashmir, Rajasthan, Darjeening, Gangtok"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="ETW Holidays" />
        <meta name="twitter:creator" content="Pavel Ray" />
        <meta property="og:url" content="www.etwholidays.com" />
        <meta
          property="og:title"
          content="ETW Holidays - Explore the world"
        />
        <meta
          property="og:description"
          content="Looking for the perfect vacation? Look no further than ETW Holidays (Explore The World). We offer personalized travel packages, flights, and tours to help you discover the world. DMC Represent Compay for Thailand and Srilanka"
        />
        <meta property="og:site_name" content="ETW Holdiays" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="/images/logos/ETW-logo-black.png" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="ETW Holdiays" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}
