import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { auth } from "./../firebase";

const Header = (props) => {
  const isAuthenticated = props.auth ? true:false;

  const navigate = useNavigate();

  const handleLogout=()=>{
    auth.signOut().then(()=>{
      navigate("/login")
    })
   }

  return (
<React.Fragment>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About </Link>
      
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/contact">contact </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/feedback">Feedback </Link>
        </li>
       <li className="nav-item">
          <Link className="nav-link" to="/Login">Login </Link>
        </li>
       <li className="nav-item">
          <Link className="nav-link" to="/register">Register </Link>
        </li>
        

        <li className="nav-item">
          <Link className="nav-link" onClick={handleLogout}>Logout </Link>
        </li>

        <h2 style={{marginLeft:"50px"}}>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2>

       
        {/* <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li> */}
        <li className="nav-item dropdown">
          {/* <a className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a> */}
          {/* <ul className="dropdown-menu">
            <li><a className="dropdown-item" to="#">Action</a></li>
            <li><a className="dropdown-item" to="#">Another action</a></li>
            <li><a className="dropdown-item" to="#">Something else here</a></li>
          </ul> */}
        </li>
        {/* <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li> */}
       
      </ul>
   
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</React.Fragment>

  )
}

export default Header
