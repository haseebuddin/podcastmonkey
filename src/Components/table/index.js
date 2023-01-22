import { Nav } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import a from "../../Images/AUDIO.png";
import line from "../../Images/line.png";

import b from "../../Images/VIDEO.png";
const Index = () => {
 
  const item = [
    {
      name: "Audio Episode Editing",
    },
    {
      name: "Starter",
    },
    {
      name: "Pro",
    },
    {
      name: "Scale",
    },
  ];
  return (
   

    <div
      style={{
          marginTop:"-110px",
        transform: "scale(0.7)",
      }}
      className="mobiletabdiv col-md-9  d-flex flex-row"
    >
      <div
        className="col-md-2 tableimg "
        style={{  marginLeft: "-65px", marginTop: "110px" }}
      >
        <img src={a} />
      </div>
      <div
        className="col-md-12 tableCont"
        style={{
          boxShadow: "1px 1px 100px -60px #AE3BD9",
          padding: "20px",
          backgroundColor: "#F0EDF5",
          marginLeft: "-7%",
          borderRadius: "10px",
          border: "1px solid #ad35d9",
        }}
      >
        {" "}
        <div className="col-md-12 d-flex justify-content-start">
          {item.map((i) => {
            return (
              <div
                style={{ width: "260px" }}
                className="d-flex justify-content-center"
              >
                <Nav className="text-center">
                  <Nav.Link
                    style={{ backgroundColor: "#F4F6FB" }}
                    className="getStartedButton12  text-purple"
                    href="#getstarted"
                  >
                    <b>{i.name}</b>
                  </Nav.Link>
                </Nav>
              </div>
            );
          })}
        </div>
        <div className=" colstyle col-md-12 d-flex flex-row justify-content-between">
          <h4 id="first">Plan Price</h4>
          <h4>$399</h4>

          <h4>$799</h4>
          <h4>$1499</h4>
        </div>
        <div className=" colstyle col-md-12 d-flex flex-row justify-content-between">
          <h4 id="first"># of Episodes</h4>
          <h4>02</h4>

          <h4>04</h4>
          <h4>08</h4>
        </div>
        <div className=" colstyle col-md-12 d-flex flex-row justify-content-between">
          <h4 id="first">Slack Communication</h4>
          <h4>No</h4>

          <h4>Yes</h4>
          <h4>Yes</h4>
        </div>
        <div className=" colstyle col-md-12 d-flex flex-row justify-content-between">
          <h4 id="first">Delivery Days</h4>
          <h4>03</h4>

          <h4>02</h4>
          <h4>24-48 hours</h4>
        </div>
        <div className="col-md-12 d-flex flex-row justify-content-center">
          <img src={line} style={{ position: "relative" }} />
          <div
            className=""
            style={{ position: "absolute", color: "white", marginTop: "10px" }}
          >
            <h3>ADD-ONS</h3>
          </div>
        </div>
        <div className=" colstyle col-md-12 d-flex flex-row justify-content-between">
          <h4 id="first">Show Notes</h4>
          <h4>#99</h4>

          <h4>#199</h4>
          <h4>08</h4>
        </div>
        <div className=" colstyle col-md-12 d-flex flex-row justify-content-between">
          <h4 id="first">Episode Uploading</h4>
          <h4>#59</h4>

          <h4>#99</h4>
          <h4>08</h4>
        </div>
        <div className=" colstyle col-md-12 d-flex flex-row justify-content-between">
          <h4 id="first">YouTube Thumbnails</h4>
          <h4>#79</h4>

          <h4>#119</h4>
          <h4>08</h4>
        </div>
      </div>
    </div>
    
     
  );
};

export default Index;
