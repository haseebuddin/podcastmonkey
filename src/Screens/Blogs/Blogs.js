import React from "react";
import "./Blogs.css";
import IMG1 from "../../Images/IMG4.png";
import IMG2 from "../../Images/IMG5.png";
import IMG3 from "../../Images/IMG6.png";

import IMG4 from "../../Images/IMG1.png";
import IMG5 from "../../Images/IMG2.png";
import IMG6 from "../../Images/IMG3.png";
import Layout from "../../Layouts/Layout";
const Blogs = () => {
  return (
    <div className="shadow">
      <Layout>
        <div  id ="blogs" className="Help">
          <section className="container firstSection">
            <div id ="text1" className="firstSection ">
              <h3 >
                Our Latest{" "}
                <span className="theme-primary-color shadowColor"> Blogs </span>
              </h3>
              <p className="para">
                {" "}
                It's time to turn your podcast idea into reality with consultant
                support <br></br> from planning to setup, recording & a powerful
                launch.
              </p>
            </div>
          </section>
          <section className="container  d-flex justify-content-center  section-div secondSection">
          <div className="col-md-10">
              <h2 className="text-start">
                Browser Our Content <br></br> On Podcast Tips &
                <span className="theme-primary-color"> More </span>
              </h2>
            </div>
          </section>
          <section className="container d-flex justify-content-center">
            <div className="cardsdiv col-md-11 blog-img d-flex justify-content-center">
              <div className="col-md-4 blog-img-single">
                <img src={IMG1} alt="IMG1" />
                <p>How Long Should A Podcast Episode Be?</p>
              </div>
              <div className="col-md-4 blog-img-single">
                <img src={IMG2} alt="IMG2" />
                <p>The Art And Science Of Naming Your Podcast</p>
              </div>
              <div className="col-md-4 blog-img-single">
                <img src={IMG3} alt="IMG3" />
                <p>Who Is Your Podcast For? Defining Your Ideal Listener</p>
              </div>
            </div>
          </section>
          <section className="secCards container d-flex justify-content-center">
            <div className="cardsdiv col-md-11 blog-img d-flex justify-content-center">
                <div className="col-md-4 blog-img-single">
                  <img src={IMG4} alt="IMG1" />
                  <p>How Long Should A Podcast Episode Be?</p>
                </div>
              <div className="col-md-4 blog-img-single">
                <img src={IMG5} alt="IMG2" />
                <p>The Art And Science Of Naming Your Podcast</p>
              </div>
              <div className="col-md-4 blog-img-single">
                <img src={IMG6} alt="IMG3" />
                <p>Who Is Your Podcast For? Defining Your Ideal Listener</p>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </div>
  );
};

export default Blogs;
