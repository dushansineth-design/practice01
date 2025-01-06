import React from 'react'
import './topicbox.css'

export default function TopicBox(props){
    return (
    <div>
      <div className="topicBox">
        <span class="text">Welcome to my React {props.page}. Version is {props.version}</span>
        {props.children}
      </div>
    </div>
  )
}
