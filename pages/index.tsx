import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  const imageProps = {
    src: "https://foodpop.s3.us-east-2.amazonaws.com/images/1.jpg",
    alt: "tttttttt",
    width: "100px",
    height: "100px",
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>UATU : the Watcher</title>
        <meta name="description" content="made with love by sandeep-jaiswar" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      </Head>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
};

export default Home;
