import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>UATU : the Watcher</title>
        <meta name="description" content="made with love by sandeep-jaiswar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        hello
      </div>
    </div>
  )
}

export default Home
