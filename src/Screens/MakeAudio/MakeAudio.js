import React, { useEffect, useState } from "react";
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
import audio from "../../Images/AudioPlayer.png";
import a1 from "../../Images/a1.png";
import a2 from "../../Images/a2.png";
import a3 from "../../Images/a3.png";
import imgMic from "../../Images/imgmic.png";

import Layout from "../../Layouts/Layout";
import MultiItemCard from "../../Components/Carousels/MultiItemCard";
import "./MakeAudio.css";
import "../../App.css";
// import "./responsive.css";

const MV = () => {

  return (
    <Layout>
      <div id="main" className="MV">
    
        <div className="MV-section1VM">
          <Titlebar para ="a" autot="Make Your" autot1="Audio Podcast"/>
        </div>
        <div id="imgaudio"className="ved-sec" style={{transform:"scale(0.8)",marginBottom:"-230px"}}>
          <img src={audio} />
        </div>
        <div className="MV-section3">
          <div className="trans" >
            <Intro    title="REACH A" imgMic={imgMic}/>  
            <div style={{marginTop:"-100px",marginBottom:"-100px"}} className="container-fluid third-carousel">
              <Work/>
              <div className="col-md-12">
                <MultiItemCarouselsceneMK a1={a1} a2={a2} a3={a3} />
              </div>
            </div>
          
            <div   id="taglist" className="container">
              <Taglist />
            </div>
          </div>
          <section className="bgcolor-div" >
            <Nav id="btndiv" className="justify-content-center main-button">
              <Nav.Link
                className="getStartedButton theme-primary text-white"
                href="#getstarted"
              >
                What's include with Video Podcast editing
              </Nav.Link>
            </Nav>
            <div style={{marginTop:"-90px"}}>
              
            <MultiItemCard />
            </div>
            <Comunication />
          </section>
          {/* <Videos /> */}
        </div>
        <div id="pwdiv" style={{marginTop:"10rem"}}>

        <ProcessWork />
        </div>
        <div style={{paddingBottom:"-10rem"}}>

        <Contracts />
        </ div>
        <div style={{marginBottom:"-7rem"}}>

        <Intro2 />
        </div>
      </div>
    </Layout>
  );
};

export default MV;
