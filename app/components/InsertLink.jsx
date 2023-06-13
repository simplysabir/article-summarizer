"use client";
import React, {useState, useEffect} from 'react'

const InsertLink = () => {
    const [url, setUrl] = useState("");
    const [output, setOutput] = useState("");
  return (
    <section className='font-mono flex items-center flex-col insert-link'>
        <div>
            <h1 className='insert-heading font-mono'>Insert Link</h1>
        </div>
        <div className='font-mono'>
            <input type="text" name="url" id="url" placeholder='insert url ..' className='px-6 py-1' />
        </div>
    </section>
  )
}

export default InsertLink