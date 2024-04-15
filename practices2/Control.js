import React, { useRef } from 'react'
import { FaPlus } from 'react-icons/fa'


export const Control = ({newitem,newsetitem,handlsubmit}) => {
  const intref=useRef("")
  return (
    <form action="" onSubmit={handlsubmit}>
     <label htmlFor="addfile" > add value</label>
     <input type="text"
     autoFocus
     ref={intref}
     id='addfile'
     placeholder='add'
     value={newitem}
     onChange={(e)=>newsetitem(e.target.value)}

     required />
     <button type='submit' aria-label='addfile'
     onClick={() => intref.current.focus()}
     >
        <FaPlus

        />
         
     
     
      </button>

      </form>
  )
}
