import React from 'react'
import { useState } from 'react'

const Continu = () => {


  const [countn,set]=useState(11)
  
  
  const increment=()=>{
    set(countn+1)
  }
  function decrement() {
    set(countn-1)

  }
  

    
        // const handlevent=(e)=>{
        //     console.log("thank you for great full work",e)

        // }
        // const handlefunction=( name)=>{
        //   console.log("than for good work",name)

        // }

    

  return ( 
    <div> 
    <button  onClick={increment}>+</button>
    <span>{countn}</span>
    <button onClick={decrement}>-</button>
    </div>
    // <div>
    //     <p onDoubleClick={()=>handlefunction("Spark")}> lets going the page</p>
    //      <p>{"welcome"}</p>
    //      <button onClick={()=>handlevent("Nishanth")}>click</button>
    //  </div> 
  )
}

export default Continu