import React, { useState } from 'react'
import { BiSend } from 'react-icons/bi'
import useSendMessage from '../../hooks/useSendMessage'

const MessageInput = () => {
  const [message, setMessage] = useState("")
  const { loading, sendMessage } = useSendMessage()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!message) return
    await sendMessage(message)
    setMessage("")
  }

  return (
    <form className='px-4 my-3' onSubmit={handleSubmit}>
      <div className='w-full relative'>
      <input type="text" value={message} onChange={(e)=> setMessage(e.target.value)} className='border text-sm rounded-lg block w-full p-2.5 bg-gray-600 text-white' placeholder='Send a message' />
       <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3 '>{loading?<div className='loading loading-spinner'></div>:<BiSend className='text-white'/>}</button>
      </div>
    </form>
  )
}

export default MessageInput




// import React, { useState } from 'react'
// import {BiSend } from 'react-icons/bi'
// import useSendMessage from '../../hooks/useSendMessage'

// const MessageInput = () => {
//   const[message,setMessage]=useState("")
//   const{loading,sendMessage}=useSendMessage()
//   const handleSubmit=async(e)=>{
//     e.preventDefault();
//     if (!message) return;
//     await sendMessage(message)
//     setMessage("")

//   }
//   return (
//     <form className='px-4 my-3' onSubmit={handleSubmit}>
//       <div className='w-full relative'>
//        <input type="text" value={message} onChange={(e)=> setMessage(e.target.value)} className='border text-sm rounded-lg block w-full p-2.5 bg-gray-600 text-white' placeholder='Send a message' />
//        <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3 '>{loading?<div className='loading loading-spinner'></div>:<BiSend className='text-white'/>}</button>
//       </div>
//     </form>
//   )
// }

// export default MessageInput
//STARTER CODE SNIPPET
// import React from 'react'
// import {BiSend } from 'react-icons/bi'

// const MessageInput = () => {
//   return (
//     <div className='px-4 my-3'>
//       <div className='w-full'>
//        <input type="text" className='border text-sm rounded-lg p-2.5 bg-gray-600 text-white' placeholder='Send a message' />
//        <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3 '><BiSend className='text-white'/></button>
//       </div>
//     </div>
//   )
// }

// export default MessageInput
