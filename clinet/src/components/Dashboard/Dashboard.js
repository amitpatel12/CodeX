import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import photo  from './dummy.jpg'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link, } from "react-router-dom";

const Dashboard = ({setSavebtn}) => {
  const [projects, setProjects] = useState()

  const userId = JSON.parse(localStorage.getItem('user'))._id
  console.log(userId)

  const getProjects = async () => {
    let data = await fetch(`http://localhost:4000/code/${userId}`)
    data = await data.json()
    setProjects(data.result.code)
    console.log(projects)
  }

  useEffect(() => {
    getProjects()
  },[])

  const handleNewProject = () => {
    localStorage.removeItem('code-html')
    localStorage.removeItem('code-css')
    localStorage.removeItem('code-js')
    setSavebtn(true)
  }
  return (
    <div className="dashboard">
      <div className="title">Dashboard</div>
      <div className="dashboard-work">
        <div className="subtitle">Your Work</div>
        <Link to='/editor' onClick={handleNewProject}>Add New Project</Link>
      </div>
    
      <div className="dashboard-content">

        {
          projects && projects.map((project, index)=>{
            return (
              <div className="card" key={index}>
              <img src= {photo} alt="Avatar" />
              <div className="card-title">
                <h3>
                Project 1
                </h3>
                <div className="dropdown">
                  <button className="dropbtn"><MoreVertIcon size={60}/></button>
                  <div className="dropdown-content">
                    <Link to={`/show/${project._id}`}>Show</Link>
                    <Link>Edit</Link>
                    <Link>Delete</Link>
                  </div>
                </div>
              </div>
            </div>
            )
          })
        }

     


    </div>
    </div>
  );
};

export default Dashboard;
