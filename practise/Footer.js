import React from 'react'


const Footer = () => { 
const year=new Date() 
const date=new Date()
const month=new Date()
  return (
   <div> Show the {date.getDate()} /{month.getMonth()}/{year.getFullYear()}</div> 
   )
}

export default Footer