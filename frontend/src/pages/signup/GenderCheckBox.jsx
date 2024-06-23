import React from 'react'

const GenderCheckBox = ({onCheckboxChange,selectedGender}) => {
  return (
    <div className='flex'>
      <div className='form-control'>
        <label className={`lable gap-2 cursor-pointer ${selectedGender==="male"?"selected":""}`}>
            <span className='lable-text'>Male</span>
           <input type="checkbox" className='checkbox align-middle border-slate-900' 
           checked={selectedGender==="male"}
           onChange={()=>onCheckboxChange("male")}
           />
        </label>
      </div>
      <div className='form-control ml-2'>
      <label className={`lable gap-2 cursor-pointer ${selectedGender==="female"?"selected":""}`}>
            <span className='lable-text'>FeMale</span>
           <input type="checkbox" className='checkbox align-middle border-slate-900'
            checked={selectedGender==="female"}
            onChange={()=>onCheckboxChange("female")}
           />
        </label>
      </div>
    </div>
  )
}

export default GenderCheckBox



//STARTER CODE FOR GENDERCHECKBOX COMPONENTS
// import React from 'react'

// const GenderCheckBox = () => {
//   return (
//     <div className='flex'>
//       <div className='form-control'>
//         <label className={`lable gap-2 cursor-pointer`}>
//             <span className='lable-text'>Male</span>
//            <input type="checkbox" className='checkbox border-slate-900' />
//         </label>
//       </div>
//       <div className='form-control'>
//       <label className={`lable gap-2 cursor-pointer`}>
//             <span className='lable-text'>FeMale</span>
//            <input type="checkbox" className='checkbox border-slate-900' />
//         </label>
//       </div>
//     </div>
//   )
// }

// export default GenderCheckBox
