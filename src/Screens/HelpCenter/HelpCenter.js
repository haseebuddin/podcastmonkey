import React from "react";
import "./help.css";
import c1 from "../../Images/box1.png";
import c2 from "../../Images/box2.png";
import c3 from "../../Images/box3.png";

import { BsSearch } from "react-icons/bs";
import Layout from "../../Layouts/Layout";
const HelpCenter = () => {
  return (
    <div id="helpcenter"className="shadow">
      <Layout>
        <div className="Help">
          <section className="firstSection">
            <div id="text1" className="home-section1">
              <h1 >
                Get Help & Advice from the <br></br>
                <span className="theme-primary-color shadowColor">
                  {" "}
                  Podcast{" "}
                </span>
                Monkey Team
              </h1>

              <div className="second-section text-center"></div>

              <div className="container home-logos text-center">
                <div className="col-md-12 input-main">
                  <div className="col-md-7 input_cont">
                    {/* <img src={hero} alt="hero" /> */}
                    <div style={{ padding: "0px 10px" }}>
                      <BsSearch />
                    </div>
                    <input placeholder="Search" className="help-input" id="help-inpt" />
                    <button className="searchbtn">
                      <BsSearch
                        style={{
                          padding: "0px 5px",
                          width: "25px",
                          height: "25px",
                          // marginLeft: "-3px",
                          // marginTop: "5px",
                          color: "white",
                        }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section container>
            <div className="col-md-12 second-sectionHelp">
              <div className="col-md-5 div1">
                <div>
                  <img src={c1} className="imgicon" alt="c1" />
                </div>
                <div>
                  <h3>
                    {" "}
                    <b>Plans and Add Ons</b>
                  </h3>

                  <p>Everything related to your plan, subscriptions, & more.</p>
                </div>
              </div>
              <div className="col-md-5 div1">
                <div>
                  <img src={c3} className="imgicon" alt="c1" />
                </div>
                <div>
                  <h3>
                    <b>Getting Started: Tutorials </b>
                  </h3>
                  <p>Everything related to your plan, subscriptions, & more.</p>
                </div>
              </div>
              <div className="col-md-5 div1">
                <div>
                  <img src={c2} className="imgicon" alt="c1" />
                </div>
                <div>
                  <h3>
                    <b>FAQ </b>
                  </h3>
                  <p>Everything about Podcast Monkey & more</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </div>
  );
};

export default HelpCenter;
