import React from 'react'


const Footer = ({length}) => { 
// const year=new Date() 
// const date=new Date()
// const month=new Date()
  return (
    
      <footer> {length}total {length ===1?("item"):("items")} </footer>
      
     

    
  
   )
}

export default Footer
 /* {/* <div> Show the {date.getDate()} /{month.getMonth()}/{year.getFullYear()}</div>  }* */