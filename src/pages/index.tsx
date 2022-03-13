import { Link } from "gatsby";

import Image from "~components/image";
import Layout from "~components/layout";
import SEO from "~components/seo";

import type { PageProps } from "gatsby";

export default function IndexPage(props: PageProps) {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <p>You are at {props.uri}</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
}
