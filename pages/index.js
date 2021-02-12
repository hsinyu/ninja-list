import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore iusto
        harum, amet voluptatum iste tenetur quisquam quam sed laudantium
        distinctio illo debitis expedita accusamus minus veniam dolorum id?
        Maiores, repellendus.
      </p>
      <Link href="/ninjas">
        <a>See Ninja Listing</a>
      </Link>
    </div>
  )
}
