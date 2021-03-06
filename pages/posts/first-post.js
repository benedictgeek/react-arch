import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import { useFirstPost } from "./useFirstpost";

export default function FirstPost() {
  let { isLoading, data } = useFirstPost();
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
