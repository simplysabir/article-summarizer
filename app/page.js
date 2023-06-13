import Image from 'next/image'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import InsertLink from './components/InsertLink'

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <InsertLink />
    </>
  )
}
