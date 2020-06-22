import React from "react"
import {Helmet} from "react-helmet";
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

//Course images
import pyramid from '../images/courses/pyramid.png';
import pformance from '../images/courses/performance.png';
import intervals from '../images/courses/intervals.png';
import toned from '../images/courses/toned.png';
import charles_race from '../images/courses/charles_race.png';
import hiit_series from '../images/courses/hiit_series.png';
import kafue_river from '../images/courses/kafue_river.png';
import shred_burn_series from '../images/courses/shred_burn_series.png';

//Avatar images
import avatar_32 from '../images/courses/Trainer/Avatar_32.png';
import avatar_performance from '../images/courses/Trainer/performance-avatar.png';
import avatar_intrevals from '../images/courses/Trainer/avatar_intrevals.png';
import avatar_toned from '../images/courses/Trainer/avatar_toned.png';
import avatar_charles_race from '../images/courses/Trainer/avatar_charles_race.png';
import avatar_hiit_series from '../images/courses/Trainer/avatar_hiit_series.png';
import avatar_kafue_river from '../images/courses/Trainer/avatar_kafue_river.png';
import avatar_shred_burn_series from '../images/courses/Trainer/avatar_shred_burn_series.png';

//icons
import time from '../images/courses/icons/icn_timer_line.png';
import distance from '../images/courses/icons/icn_distance_line.png';
import playlist from '../images/courses/icons/icn_playlist.svg';


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="hero flex">
      <div className="tagline">
        <h1>The best personal training, right in your own home</h1>
        <a className="button" href="#">Join iFIT Coach</a>
      </div>
    </div>
    
    <div className="reviews flex">
      <img className="arrow left" src={left} alt="previous review" />
      <img className="arrow right" src={right} alt="next review" />
      <div className="flex empty"></div>
      <div className="flex">
        <img src={gearjunkie} alt="GearJunkie logo" />
        <q>You focus on putting in the work, and the technology handles the rest.</q>
      </div>
      <div className="flex">
        <img src={wired} alt="GearJunkie logo" />
        <q>Literally transports you from home to wherever you choose to run.</q>
      </div>
      <div className="flex">
        <img src={mashable} alt="GearJunkie logo" />
        <q>Breathes new life into a tired, old running routine.</q>
      </div>
      <div className="empty flex"></div>
    </div>
    
    <div className="courses flex">
      
      {/* Course */}
      <div className="course">
        <img src={pyramid} alt="course image" />
        <div className="details">
          <div className="flex">
            <h3>Lake Inniscarra, Ireland- Pyramid</h3>
            <img src={avatar_32} className="thumbnail" />
          </div>
          <span className="time"><img src={time} /> 30:53</span>
          <span className="distance"><img src={distance} /> 6,248 M</span>
          <a href="#">View Details</a>
        </div>
      </div>
      
      {/* Course with overlay */}
      <div className="course">
        <div className="overlay">
          <img src={pformance} alt="course image" />
          <div className="overlay-content flex">
            <span className="workout-number">9</span>
            <span>Workouts</span>
            <img src={playlist} />
          </div>
        </div>
        <div className="details">
          <div className="flex">
            <h3>Performance Series</h3>
            <img src={avatar_performance} className="thumbnail" />
          </div>
          <a href="#">View Details</a>
        </div>
      </div>
      
      {/* Course */}
      <div className="course">
        <img src={intervals} alt="course image" />
        <div className="details">
          <div className="flex">
            <h3>Slow Pulls and Fast Intervals</h3>
            <img src={avatar_intrevals} className="thumbnail" />
          </div>
          <span className="time"><img src={time} /> 44:13</span>
          <span className="distance"><img src={distance} /> 9,948 M</span>
          <a href="#">View Details</a>
        </div>
      </div>
      
      {/* Course with overlay */}
      <div className="course">
        <div className="overlay">
          <img src={toned} alt="course image" />
          <div className="overlay-content flex">
            <span className="workout-number">12</span>
            <span>Workouts</span>
            <img src={playlist} />
          </div>
        </div>
        <div className="details">
          <div className="flex">
            <h3>20 Minutes to Toned</h3>
            <img src={avatar_toned} className="thumbnail" />
          </div>
          <a href="#">View Details</a>
        </div>
      </div>
      
      {/* Course */}
      <div className="course">
        <img src={charles_race} alt="course image" />
        <div className="details">
          <div className="flex">
            <h3>Charles Race, Boston, Massachusetts</h3>
            <img src={avatar_charles_race} className="thumbnail" />
          </div>
          <span className="time"><img src={time} /> 36:22</span>
          <span className="distance"><img src={distance} /> 8,648 M</span>
          <a href="#">View Details</a>
        </div>
      </div>
      
      {/* Course with overlay */}
      <div className="course">
        <div className="overlay">
          <img src={hiit_series} alt="course image" />
          <div className="overlay-content flex">
            <span className="workout-number">12</span>
            <span>Workouts</span>
            <img src={playlist} />
          </div>
        </div>
        <div className="details">
          <div className="flex">
            <h3>Full-Body HIIT Series</h3>
            <img src={avatar_hiit_series} className="thumbnail" />
          </div>
          <a href="#">View Details</a>
        </div>
      </div>
      
      {/* Course */}
      <div className="course">
        <img src={kafue_river} alt="course image" />
        <div className="details">
          <div className="flex">
            <h3>Kafue River, Zambia—Power Stroke Pyramid</h3>
            <img src={avatar_kafue_river} className="thumbnail" />
          </div>
          <span className="time"><img src={time} /> 22:22</span>
          <span className="distance"><img src={distance} /> 4,660 M</span>
          <a href="#">View Details</a>
        </div>
      </div>
      
      {/* Course with overlay */}
      <div className="course">
        <div className="overlay">
          <img src={shred_burn_series} alt="course image" />
          <div className="overlay-content flex">
            <span className="workout-number">16</span>
            <span>Workouts</span>
            <img src={playlist} />
          </div>
        </div>
        <div className="details">
          <div className="flex">
            <h3>Shred &amp; Burn Series</h3>
            <img src={avatar_shred_burn_series} className="thumbnail" />
          </div>
          <a href="#">View Details</a>
        </div>
      </div>
      
    </div>
    
    <h2 className="equipment-heading">Interested in our exciting iFit-enableed equipment?</h2>
    <div className="equipment flex">
      <div className="treadmills">
        <img src={treadmill} alt="treadmill" />
        <h3>Treadmills</h3>
      </div>
      
      <div className="bikes">
        <img src={bike} alt="bike person" />
        <h3>Bikes</h3>
      </div>
      
      <div className="elliptical">
        <img src={elliptical} alt="elliptical person" />
        <h3>Ellipticals</h3>
      </div>
      
      <div className="strength">
        <img src={strength} alt="strength person" />
        <h3>Strength</h3>
      </div>
    </div>
    
  </Layout>
)

export default IndexPage
