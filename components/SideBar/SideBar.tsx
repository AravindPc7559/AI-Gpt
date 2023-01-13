import React from 'react'
import {HiOutlineSun, HiOutlineExternalLink} from 'react-icons/hi'
import {SiDiscord} from 'react-icons/si'
import {RiLogoutBoxRLine} from 'react-icons/ri'

type Props = {}

const SideBar = ({setSwitchColor ,switchColor}: any) => {
  return (
         <div className='bg-gray-800 w-[100%] p-6 h-screen flex flex-col justify-between'>
                <div className='p-2 justify-start flex cursor-pointer text-white hover:bg-white hover:bg-opacity-5 rounded-md' 
                style={{
                    border:'1px solid white',
                }}
                >+ New Chat</div>
                <div>
                    <div className='w-full h-[0.1px] bg-white'></div>
                    <div className='flex flex-col gap-6 mt-4 text-white items-start p-2 font-medium'>
                        <button className='flex' onClick={() => setSwitchColor(!switchColor)}><HiOutlineSun className='text-lg ' /> <p className='pl-2 text-sm'>{switchColor ?  'Dark' : 'Light'} Mode</p></button>
                        <button className='flex'><SiDiscord className='text-lg ' /> <p className='pl-2 text-sm'>OpenAI Discord</p></button>
                        <button className='flex'><HiOutlineExternalLink className='text-lg ' /> <p className='pl-2 text-sm'>Updates & FAQ</p></button>
                        <button className='flex'><RiLogoutBoxRLine className='text-lg ' /> <p className='pl-2 text-sm'>Log out</p></button>
                    </div>
                </div>
            </div>
  )
}

export default SideBar