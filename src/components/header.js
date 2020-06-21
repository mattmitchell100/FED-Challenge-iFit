import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from '../images/logos/ifit-coach-logo.svg'; 

const Header = ({ siteTitle }) => (
  <header>
    <div class="secondary-nav flex">
      <nav>
        <ul>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Nourish</a></li>
          <li><a href="#">Shop</a></li>
        </ul>
      </nav>
    </div>
    <div class="primary-nav flex">
        <Link to="/">
          <img src={logo} class="logo" alt="iFIT Coach logo" />
        </Link>
        <nav>
          <ul>
            <li><a href="#">Exercise</a></li>
            <li><a href="#">Nutrition</a></li>
            <li><a href="#">Activity</a></li>
            <li><a href="#">Sleep</a></li>
          </ul>
        </nav>
        <a href="#" class="button">Sign Up</a>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
