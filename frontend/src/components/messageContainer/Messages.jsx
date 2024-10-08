import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../../skeleton/MessagesSkeleton'
import useListenMessages from '../../hooks/useListenMessages'

const Messages = () => {
  const { messages, loading } = useGetMessages()
  useListenMessages()
  const lastMessageRef = useRef()

  useEffect(() => {
    // Scroll to the last message when messages update
    if (messages.length > 0) {
      setTimeout(() => {
        lastMessageRef.current?.scrollIntoView({ behavior: "smooth" })
      }, 100)
    }
  }, [messages])

  return (
    <div className='px-4 flex-1 overflow-auto'>
      {loading ? (
        // Show skeleton loaders while messages are loading
        [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)
      ) : messages.length > 0 ? (
        // Render the messages when loaded
        messages.map((message, idx) => (
          <div key={message._id} ref={idx === messages.length - 1 ? lastMessageRef : null}>
            <Message message={message} />
          </div>
        ))
      ) : (
        // Show a prompt when no messages are available
        <p className='text-center text-gray-400'>Send a message to start the conversation</p>
      )}
    </div>
  )
}

export default Messages


// import React, { useEffect, useRef } from 'react'
// import Message from './Message';
// import useGetMessages from '../../hooks/useGetMessages.js'
// import MessageSkeleton from '../../skeleton/MessagesSkeleton'
// import useListenMessages from '../../hooks/useListenMessages.js';


// const Messages = () => {
//   const{messages,loading}=useGetMessages()
//   useListenMessages()
//   const lastMessageRef=useRef()
//   useEffect(()=>{
// setTimeout(()=>{
// lastMessageRef.current?.scrollIntoView({behavior:"smooth"})
// },100)
//   },[messages])
//   return (
//     <div className='px-4 flex-1 overflow-auto'>
//       {!loading && messages.length>0 && messages.map((message)=>(
//         <div key={message._id} ref={lastMessageRef}>
//           <Message  message={message}/>
//         </div>
//       ))}
//      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
//      {!loading && messages.length === 0 && (
// 				<p className='text-center text-gray-400'>Send a message to start the conversation</p>
// 			)}
//     </div>
//   )
// }

// export default Messages
//STARTER CODE SNIPPET
// import React from 'react'
// import Message from './Message'

// const Messages = () => {
//   return (
//     <div className='px-4 flex-1 overflow-auto'>
//       <Message/>
//       <Message/>
//       <Message/>
//       <Message/>
//       <Message/>
//       <Message/>
//       <Message/>
//       <Message/>
//       <Message/>
//       <Message/>
//       <Message/>
//       <Message/>
//       <Message/>
//       <Message/>
//       <Message/>
//       <Message/>
//       <Message/>
//       <Message/>
//     </div>
//   )
// }

// export default Messages
