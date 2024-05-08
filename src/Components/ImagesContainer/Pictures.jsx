import React from 'react'
import './Pictures.css'
import First from '../../Assets/Frame 48095863.jpg'
import Second from '../../Assets/Frame 48095864.jpg'
import Third from '../../Assets/Frame 48095865.jpg'


const Pictures = () => {
  return (
    <div class="container">
<img src={First} alt="first"/>
<img src={Second} alt="second"/>
<img src={Third} alt="third"/>
    </div>
  )
}

export default Pictures