import React from 'react'
import QuoraBox from './QuoraBox'
import "./css/feed.css"
import Post from './Post'

function Feed() {
  return (
    <div className='feed'>
      <QuoraBox/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  )
}

export default Feed
