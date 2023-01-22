import React from 'react'
import { Nav } from 'react-bootstrap'
import female from "../../Images/female2.png";

const index = ({imgMic,title}) => {
  return (
    <div>
           <div className="container-fluid">
            <div className="row large-audience ">
              <div className="carousel2 col-md-5 woman-img spacing">
                {imgMic?
                <img width={700} src={imgMic} alt="" />
                
                :
                <img width={700} src={female} alt="" />
                }
              </div>
              <div id="intro-div" className="col-md-6 " style={{transform:"scale(0.8)",marginTop:"30px"}}>
                <div className=" trst-txt-div3 spacing">
                {title? 
                
                  <p style={{fontSize:"20px !important"}}>
                   {/* {title}
                    <span className="theme-primary-color">
                      LARGER AUDIENCE
                    </span> */}
                  </p>
                   :
                   null
              }
                 <h3>
                    Introducing the
                    <br></br>
                    new way for
                    <br></br>
                    <span className="theme-primary-color">podcasters</span> to
                    get their shows edited
                  </h3>
                  <p>
                    Hire your own personal editor & say goodbye to headache of
                    editing. They will handle the technical side of your audio
                    or video podcasts, optimizing it for your hosting platforms.
                    They'll even do the uploading for you!
                  </p>
                </div>
              </div>
              <div className="col-md-1"></div>
            </div>
          </div>
    </div>
  )
}

export default index