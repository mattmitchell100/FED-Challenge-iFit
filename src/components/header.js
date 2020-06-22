import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Helmet } from "react-helmet"
import logo from '../images/logos/ifit-coach-logo.svg'; 


const Header = ({ siteTitle }) => (
  <header id="header">
    <Helmet>
      <script src="http://localhost:8000/src/components/display.js" type="text/javascript" />
    </Helmet>
    <div className="secondary-nav flex">
      <nav>
        <ul>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Nourish</a></li>
          <li><a href="#">Shop</a></li>
        </ul>
      </nav>
    </div>
    <div className="primary-nav flex">
        <Link to="/">
          <img src={logo} className="logo" alt="iFIT Coach logo" />
        </Link>
        <nav>
          <ul>
            <li><a href="#">Exercise</a></li>
            <li><a href="#">Nutrition</a></li>
            <li><a href="#">Activity</a></li>
            <li><a href="#">Sleep</a></li>
          </ul>
        </nav>
        <a href="#" className="button">Sign Up</a>
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
