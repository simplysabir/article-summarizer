"use client";
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const InsertLink = () => {
    const [link, setLink] = useState("");
    const [output, setOutput] = useState("");

    useEffect(()=>{
        const fetchOutput = async() => {
           
            const url = `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${link}&length=4`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '069c3cc0dfmsh5ecc76f47d66dedp1ec696jsnd16896fe03e7',
                    'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
                }
            };
            
            try {
                const response = await fetch(url, options);
                const result = await response.json();
                setOutput(result);
                
            } catch (error) {
                console.error(error);
            }
    }
    fetchOutput();
    },[link])

    return (
        <section className='font-mono flex items-center flex-col insert-link' id='insert'>
            <div>
                <h1 className='insert-heading font-mono'>Insert Link</h1>
            </div>
            <div className='font-mono'>
                <input type="text" name="url" id="url" placeholder='insert url ..' className='px-6 py-1' onChange={(e)=>{setLink(e.target.value)}} />
            </div>
            <div className='font-mono flex items-center flex-col mb-2 p-2'>
                <h1 className='insert-heading font-mono mt-4'>Output</h1>
                <p>(press enter after entering the url, it will take 1-2 mins)</p>
                <div className='card font-mono p-3'>
                    {
                        output !== "" && output.summary
                    }
                </div>
            </div>
        </section>
      )
}




export default InsertLink