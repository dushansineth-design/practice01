import React from 'react'
import {Link} from 'react-router-dom'

export default function About() {
  return (
    <div>
      <h1>This is About Page</h1>
      <Link to="/">Home</Link>  <br/>
      <Link to="/Contact">Contact</Link>
    </div>
  )
}
