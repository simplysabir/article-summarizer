import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='font-mono flex items-center justify-between p-4'>
      <h1 className='font-bold heading'>bytewise</h1>
      <Link href={'https://github.com/simplysabir/article-summarizer'} target='_blank' className='font-bold'>Github</Link>
    </nav>
  )
}

export default Navbar