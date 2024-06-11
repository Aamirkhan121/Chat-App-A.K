import React from 'react'
import GenderCheckBox from './GenderCheckBox'

const SignUp = () => {
  return (
    <div className='flex flex-col item-center justify-center min-w-96 mx-auto'>
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp
          <span className="text-blue-500">ChatApp</span>
        </h1>
        <form>
        <div>
            <label className="lable p-2">
              <span className="text-base label-text">Fullname</span>
            </label>
            <input type="text" placeholder="Full Name" className="w-full input input-bordered h-10" />
          </div>

        <div>
            <label className="lable p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input type="text" placeholder="Username" className="w-full input input-bordered h-10" />
          </div>

        <div>
            <label className="lable p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input type="text" placeholder="password" className="w-full input input-bordered h-10" />
          </div>

        <div>
            <label className="lable p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input type="text" placeholder="confirm password" className="w-full input input-bordered h-10 mb-3" />
          </div>
          {/* GENDER CHECKbOX GOSE HERE */}

          <GenderCheckBox />

          <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>Already have an account</a>
          <div>
            <button className="btn btn-block btn-sm mt-2 border-slate-700">SignUp</button>
          </div>
        </form>
        </div>
    </div>
  )
}

export default SignUp


//STARTER CODE FOR THE SIGNUP COMPONENTS
// import React from 'react'
// import GenderCheckBox from './GenderCheckBox'

// const SignUp = () => {
//   return (
//     <div className='flex flex-col item-center justify-center min-w-96 mx-auto'>
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           SignUp
//           <span className="text-blue-500">ChatApp</span>
//         </h1>
//         <form>
//         <div>
//             <label className="lable p-2">
//               <span className="text-base label-text">Fullname</span>
//             </label>
//             <input type="text" placeholder="Full Name" className="w-full input input-bordered h-10" />
//           </div>

//         <div>
//             <label className="lable p-2">
//               <span className="text-base label-text">Username</span>
//             </label>
//             <input type="text" placeholder="Username" className="w-full input input-bordered h-10" />
//           </div>

//         <div>
//             <label className="lable p-2">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input type="text" placeholder="password" className="w-full input input-bordered h-10" />
//           </div>

//         <div>
//             <label className="lable p-2">
//               <span className="text-base label-text">Confirm Password</span>
//             </label>
//             <input type="text" placeholder="confirm password" className="w-full input input-bordered h-10 mb-3" />
//           </div>
//           {/* GENDER CHECKbOX GOSE HERE */}

//           <GenderCheckBox />

//           <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>Already have an account</a>
//           <div>
//             <button className="btn btn-block btn-sm mt-2 border-slate-700">SignUp</button>
//           </div>
//         </form>
//         </div>
//     </div>
//   )
// }

// export default SignUp
