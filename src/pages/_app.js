import Layout from "@/components/business/Layout/Layout";
import { Fragment } from "react";
import "@/styles/global.scss";

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}
