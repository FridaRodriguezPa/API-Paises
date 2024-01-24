import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CountrySearchContainer from "../components/CountrySearchContainer";
import { useStore } from "../store";

const Home: NextPage = () => {
  const isDarkMode = useStore((state) => state.isDarkMode)
  return (
    <div style={{backgroundColor: isDarkMode ? "#222e37" : "#fafafa", minHeight: "100vh", maxHeight:"fit-content"}}>
      <Head>
        <title>Country Search</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CountrySearchContainer/>
    </div>
  )
}

export default Home
