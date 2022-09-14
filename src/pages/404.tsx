import { GatsbyHead } from "~/modules/utils/gatsby-head";
import Layout from "~modules/layout";

const NotFoundPage = () => (
  <Layout>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;

export const Head = () => <GatsbyHead title="404: Not found" />;
