import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../../hooks/useGetConversations'
import { getRandomEmoji } from '../../utils/emojis'

const Conversations = ({ onChatClick }) => {
  const { loading, conversations } = useGetConversations()

  return (
    <div className='py-2 flex flex-col overflow-auto h-full w-full'>
      {/* Display each conversation */}
      {conversations.map((conversation, idx) => (
        <div 
          key={conversation._id} 
          onClick={onChatClick} 
          className='cursor-pointer hover:bg-gray-200 transition-colors duration-200 ease-in-out rounded-lg p-2'>
          <Conversation
            conversation={conversation}
            emoji={getRandomEmoji()}
            lastIdx={idx === conversations.length - 1}
          />
        </div>
      ))}

      {/* Loading Spinner */}
      {loading && (
        <div className='flex justify-center items-center py-4'>
          <span className='loading loading-spinner mx-auto'></span>
        </div>
      )}
    </div>
  )
}

export default Conversations



//STARTER CODE SNIPPET
// import React from 'react'
// import Conversation from './Conversation'

// const Conversations = () => {
//   return (
//     <div className='py-2 flex flex-col overflow-auto'>
//       <Conversation/>
//       <Conversation/>
//       <Conversation/>
//       <Conversation/>
//       <Conversation/>
//     </div>
//   )
// }

// export default Conversations
