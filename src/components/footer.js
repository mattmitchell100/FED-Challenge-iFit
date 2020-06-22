import React from "react"
import youtube from '../images/youtube.png';
import pinterest from '../images/pinterest.png'; 
import facebook from '../images/facebook.png'; 
import twitter from '../images/twitter.png'; 
import instagram from '../images/instagram.png'; 

const Footer = ({ siteTitle }) => (
  <footer>
    <div className="footer-nav flex">
      <ul className="company">
        <li><h3>Company</h3></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Careers</a></li>
      </ul>
      
      <ul className="account">
        <li><h3>Account</h3></li>
        <li><a href="#">Log In</a></li>
        <li><a href="#">Create Account</a></li>
      </ul>
      
      <ul className="support">
        <li><h3>Support</h3></li>
        <li><a href="#">Help Center</a></li>
        <li><a href="#">Accessibility</a></li>
      </ul>
    </div>
    
    <div className="social-links flex">
      <a href="#"><img src={youtube} className="youtube-logo" alt="youtube logo" /></a>
      <a href="#"><img src={pinterest} className="pinterest-logo" alt="pinterest logo" /></a>
      <a href="#"><img src={facebook} className="facebook-logo" alt="facebook logo" /></a>
      <a href="#"><img src={twitter} className="twitter-logo" alt="twitter logo" /></a>
      <a href="#"><img src={instagram} className="instagram-logo" alt="instagram logo" /></a>
    </div>
    <div className="copyright flex">
      <select className="custom-select">
        <option>English</option>
        <option>Français</option>
        <option>Español</option>
      </select>
      <div className="flex">
        <p>&#169; iFit.com. All Rights Reserved.</p>
        <p><a href="#">Privacy Policy</a></p>
        <p><a href="#">Terms of Use</a></p>
      </div>
    </div>
  </footer>
)

export default Footer
