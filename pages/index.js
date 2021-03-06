import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Login from '../components/Login'
import { useMoralis } from 'react-moralis'

export default function Home() {

const {isAuthenticated, logout, user} = useMoralis();
if(!isAuthenticated) {return (<Login />)}

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Welcome to the METAVERSE</h1>
      <h3>Your Secured Username is {user.get("username")}</h3>

      <button type="button" onClick={logout}>Logout from Metaverse</button>
    </div>
  )
}
