import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Atmosphere from './src/components/atmosphere'
import Breadcrumb from './src/components/breadcrumb'
import Footer from './src/components/footer'
import Header from './src/components/header'
import Ourwork from './src/components/ourwork'
import Team from './src/components/team'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Breadcrumb />
      <Ourwork />
      <Team />
      <Atmosphere />
      <Footer />
    </>
  )
}

export default Home
