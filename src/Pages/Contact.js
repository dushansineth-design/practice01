import React from 'react'
import {Link} from 'react-router-dom'

export default function Contact() {
  return (
    <div>
      <h1>This is Contact us Page</h1>
      <Link to="/">Home</Link> <br/>
      <Link to="/About">About</Link>
    </div>
  )
}
