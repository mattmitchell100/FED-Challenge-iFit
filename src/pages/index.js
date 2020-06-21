import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import gearjunkie from '../images/logos/gear-junkie-logo.svg';
import wired from '../images/logos/wired-logo.svg';
import mashable from '../images/logos/mashable-logo.svg';

import left from '../images/slide_left_btn.png';
import right from '../images/slide_right_btn.png';

import treadmill from '../images/equipment/treadmill.png';
import bike from '../images/equipment/bikeperson.png';
import elliptical from '../images/equipment/ellipticalperson.png';
import strength from '../images/equipment/strength.png';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="hero flex">
      <div class="tagline">
        <h1>The best personal training, right in your own home</h1>
        <a class="button" href="#">Join iFIT Coach</a>
      </div>
    </div>
    
    <div class="reviews flex">
      <img class="arrow left" src={left} alt="previous review" />
      <img class="arrow right" src={right} alt="next review" />
      <div class="flex empty"></div>
      <div class="flex">
        <img src={gearjunkie} alt="GearJunkie logo" />
        <q>You focus on putting in the work, and the technology handles the rest.</q>
      </div>
      <div class="flex">
        <img src={wired} alt="GearJunkie logo" />
        <q>Literally transports you from home to wherever you choose to run.</q>
      </div>
      <div class="flex">
        <img src={mashable} alt="GearJunkie logo" />
        <q>Breathes new life into a tired, old running routine.</q>
      </div>
      <div class="empty flex"></div>
    </div>
    
    <h2 class="equipment-heading">Interested in our exciting iFit-enableed equipment?</h2>
    <div class="equipment flex">
      <div class="treadmills">
        <img src={treadmill} alt="treadmill" />
        <h3>Treadmills</h3>
      </div>
      
      <div class="bikes">
        <img src={bike} alt="bike person" />
        <h3>Bikes</h3>
      </div>
      
      <div class="elliptical">
        <img src={elliptical} alt="elliptical person" />
        <h3>Ellipticals</h3>
      </div>
      
      <div class="strength">
        <img src={strength} alt="strength person" />
        <h3>Strength</h3>
      </div>
    </div>
    
  </Layout>
)

export default IndexPage
