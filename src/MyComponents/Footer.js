import React from 'react'

export const Footer = () => {
  let footerStyle ={
    marginTop: "20px",
    postion: "absolute",
    top: "100vh",
    width: "100%",
    border: "2px solid yellow",
    
  }
    
 
  return (
    <footer className="bg-dark text-light py-3" style=
    {footerStyle}>
      <p className="text-center">
      Copyright &copy; MyTodosList.com
      </p>
    </footer>
  )
}

export default Footer

