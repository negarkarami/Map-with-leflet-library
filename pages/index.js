import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ConnectionPage from "./connection-page/ConnectionPage";
import Example from "./table/Example";

export default function Home() {
  return (
    <div className={styles.container}>
      <ConnectionPage/>
      {/*<Example/>*/}
    </div>
  )
}
