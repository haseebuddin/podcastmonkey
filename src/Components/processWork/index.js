import React from "react";
import { Nav } from "react-bootstrap";
import VideoThumbnail from "react-thumbnail-player";
import female from "../../Images/female2.png";
import h1 from "../../Images/h1.png";
import h2 from "../../Images/h2.png";
import h3 from "../../Images/h3.png";
import h4 from "../../Images/h4.png";
const index = () => {
  return (
    <div>
      <div className="MV-section2">
        <div className="container">
          <div className="row">
            <div className="txt-div2">
              <h4 className="text-center theme-primary-color">Process</h4>
              <h1 className="text-center">
                <b>

                How It   <span className="theme-primary-color">Works</span>
                </b>
              </h1>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <section className="processCont">
        <div className="container hwdCont">
          <div className="col-md-3 hDICard">
            <div className="imageTag text-center">
              <img src={h1} width="70px" />
              <h4 id="textColorb" className="text-white">
                Send us your
                <br></br> files
              </h4>
              <p id="textColorb" className="text-white">
                Send us your footage, audio &
                <b />
                editing instructions.
              </p>
            </div>
          </div>

          <div className="col-md-3 hDICard2">
            <div className="imageTag2 text-center">
              <img src={h2} height="75px" />
              <h4 id="textColorb" className="text-white">
                Get your first draft in<br></br> 1-3 business days{" "}
              </h4>
              <p id="textColorb" className="text-white">
                Your designated editor will
                <br />
                craft your edit to match your <br />
                podcast
              </p>
            </div>
          </div>

          <div className="col-md-3 hDICard3">
            <div className="imageTag text-center">
              <img src={h3} width="75px" height="80px" />
              <h4 id="textColorb" className="text-white">
                Unlimited
                <br></br> Revisions
              </h4>
              <p id="textColorb" className="text-white">
                Share any feedback with your
                <br /> editor to make it perfect
              </p>
            </div>
          </div>

          <div className="col-md-3 hDICard">
            <div className="imageTag text-center">
              <img src={h4} width="70px" />
              <h4 id="textColorb" className="text-white">
              Start your next 
 <br></br> episode
              </h4>
              <p id="textColorb" className="text-white">
              Start the process over & send us <br/>
              your next editing requests :)
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default index;
