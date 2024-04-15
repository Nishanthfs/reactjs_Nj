import Header from "./Header";
import Footer from "./Footer";
import Continu from "./Continu";
import { useEffect, useState } from 'react'
import './App.css';
import { Control } from "./Control";
import Searchitem from "./Searchitem";
import apireqest from "./Apirequest";


function App() {

   
   const API_URL= 'http://localhost:3500/items'
    const [items,setitem]=useState([])
   
  
    const [newitem, newsetitem]=useState("")
    const [search,searchitem]=useState("")
    useEffect( ()=>{
      const fetching = async()=>{
        try{
          const responce=await fetch(API_URL)
          
          console.log(responce)
          const listitem=await responce.json()
          console.log(listitem)
          setitem(listitem)
        }catch(error){
          console.log(error.Message)
        }





      }
      (async()=> await fetching())()
        
      
    //  JSON.parse(localStorage.getItem("list"))
    },[])

    
    const additem= async(item)=>{
      const id=items.length ? items[items.length - 1].id +1: 1;
      const newadditem={id, Checked:false, item}
      const changelist=[...items,newadditem]
      setitem(changelist)
    
      const Postobject = {
          method:'POST',
          headers:{
          'Content-Type':'application/json'},
          body: JSON.stringify(newadditem)
          

      }
      const result= await apireqest(API_URL,Postobject)
      if(result){
        console.log("error")
      }
 

      
    }
    const ChangeEvent= async(id)=>{
      // console.log("helo")
      const changelist= items.map((item) => item.id===id ?{...item,Checked:!item.Checked}:item)
       setitem(changelist)

      const myitem=changelist.filter((item)=>item.id===id)
        const checkobject = {
         method:'PATCH',
         headers:{
           'Content-Type':'application/json'},
            body:JSON.stringify({Checked:myitem[0].Checked})
        

     }
    const rqurl=`${API_URL}/${id}`
      const result= await apireqest(rqurl,checkobject)
     if(result){
       console.log("error")
     }
        localStorage.setItem("list",JSON.stringify(changelist))
  
    }
    const handle= async(id)=>{
      const changelist=items.filter((item) => item.id!==id)
      setitem(changelist)
       const deleteoption={method:"DELETE"}
       const rqurl=`${API_URL}/${id}`
       const result= await apireqest(rqurl,deleteoption)
        console.log(result)

     
    }
 
    const handlsubmit=(e)=>
    {
      e.preventDefault()
      if (!newitem)return;
      console.log(newitem)
      additem(newitem)
      newsetitem("")

     }
  // const [name,set]=useState() // allow an traking an statment and function ,generly refer the data or properties
  //  function reloadname() {
  //    const name=["error","debugging","verfied"]
  //    const st=Math.floor(Math.random()*5)
  //   return set(name[st])

  // }
  return( 
    <div className="App">
      <Header/>
      <Control
      newitem={newitem}
      newsetitem={newsetitem}
      handlsubmit={handlsubmit}
      />
      < Searchitem
      search={search}
      searchitem={searchitem}
      />
      <Footer length ={items.length}/> {/*// you will dont declare the extraspace // */}
      <Continu 
         items={items.filter(item =>(item.item).includes(search))}
         ChangeEvent={ChangeEvent}
         handle={handle}
      />
     
    </div>
  
  );
  
  
 } 


export default App
 