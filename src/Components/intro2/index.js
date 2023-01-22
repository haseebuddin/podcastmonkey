import React from 'react'
import { Nav } from 'react-bootstrap'
import female1 from "../../Images/female.png";


const index = () => {
  return (
    <div>
        <div className="MV-section3">
          <div className="container-fluid">
            <div className="col-md-11 justify-content-center  row large-audience">
              <div id='intro2' className="col-md-4 " style={{marginTop:"80px",transform:"scale(0.85)"}}>
                <div className=" trst-txt-div3 spacing">
               
                  <h3>
                    Freedom to
                    <br></br>
                    <span className="theme-primary-color">Podcast. 🎙️</span>
                    <br></br>
                    Let Us Be <br></br>
                    Your Sidekick.
                  </h3>
                  <div className="btn-div2 d-flex justify-content-center">
                    <Nav className="justify-content-center main-button">
                      <Nav.Link
                        className="getStartedButton theme-primary text-white"
                        href="#getstarted"
                      >
                        Schedule a Call
                      </Nav.Link>
                    </Nav>
                    <Nav className=" justify-content-center main-button">
                      <Nav.Link
                        className="getStartedButton  text-black "
                        href="#getstarted"
                      >
                       Choose a Plan
                      </Nav.Link>
                    </Nav>
                  </div>
                </div>
              </div>
              <div className="carousel2 col-md-5 woman-img spacing mbwoman">
                <img width={800} src={female1} alt="" />
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default index