import Head from 'next/head'

import Header from '../Header/header'
import styles from './layout.module.scss'

export default function Layout({ children }) {

  return (
    
    <>
      <Head>
        <title>Good Burger </title>
      </Head>
      <Header />
      <main className={styles.main}>{children}</main>

    </>
  )
}

