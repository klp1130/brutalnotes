import React from 'react'

const headerStyle = {
    backgroundColor: "#8994f8",
    margin: "50px auto",
    maxWidth: "500px",
    padding: "1rem, 2rem, 1rem 5rem",
    stroke: "2px #000000",
    backgroundSize: "100% 3rem"
  }
const title= {
    position: "center",
    color: "#f7cb46",
    fontWeight: "bolder",
    fontFamily: "helvetica neue",
    boxShadow: "1rem 1rem #000000",
    padding: "2rem, 2rem, 2rem 5rem",
    margin: "50px auto",
    textAlign: "center"
  }
  
const Header = () => {
  return (
    <div style={headerStyle}>
        <h1 style={title}>Brutal Notes</h1>
    
    </div>

  )
}

export default Header