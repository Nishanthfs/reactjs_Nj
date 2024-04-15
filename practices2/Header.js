import React from "react"

const Header=({title})=>{
    const webstyle={
        background:"black",
        color:"blue",
        font:"italic"

    }
    return(
        <header style={webstyle}>
        <div>Header {title}</div>
        </header>
    )
}
Header.defaultProps = {
    title: "list"
   

    
}

export default Header
