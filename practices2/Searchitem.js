
import React from 'react'

const Searchitem = ({search,searchitem}) => {
  return (
    <form action="" onSubmit={(e)=> e}>
        <label htmlFor="search"> Search</label>
        <input type="text"
         id='search' 
         placeholder='searching'
         role='searchbox'
         value={search}
         onChange={(e) => searchitem(e.target.value)}
        />
      

    </form>
  )
}

export default Searchitem