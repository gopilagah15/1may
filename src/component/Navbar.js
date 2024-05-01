import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  let Navigate = useNavigate();
  const logout =()=>{
    localStorage.removeItem('token');
    Navigate('/login')
  }
  return (
    <div className='navcolor'>
      
      <nav className="navbar navbar-expand-lg bg-navcolor text-white ">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"> <a className="nav-link active" aria-current="page" href="/home">Home</a>  </li>
        <li className="nav-item">  <a className="nav-link" href="/about">About</a> </li> 
      </ul> 
      
    </div>
    
    {!localStorage.getItem('token')?<form action="">
    <Link className="btn btn-primary" to="login" role="button">Login</Link>
    <Link className="btn btn-primary" to="signup" role="button">Signup</Link>
    </form>: <button className="btn btn1" onClick={logout}>Logout</button>
}
  </div>
</nav>

    </div>
  )
}

export default Navbar
