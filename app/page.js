import Image from 'next/image'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import InsertLink from './components/InsertLink'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <InsertLink />
    <Footer />
    </>
  )
}
