import Head from 'next/head'
import Header from '../components/header/Header'
import Sidebar from '../components/sidebar/Sidebar'
import Welcome from '../components/welcome/Welcome'

export default function Home () {
  return (
    <div className='h-screen overflow-hidden'>
      <Head>
        <title>Chat-Alpha</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <main
        className='
      flex
      '
      >
        <Sidebar />
        <Welcome />
      </main>
    </div>
  )
}
