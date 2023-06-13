import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <main className='font-mono w-full hero  p-4 flex items-center justify-center'>
      <div className='flex  flex-col'>
        <h1 className='font-bold hero-heading'>Convert Large Articles into Byte Size with ByteWise</h1>
        <Link href={'/'}> <button className='px-2 py-1 bg-slate-300 text-black rounded-md font-bold self-start mt-4'>Explore</button> </Link>
      </div>
    </main>
  )
}

export default Hero