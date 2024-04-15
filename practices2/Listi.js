import React from 'react'

import { FaTrashAlt } from "react-icons/fa"





export const Listi = ({items,ChangeEvent,handle}) => {
  return (
    
         <ul>
           {items.map((item) => (
              <li className='item' key={item.id}>
              <input type="checkbox"
               onChange={()=> ChangeEvent(item.id)}
               checked={item.Checked}
               />
              <label>{item.item}</label>
              < FaTrashAlt 
              role='button'
              onClick={()=> handle(item.id)}
              tabIndex="0"
              />
            
            </li>
          
         
          

           ))}
      </ul>
    
  )
}
