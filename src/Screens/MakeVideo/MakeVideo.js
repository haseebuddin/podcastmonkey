import React from "react";
import Nav from "react-bootstrap/Nav";
import Titlebar from "../../Components/ttitlebar";
import Intro from "../../Components/intro";
import Work from "../../Components/work";
import Taglist from "../../Components/tagList";
import Comunication from "../../Components/comunication";
import Videos from "../../Components/videos";
import ProcessWork from "../../Components/processWork";
import Contracts from "../../Components/contracts";
import Intro2 from "../../Components/intro2";

import MultiItemCarouselsceneMK from "../../Components/Carousels/MultiItemCarouselsceneMK";

import scene from "../../Images/scene1.png";

import Layout from "../../Layouts/Layout";
import MultiItemCard from "../../Components/Carousels/MultiItemCard";

import "./MakeVideo.css";
import "../../App.css";

const MV = () => {
  return (
    <Layout>
      <div id="main"className="MV">
        <div className="MV-section1VM">
          <Titlebar Videot="Make Your Video Podcast" />
        </div>
        <div className="ved-sec1">
          <img src={scene} />
        </div>
        <div className="MV-section3">
          <div className="trans">
            <Intro />
            <div
              style={{ marginTop: "-30px" }}
              className="container-fluid third-carousel"
            >
              <Work />
              <div className="carousalb col-md-12">
                <MultiItemCarouselsceneMK />
              </div>
            </div>

            <div
            id="taglist"
              style={{ marginTop: "-100px", marginBottom: "0px" }}
              className="container"
            >
              <Taglist />
            </div>
          </div>
          <section  className="bgcolor-div">
            <div >

            <Nav id="btndiv" className="justify-content-center main-button">
              <Nav.Link
                className="getStartedButton theme-primary text-white"
                href="#getstarted"
                >
                What's include with Video Podcast editing
              </Nav.Link>
            </Nav>
                </div>
            <div style={{ marginTop: "-90px" }}>
              <MultiItemCard />
            </div>
            <Comunication />
          </section>
          <div id="vidcont">

          <Videos />
          </div>
          <div id="learn"style={{ marginTop: "-20px", marginBottom: "90px" }}>
            <Nav className="justify-content-center main-button">
              <Nav.Link
                className="getStartedButton theme-primary text-white"
                href="#getstarted"
              >
                Learn More
              </Nav.Link>
            </Nav>
          </div>
        </div>
        <ProcessWork />
        <div style={{ paddingBottom: "-10rem" }}>
          <Contracts />
        </div>
        <div style={{ marginBottom: "-7rem" }}>
          <Intro2 />
        </div>
      </div>
    </Layout>
  );
};

export default MV;
