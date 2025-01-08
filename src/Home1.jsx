import { Button } from 'react-bootstrap'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const Navigate=useNavigate();
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/profile">Go to Profile Page</Link>   <br/>
      <Link to="/about">Go to About Page</Link>   <br/>

      <Button onClick={()=> Navigate("/profile")}>
        Profile
      </Button>
    </div>
  )
}

export default Home
