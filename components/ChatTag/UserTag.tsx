/* eslint-disable @next/next/no-img-element */
import React from 'react'

type Props = {}

const UserTag = ({text}: any) => {
  return (
    <div className='flex'>
    <div className='w-[50px] h-[50px] rounded-full md:flex items-center hidden'>
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
    </div>
    <div className='max-w-[600px] h-auto bg-gray-700 p-5 rounded-3xl ml-2'>
       {text}
    </div>
    </div>
  )
}

export default UserTag