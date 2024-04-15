import React from 'react'
import { Listi } from './Listi'


const Continu =({items,ChangeEvent,handle}) => {
    



  // const [countn,set]=useState(11)
  
  
  // const increment=()=>{
  //   set(countn+1)
  // }
  // function decrement() {
  //   set(countn-1)

  // }
  

    
        // const handlevent=(e)=>{
        //     console.log("thank you for great full work",e)

        // }
        // const handlefunction=( name)=>{
        //   console.log("than for good work",name)

        // }

    

  return ( 
    <main>
      {(items.length)?(
      <Listi
        items={items}
        ChangeEvent={ChangeEvent}
        handle={handle}
     />
      
      ):(
        <p>your list is removed</p>
      )
      }     
    </main>    // <div> 
    // <button  onClick={increment}>+</button>
    // <span>{countn}</span>
    // <button onClick={decrement}>-</button>
    // </div>
    // <div>
    //     <p onDoubleClick={()=>handlefunction("Spark")}> lets going the page</p>
    //      <p>{"welcome"}</p>
    //      <button onClick={()=>handlevent("Nishanth")}>click</button>
    //  </div> 
  )
}

export default Continu