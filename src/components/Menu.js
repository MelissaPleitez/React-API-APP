import React from 'react'


const menu = ({brand}) => {
  return (
    <nav className="navbar navbar-light card-style-2 py-3  card-style" >
    <div className="container-fluid justify-content-center">
   
    <a href="/" className="navbar-brand text-uppercase text-white fw-bold">
    {brand}
    <span><i className="bi bi-amd text-black mx-2"></i> </span>
   </a>
   </div>
    </nav>
  )
}

export default menu