import React from 'react'
import {  useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'

function Profile() {
  const Navigate=useNavigate();
  return (
    <div>
      <h1>Profile</h1>
      <Button onClick={()=> Navigate(-1)}>
        Back
      </Button>
    </div>
  )
}

export default Profile
