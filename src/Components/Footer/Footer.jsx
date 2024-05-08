import React from 'react'
import './Footer.css'
import logo from '../../Assets/Frame 1000007996.png'

const Footer = () => {
  return (
    <div class="footer">
<div class="left">
<h1> Say hi</h1>
<div class="logos">
<p>X</p>
<span>Instagram</span>
<span>LinkedIn</span>
<span>Behance</span>
</div>
</div>


      <div class="products">
<div class="pa">
  <h2>Product</h2>
  <div class="sub">
    <p>Jobs</p>
    <p>Portfolios</p>
    <p>Messaging</p>
    <p>Give me Gigs</p>

  </div>
</div>
  <div class="pa">
  <h2>About Us</h2>
  <div class="sub">
    <p>Company Policy</p>
    <p>Customer Crae</p>
    <p>+234 8143317161</p>
    

  </div>
</div>
      <div class="imagery">
        <img src={logo} alt=""/>
      </div>
    </div>
    </div>
  )
}

export default Footer