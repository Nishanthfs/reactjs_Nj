import Header from "./Header";
import Footer from "./Footer";
import Continu from "./Continu";
import './App.css';
import { useState } from "react";
function App() {
  const [name,set]=useState() // allow an traking an statment and function ,generly refer the data or properties
   function reloadname() {
     const name=["error","debugging","verfied"]
     const st=Math.floor(Math.random()*5)
    return set(name[st])

  }
  return( 
    <div className="App">
      <Header/>
      <Footer/>
      <Continu/>
      <p>lets {name}</p>
      <button onClick={reloadname}> click</button>
    
    </div>
  
  );
  
  
 } 


export default App
