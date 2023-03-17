import React from 'react'
import slid1 from '../assets/slid2.jpg'

const About = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <img src={slid1} alt="" style={{marginTop:"10px"}} />
            <figcaption class="figure-caption">
               CEO OF WEBSITE
            </figcaption>
          </div>
          <div className="col-8">
            <h1>context</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default About


