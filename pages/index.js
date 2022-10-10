import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';


export default function Home() {
  return (

    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>and I’m passionate</h1>
        <h1 className={utilStyles.secondp}>about code and <mark>design!</mark></h1>
      </section>
    </Layout>
  );
}
