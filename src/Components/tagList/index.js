import React from 'react'
import { Nav } from 'react-bootstrap'
import female from "../../Images/female2.png";

const index = () => {
  return (
    <div id="taglistdiv">
           <div className="txt-div3 ">
              <h4 className="text-center headingpara">
                <b>
                  We have helped many business types to achieve their needs:
                </b>
              </h4>
              <div className="container text-center headings">
                <span className="para-heading ">Ads</span>
                <span className="para-heading ">Beauty & Fashion</span>
                <span className="para-heading ">Business & Marketing</span>
                <span className="para-heading ">Coaching & Education</span>
                <span className="para-heading ">Entertainment</span>
                <span className="para-heading ">Finance</span>
                <span className="para-heading ">Lifestyle</span>
                <span className="para-heading ">Health & Wellness</span>
              </div>
              <div className="container text-center headings">
                <span className="para-heading ">Real Estate</span>
                <span className="para-heading ">Tiktok & Reel</span>
                <span className="para-heading ">Youtube</span>
              </div>
            </div>
    </div>
  )
}

export default index