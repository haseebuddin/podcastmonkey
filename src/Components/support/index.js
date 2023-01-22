import React from "react";
import { Nav } from "react-bootstrap";
import c1 from "../../Images/transition.png";

import c2 from "../../Images/cc.png";
import c3 from "../../Images/call.png";
const index = () => {
  const Items = [
    "✓ Consultation & Planning",
    "✓ Stunning Cover Artwork",
    "✓ Intro with Music",
    "✓ Podcast Equipment Selection",
    "✓ Pick your launch date",
  ];

  const Items1 = [
    "✓ Pre-recording setup & test",
    "✓ First 4 episodes recorded & edited",
    "✓ Podcast Host Setup ",
    "✓ Trailer Episode",
    "✓ SEO & Descriptive Show Notes",
  ];
  const Items2 = [
    "✓  Podcast Submitted to Directories (Spotify, Apple, Google)",
    "✓  Launch with up to 4 episodes",
    "✓   Promote on social media & more",
  ];
  return (
    <div  id="">
      <div  style={{marginTop:"-21px"}} className="container text-center Getneed">
        <h1>
          Get The
          <span className="theme-primary-color">
            <b> Support </b>
          </span>
          You Need <br />
          For Your{" "}
          <span className="theme-primary-color">
            <b>Podcast</b>
          </span>
        </h1>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4 support-Card">
          <div className="img-shade">

            <img src={c3} alt="" width="45px" />
          </div>
            <h4 className=""><b>Step 1: Pre-Launch</b></h4>
            {Items.map((i) => {
              return <p className="text-gray">{i}</p>;
            })}
          </div>
          <div className="col-md-4 support-Card">
            
          <div className="img-shade">

            <img src={c2} alt="" width="45px" />
          </div>
            <h4 ><b>Step 2: Production</b></h4>
            {Items1.map((i) => {
              return <p className="text-gray">{i}</p>;
            })}
          </div>
          <div className="col-md-4 support-Card">
            
          <div className="img-shade">

            <img src={c1} alt="" width="45px" />
          </div>
            <h4 className=""><b>Step 3: Launch & Promote</b></h4>
            {Items2.map((i) => {
              return <p className="text-gray">{i}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
