import PropTypes from "prop-types"
import React from "react"
import youtube from '../images/youtube.png';
import pinterest from '../images/pinterest.png'; 
import facebook from '../images/facebook.png'; 
import twitter from '../images/twitter.png'; 
import instagram from '../images/instagram.png'; 

const Footer = ({ siteTitle }) => (
  <footer>
    <div class="footer-nav flex">
      <ul class="company">
        <li><h3>Company</h3></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Careers</a></li>
      </ul>
      
      <ul class="account">
        <li><h3>Account</h3></li>
        <li><a href="#">Log In</a></li>
        <li><a href="#">Create Account</a></li>
      </ul>
      
      <ul class="support">
        <li><h3>Support</h3></li>
        <li><a href="#">Help Center</a></li>
        <li><a href="#">Accessibility</a></li>
      </ul>
    </div>
    
    <div class="social-links flex">
      <a href="#"><img src={youtube} class="youtube-logo" alt="youtube logo" /></a>
      <a href="#"><img src={pinterest} class="pinterest-logo" alt="pinterest logo" /></a>
      <a href="#"><img src={facebook} class="facebook-logo" alt="facebook logo" /></a>
      <a href="#"><img src={twitter} class="twitter-logo" alt="twitter logo" /></a>
      <a href="#"><img src={instagram} class="instagram-logo" alt="instagram logo" /></a>
    </div>
    <div class="copyright flex">
      <select class="custom-select">
        <option>English</option>
        <option>Français</option>
        <option>Español</option>
      </select>
      <div class="flex">
        <p>&#169; iFit.com. All Rights Reserved.</p>
        <p><a href="#">Privacy Policy</a></p>
        <p><a href="#">Terms of Use</a></p>
      </div>
    </div>
  </footer>
)

export default Footer
