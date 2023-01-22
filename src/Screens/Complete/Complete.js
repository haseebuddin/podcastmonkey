import React from "react";
import Nav from "react-bootstrap/Nav";
import MultiItemCarousel from "../../Components/Carousels/MultiItemCarousel";
import MultiItemSideCarousel from "../../Components/Carousels/MultiItemSideCarousel";
import mic from "../../Images/mic.png";

// import thumbnail01 from "../../Images/thumbnail01.png";
import thumbnail01 from "../../Images/mov_bbb.mp4";
import { Player } from "react-tuby";
import "react-tuby/css/main.css";
import thumbnail02 from "../../Images/thumbnail02.png";
import thumbnail03 from "../../Images/thumbnail03.png";
import check from "../../Images/check.png";
import group from "../../Images/completegroup.png";
import logo from "../../Images/logo.png";



import "./Complete.css";
import "../../App.css";
import "./responsive.css";
import Layout from "../../Layouts/Layout";
import ProcessWork2 from "../../Components/processWork2";
import Contracts from "../../Components/contracts";
import Intro2 from "../../Components/intro2";
import Taglist from "../../Components/tagList";
import Videos from "../../Components/videos";
import Communication2 from "../../Components/comunication2";
import Support from "../../Components/support";

const Home = () => {
  const data1 = [
    " Minute Launch Plan & Podcast Goals Consultation",

    "30 Minute Equipment Selection & Recording Consultation",

    "Stunning Cover Artwork Created",

    "Podcast Host Setup",

    "4 Episodes Professionally Edited",

    "Show Notes with Resource Links & Timestamps",

    "Professional Show intro with Music  ",
  ];

  return (
    <Layout>
      <div className="home">
        <div className="home-section1">
          <div className="layer container text-center">
            <h1>
              Complete
              <br />
              Podcast Launch &{" "}
              <span className="theme-primary-color shadowColor"> Setup</span>
            </h1>
            <p className=" text-white " style={{lineHeight:"25px"}}>
              It's time to turn your podcast idea into reality with consultant
              <br /> support from planning to setup, recording & a powerful
              launch.
            </p>
            <div className="btn-div2 d-flex justify-content-center">
              <Nav className="justify-content-center main-button">
                <Nav.Link
                  className="getStartedButton theme-primary text-white"
                  href="#getstarted"
                >
                  GET STARTED
                </Nav.Link>
              </Nav>
              <Nav className=" justify-content-center main-button">
                <Nav.Link
                  className="border-white getStartedButton text-white"
                  href="#getstarted"
                >
                  SEE PRICING
                </Nav.Link>
              </Nav>
            </div>
          </div>
          <div
            className="d-flex justify-content-center"
            style={{ marginTop: "10rem" }}
          >
            <img src={group} width="60%" />
          </div>

          <div
            style={{ transform: "scale(0.7)" ,
            marginBottom: "230px"}}
            className="container-fluid d-flex  justify-content-center"
          >
            <div className="row  col-md-11 align-items-center">
              <div className="col-md-6 ">
                <div className="sheduleBox styleimg">
                  <div className=" text-center ">
                    <img src={logo} width="150px"/>
                    <h4>
                      <span className="theme-primary-color">
                        <b>Podcast Monkey</b>
                      </span>
                    </h4>
                    <h4>
                     <b>
                       VIP Call - Podcast Discovery
                      <br /> Consultation
                      </b>
                    </h4>
                  </div>
                  <span>Ⓒ 15 Min</span>
                  <div>
                    <p>
                      {" "}
                      Web conferencing details provided
                      <br />
                      upon confirmation
                    </p>
                    <p>
                  In our 10-15 min Zoom call we'll talk about your
                      podcasting
                      <br /> needs, how many episodes you need edited, the look
                      & feel <br />
                      of your show, social media ideas & how to ramp up your{" "}
                      <br />
                      podcast!
                    </p>
                    <p>
                <span className="theme-primary-color">  SHOW MORE</span>
                  </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 getitSection-cont1">
                <h1>
                  <b>
                    Ready to Launch
                    <br />
                    Your
                    <span className="theme-primary-color"> Podcast</span> in
                    <br />
                    Style?
                  </b>
                </h1>
                <h2>
                  Schedule a<span className="theme-primary-color"> 15</span>{" "}
                  minute call
                </h2>
                
                <p style={{marginTop:"50px"}}>
                  Our consulting experts will you help you every step of the way
                  from
                  <br /> choosing your mic & equipment, the format & style of
                  your show, cover
                  <br /> artwork, tips to stand out on social media and more.
                </p>
             
               
              </div>
            </div>
          </div>
        </div>
        <div id="getthe" style={{ background: "#F2EFFA" ,marginTop:"-200px"}}>
          <div  style={{ transform: "scale(0.8)" }}>
            <Support />
            <section>
              <div
                className="container"
                style={{ marginTop: "10rem", marginBottom: "20px" }}
              >
                <div className="container ">
                  <div className="txt-div save ">
                    <h2 className="text-center">
                      Save Money width our
                      <span className="theme-primary-color text-center">
                        {" "}
                        Launch
                      </span>{" "}
                      Package
                    </h2>
                  </div>
                  <div className="container d-flex justify-content-center">
                    <div className="col-md-7 Card12  ">
                      <div className="  text-center content1">
                        <h3 className="titlec text-center">
                          <h3>
                            <b> Podcaster Pro Launch</b>
                          </h3>
                        </h3>
                        <p>
                          The best way to launch your podcast in less than a
                          month
                        </p>
                        <h1>
                          <span className="theme-primary-color text-center">
                            <b>Includes</b>
                          </span>
                        </h1>
                        <hr />
                        <ul className="">
                          {data1.map((item) => {
                            return (
                              <div className="justify-content-center d-flex">
                                <img src={check} className="check1" />
                                <p>{item}</p>
                              </div>
                            );
                          })}
                        </ul>
<div style={{margin:"230px !important"}}>

                        <Nav  className="justify-content-center main-button paddingBtn">
                          <Nav.Link
                            className="getStartedButton theme-primary text-white"
                            href="#getstarted"
                            >
                            GET STARTED
                          </Nav.Link>
                        </Nav>
                            </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div>
          <Communication2 />
        </div>
        <Videos Vtitle="Hear What Our Families Say" />
        <div  className="home-section3">
          <div
            id="taglist" 
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "100px",
            }}
          >
            <Taglist />
          </div>
          <ProcessWork2 />
          <Contracts />
          <Intro2 />
     
          <section style={{transform:"scale(0.75)"}} className="request1">
            <div className="container">
              <div className="row col-md-11 sec-card3 purple-section">
                <div className="btn col-md-9 text-start">
                  <h3 className="text-white">
                    Everything You need
                    <br />
                    to know to start a<b>Podcast</b>
                  </h3>

                  <Nav className="main-button ">
                    <Nav.Link
                    id="everybtn"
                      className="getStartedButton theme-white text-purple"
                      href="#getstarted"
                    >
                      GET STARTED
                    </Nav.Link>
                  </Nav>
                </div>
                <div className="back-img col-md-4"></div>
                <div className="singing-image col-md-7"></div>
              </div>
            </div>
          </section>
   
        </div>
      </div>
    </Layout>
  );
};

export default Home;
