/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React from 'react'


type Props = {}

function AITag({Text}: any) {
  function urlify(text: any) {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.split(urlRegex)
       .map((part: any) => {
          if(part.match(urlRegex)) {
             return <a className='text-green-300' href={part} target="_blank" rel="noreferrer">{part}<br/></a>;
          }
          return part;
       });
  }

  return (
    <div className='flex mb-10 px-5'>
    <div className='max-w-[500px] h-auto bg-blue-700 p-5 rounded-3xl'>
    {urlify(Text)}
    </div>
    <div className='w-[120px] h-[120px] md:w-[50px] md:h-[50px] rounded-full md:flex items-center ml-2 hidden'>
        <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/mind-model-1912367-1623490.png" className='rounded-full' alt="" />
    </div>
    </div>
  )
}

export default AITag