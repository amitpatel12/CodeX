import React, { useState } from "react";
import "./Navbar.css";
import '../Dashboard/Dashboard.css'
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({savebtn,setSavebtn}) => {
  const navigate = useNavigate()
  const userId = JSON.parse(localStorage.getItem('user'))._id
  // console.log(userId)

  const handleSave = async () => {
    let data = await fetch(`http://localhost:4000/code/${userId}`,{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({html:localStorage.getItem('code-html'),css:localStorage.getItem('code-css'),js:localStorage.getItem('html-js')})
    })
    data = await data.json()
    // console.log(data)
    setSavebtn(false);
    navigate('/dashboard');
  }
  // console.log(navigate.pathname)
  console.log((window.location.href).includes('/editor'))

  const handleLogout = () => {
    localStorage.clear();
  }
  return (
    <div className="navbar">
      <div className="left">
        <h2>CodeX</h2>
      </div>
      <div className="right">
        <ul>
          <li><Link to='/dashboard'>Dashboard</Link></li>
          <li>Mode</li>
          {
            savebtn && <li><button className="savebtn" onClick={handleSave}>Save Code</button></li>
          }
          
          <li>
            <div className="dropdown">
              <button className="dropbtnround">A</button>
              <div className="dropdown-content">
                {/* <a href="#">Account</a> */}
                <Link to='/account'>Account</Link>
                <a href="#">Setting</a>
                {/* <a href="#">LogOut</a> */}
                {/* <div>LogOut</div> */}
                <Link to='/' onClick={handleLogout}>logout</Link>
              </div>
            </div>
            </li>
         
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
