import React from "react";
import { Nav } from "react-bootstrap";

const index = ({ Videot, autot, autot1, para }) => {
  return (
    <div>
      <div  id="mbmvsection" className="container text-center">
        <h1>
          {Videot}
          {autot}
          <br />
          {autot1}
          <span className="theme-primary-color shadowColor"> Stand Out</span>
        </h1>

        {para ? (
          <p className="theme-white-color">
       Crips and clean audio makes your podcasts sound professional.<br/> Let us be your editing sidekick.
          </p>
        ) : (
          <p className="theme-white-color">
           Turn your Zoom, Riverside or studio recordings into professionally<br/> edited video episodes.
          </p>
        )}
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
    </div>
  );
};

export default index;
