import React from 'react'
import './create.css'
import iphone from '../../Assets/iPhone 15 Pro Portrait Mockup.png'

const Create = () => {
  return (
    <div  class="create">
     
      <div className='contains'>
     
        <div class="contents">
<h2 class="CN">Creative Networking</h2>
<p>Connecting Creative Professionals And Enabling</p>
      <p>Them to build their Professional Network,</p> 
      <p>Fostering Collaboration And Connections Within</p>
      <p>The Creative Community.</p>
       
        </div>
        <div class="contents">
<h2>Portolio Showcase</h2>
<p>Connecting Creative Professionals And Enabling</p>
      <p>Them to build their Professional Network,</p> 
      <p>Fostering Collaboration And Connections Within</p>
      <p>The Creative Community.</p>
    
        </div> 
        <div class="contents">
<h2>Job Discovery</h2>
<p>Connecting Creative Professionals And Enabling</p>
      <p>Them to build their Professional Network,</p> 
      <p>Fostering Collaboration And Connections Within</p>
      <p>The Creative Community.</p>
  
        </div>
      </div>
      <div class="iphone">
<img src={iphone} alt ="iphone"/>

    </div>
    </div>
  )
}

export default Create