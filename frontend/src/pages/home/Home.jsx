import React, { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messageContainer/MessageContainer'

const Home = () => {
  const [showChat, setShowChat] = useState(false);

  const handleChatClick = () => {
    setShowChat(true);
  };

  const handleBackClick = () => {
    setShowChat(false);
  };

  return (
    <div className="flex h-screen rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <div className={`${showChat ? 'hidden md:flex' : 'flex'} flex-col w-full md:w-1/3 lg:w-1/4`}>
        <Sidebar onChatClick={handleChatClick} />
      </div>
      <div className={`flex flex-col w-full ${showChat ? 'block md:w-2/3 lg:w-3/4' : 'hidden md:block'}`}>
        <div className='md:hidden'>
          <button onClick={handleBackClick} className='p-2 m-2 bg-blue-500 text-white rounded'>
            Back
          </button>
        </div>
        <MessageContainer />
      </div>
    </div>
  )
}

export default Home



// import React from 'react'
// import Sidebar from '../../components/sidebar/Sidebar'
// import MessageContainer from '../../components/messageContainer/MessageContainer'

// const Home = () => {
//   return (
//     <div className="flex sm:h[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//       <Sidebar/>
//       <MessageContainer/>
//     </div>
//   )
// }

// export default Home