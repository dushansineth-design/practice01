import React from 'react'
import TopicBox from '../Components/TopicBox'
import Content from '../Components/Content'

export default function Home() {
  return (
    <div>
        <h1>Home Page</h1>
      <TopicBox page="Page o1" version="v.1">
        <span>This is the description</span>
      </TopicBox>
      <TopicBox page="Page o2" version="v.2">
        <button>This is a button</button>
      </TopicBox>
      <TopicBox page="Page o3" version="v.3">
        <p>Hey guys. How are uuuu...</p>
      </TopicBox>
      
    </div>
  )
}
