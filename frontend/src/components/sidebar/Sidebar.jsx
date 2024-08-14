import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const Sidebar = ({ onChatClick }) => {
  return (
    <div className='border border-slate-500 p-4 flex flex-col xs:max-w-[200%] w-full'>
      <SearchInput />
      <div className='divider my-4'></div>
      <Conversations onChatClick={onChatClick} />
      <div className='mt-auto'>
        <LogoutButton />
      </div>
    </div>
  )
}

export default Sidebar



// import React from 'react'
// import SearchInput from './SearchInput'
// import Conversations from './Conversations'
// import LogoutButton from './LogoutButton'

// const Sidebar = () => {
//   return (
//     <div className='border-r border-slate-500 p-4 flex flex-col'>
//       <SearchInput/>
//       <div className='divider px-3'></div>
//       <Conversations/>
//         <LogoutButton/> 
      
//     </div>
//   )
// }

// export default Sidebar