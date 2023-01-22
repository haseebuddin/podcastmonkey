import React, { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import PTitlebar from "../../Components/pTitlebar";
import Intro from "../../Components/intro";
import Work from "../../Components/work";
import PlanSection from "../../Components/PlanSection";
import Videos from "../../Components/videos";
import Table from "../../Components/table";
import Table2 from "../../Components/table2";

import a1 from "../../Images/a1.png";
import a2 from "../../Images/a2.png";
import a3 from "../../Images/a3.png";
import TableTitle from "../../Components/tableTitle";

import Art from "../../Components/artWork";
import Accordion from "../../Components/accordion2";
import MultiItemCarouselsceneMK from "../../Components/Carousels/MultiItemCarouselsceneMK";
import Layout from "../../Layouts/Layout";
import "./Pricing.css";
import "../../App.css";
// import "./responsive.css";

const MV = () => {
  return (
    <Layout>
      <div className="MV">
        <div
       
          className=" MV-section1VM d-flex flex-column"
          style={{ marginTop: "-15rem" }}
        >
          <div style={{ marginTop: "-20px" }}>
            <PTitlebar />
          </div>
        </div>
        <div
          className="d-flex justify-content-center"
          style={{ marginTop: "-25rem", marginBottom: "18rem" }}
        >
          <PlanSection />
        </div>
        <div className="ved-sec">{/* <img src={scene} /> */}</div>
        <div className="MV-section3">
          <div className="trans">
            <div className="container-fluid third-carousel">
              <Work />
              <div className=" sliderimg">
                <div className="col-md-12">
                  <MultiItemCarouselsceneMK a1={a1} a2={a2} a3={a3} />
                </div>
                <div className="col-md-12 slidermargin">
                  {/* <MultiItemCarouselsceneMK /> */}
                  <MultiItemCarouselsceneMK />
                </div>
              </div>
            </div>
          </div>

          <Art />
          <div style={{ marginTop: "43px" }}>
            <Videos />
          </div>
          <div
            className="container justify-content-center"
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              marginTop: "140px",
            }}
          >
            <div className="text-center faqdiv">
              <div className="faq">

             
              <h6
                style={{
                  marginLeft: "110px",
                  fontSize: "14px",
                  backgroundColor: "lightgray",
                  borderRadius: "100px",
                  padding: "3px 4px",
                  width: "260px",
                }}
                className="text-center "
              >
                <b>
                  FREQUENTLY ASK
                  <span className="theme-primary-color"> QUESTIONS</span>
                </b>
              </h6>
              </div>

              <h1 className="text-center">
                <b>FAQ’</b>
                <span className="theme-primary-color"> S</span>
              </h1>

              <p style={{ fontSize: "12px" }} className="text-center">
                Not ready for a subscription? No problem, we can also edit on a
                per episode basis.
                <br />
                Let our professional editors craft your podcast today.
              </p>
            </div>

            <Accordion title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
          </div>
          <div className="col-md-12 flex-column  d-flex align-items-center">
            <TableTitle />
            <Table />
            <Table2 />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MV;
