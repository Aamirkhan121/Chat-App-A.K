import React, { useState } from 'react'
import GenderCheckBox from './GenderCheckBox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignUp'





const SignUp = () => {
  const[inputs,setInputs]=useState({
    fullName:'',
    username:'',
    password:'',
    confirmPassword:'',
    gender:''
  })
  const {loading,signup}=useSignup()
  const handleCheckboxChange=(gender)=>{
    setInputs({...inputs,gender})
  }
  const handleSubmit=async(e)=>{
    e.preventDefault()
    console.log(inputs)
    await signup(inputs)
  }
  return (
    <div className='flex flex-col item-center justify-center min-w-96 mx-auto'>
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp
          <span className="text-blue-500">ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
        <div className='mb-2'>
            <label className="lable p-2">
              <span className="text-base label-text">Fullname</span>
            </label>
            <input type="text" value={inputs.fullName} onChange={(e)=>setInputs({...inputs,fullName:e.target.value})} placeholder="Full Name" className="w-full input input-bordered h-10" />
          </div>

        <div className='mb-2'>
            <label className="lable p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input type="text" value={inputs.username} onChange={(e)=>setInputs({...inputs,username:e.target.value})} placeholder="Username" className="w-full input input-bordered h-10" />
          </div>

        <div className='mb-2'>
            <label className="lable p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input type="password" value={inputs.password} onChange={(e)=>setInputs({...inputs,password:e.target.value})} placeholder="password" className="w-full input input-bordered h-10" />
          </div>

        <div className='mb-2'>
            <label className="lable p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input type="password" value={inputs.confirmPassword} onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})} placeholder="confirm password" className="w-full input input-bordered h-10" />
          </div>
          {/* GENDER CHECKbOX GOSE HERE */}

          <GenderCheckBox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

          <Link to="/login" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>Already have an account</Link>
          <div>
            <button className="btn btn-block btn-sm mt-2 border-slate-700" disabled={loading}>{loading? <span className='loading loading-spinner'></span>:"Sign Up"}</button>
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
