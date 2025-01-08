import React from 'react'
import TopicBox from '../Components/TopicBox'
import Content from '../Components/Content'
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <h1>Home Page</h1>
        <Link to="/About">about...</Link><br/>
        <Link to="/Contact">contact...</Link>
        
    </div>
  )
}
