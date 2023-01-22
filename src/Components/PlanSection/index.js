import React from "react";
import { Container, Nav } from "react-bootstrap";
import p1 from "../../Images/p1.png";
import p2 from "../../Images/p2.png";
import p3 from "../../Images/p3.png";
import p4 from "../../Images/p4.png";

const index = () => {
  return (
    // <Container>
    <div
      className="col-md-8 plaindiv"
      style={{ padding: "20px", marginTop: "100px" }}
    >
      <div className="container text-center d-flex mobres">
        <div className="col-xs-12 col-md-6 text-start  TextWidth">
          <span className="text-black">
            <b>Choose as you like</b>
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur
            adipiscing elit,
          </p>
          <div className="d-flex mobres">
            <div className="icondiv  flex-column">
              <img src={p2} />

              <h6>video podcasts</h6>
            </div>
            <div className="icondiv  flex-column">
              <img src={p1} />

              <h6>video podcasts</h6>
            </div>
          </div>
          <div className="d-flex mobres">
            <div className="icondiv  flex-column ">
              <img src={p4} />
              <h6>video podcasts</h6>
            </div>
            <div className="icondiv  flex-column">
              <img src={p3} />

              <h6>video podcasts</h6>
            </div>
          </div>
        </div>
        <div  className="col-md-6 text-start  " style={{ padding: "20px" }}>
          <h6 style={{margin:"0px 20px 20px 20px"}}  className="text-black">
            <b >
              Select your box as per your <br /> requirement
            </b>
          </h6>
          <div className="d-flex ">
            <h6 className="Caldiv">Weekly</h6>
            <h6 className="Caldiv">Monthly</h6>
          </div>
          <div className="d-flex flex-column">
            <h6 style={{margin:"20px "}}>
              <b>Number of video</b>
            </h6>
            <div className="d-flex ">
              <h6 className="Caldiv">02</h6>
              <h6 className="Caldiv">04</h6>
              <h6 className="Caldiv">06</h6>
            </div>
          </div>
          <h6 style={{margin:"20px "}}>
              <b>Select Your Category</b>
            </h6>
              <div className="flex-column CaldivSelect ">
                
                <select className="Selectdiv Selectdivmd">
                  <option value="volvo">Select</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
                  <div className="selectdiv  text-start">
                    <div className="hoverclass">
                      
                    <p className="selectval">Zoom Podcast</p>
                    </div>
                    <div  className="hoverclass">

                    <p className="selectval">Studio Podcast</p>
                    </div>
                  </div>
              </div>
              
        </div>
      
      </div>
      <div className="col-md-12">
        <Nav className="justify-content-center main-button">
          <Nav.Link
            className="getStartedButton theme-primary text-white"
            href="#getstarted"
          >
            Select this Plan
          </Nav.Link>
        </Nav>
      </div>
    </div>
    // </Container>
  );
};

export default index;
