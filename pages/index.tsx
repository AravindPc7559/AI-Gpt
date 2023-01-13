/* eslint-disable @next/next/no-img-element */
import SideBar from '../components/SideBar/SideBar'
import { RiArrowRightCircleFill } from 'react-icons/ri'
import UserTag from '../components/ChatTag/UserTag'
import AITag from '../components/ChatTag/AITag'
import { useState } from 'react'
import {FaBars} from 'react-icons/fa'
const axios = require("axios");

type Imessage = {
  user?: string,
  Ai?:string,
}[]

export default function Home() {
  const [searchInput, setSearchInput] = useState('');
  const [loading, setLoading] = useState(false);
  const[switchColor, setSwitchColor] = useState(false);
  const [messages, setMessages] = useState<Imessage>([{
    user:'',
    Ai:'Hai iam your AI-Gpt. Iam ready to search anything for you...',
  }])

  const handleSearchSubmit = () => {
    setSearchInput('')
    setLoading(true);
    setMessages((prev) => [...prev, {'user': searchInput,}])
    const options = {
      method: 'POST',
      url: 'https://you-chat-gpt.p.rapidapi.com/',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'b9399fd5a3msh9a53c41a6288184p15643ejsnf1506ea37f29',
        'X-RapidAPI-Host': 'you-chat-gpt.p.rapidapi.com'
      },
      data: `{"question":${JSON.stringify(searchInput)},"max_response_time":30}`
    };
    
    axios.request(options).then(function (response: any) {
      console.log(response.data);
      setLoading(false);
      setMessages((prev) => [...prev, {'Ai':response.data.answer,}])
    }).catch(function (error: any) {
      setLoading(false);
      console.error(error);
    });
  }
  
  return (
    <>
    <div className='h-screen w-full bg-gray-900 flex'>
      <div className='md:w-[20%] md:h-screen hidden md:flex'>
        <SideBar setSwitchColor={setSwitchColor} switchColor={switchColor}/>
      </div>
      <div className='w-full md:w-[80%]  h-screen flex flex-col justify-between'>
        <div className='w-full h-[70px] bg-gradient-to-t from-gray-900 to-gray-800 flex justify-between px-20 items-center'>
          <FaBars className='text-2xl text-white md:hidden' />
          <h1 className='text-2xl font-semibold -tracking-tighter text-white'>AI-GPT</h1>
        </div>
        <div className={`w-full h-screen ${switchColor ? 'bg-gray-300' : 'bg-gray-900' } text-white overflow-hidden overflow-y-auto px-5 pb-9 pt-2`}>
          {
            messages.map((data, index) => (
              <>
              <div className='flex  justify-start' key={index}>
                {
                  data.user &&
                  <UserTag text={data.user} />
                }
              </div>
              <div className='flex  justify-end mt-5'>
                
                  {
                    data.Ai &&
                    <AITag Text={data.Ai}/>
                  }
                
            </div>
              </>
            ))
          }
          {
            loading &&
            <div className='flex  justify-end mt-5'>
             <div className='flex'>
    <div className='max-w-[600px] h-auto flex items-center p-4 pl-7 bg-blue-700 rounded-3xl'>    
  <div role="status">
    <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
</div>

    </div>
    <div className='w-[200px] h-[200px] md:w-[50px] md:h-[50px] rounded-full md:flex items-center ml-2 bg-blue-500 hidden'>
        <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/mind-model-1912367-1623490.png" className='rounded-full' alt="" />
    </div>
    </div></div>
          }
        </div>
        <div className='w-full h-[90px] bg-gradient-to-b from-gray-900 to-gray-800 flex  justify-center items-center px-5'>
          <input type="text" name="" placeholder='Enter Text Here.......' 
          className='p-2 text-white bg-gray-500 w-[600px] h-auto focus:border-none outline-none focus:bg-white focus:text-black' 
          onChange={(e) =>  setSearchInput(e.target.value)} 
          value={searchInput}
          />
          <div className=' bg-gray-500 p-3 cursor-pointer' onClick={() => !loading && handleSearchSubmit()}>
            <RiArrowRightCircleFill className='text-base hover:scale-150 transition-all' />
          </div>
          <button className='ml-7 text-sm text-red-600 font-extrabold' onClick={() => {setMessages([{
    user:'',
    Ai:'Hai iam your AI-Gpt. Iam ready to search anything for you...',
  }])
  setLoading(false)}}>Clear Chat</button>
        </div>
      </div>
    </div>
    </>
  )
}
