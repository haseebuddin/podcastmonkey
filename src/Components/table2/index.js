import { Nav } from "react-bootstrap";
import a from "../../Images/VIDEO.png";
import line from "../../Images/line.png";

const Index = () => {
  const item = [
    {
      name: "Video Episode Editing",
      id: "second",
    },
    {
      name: "Starter Basic",
      id: "",
    },
    {
      name: "Starter Studio",
      id: "",
    },
    {
      name: "Pro Basic",
      id: "",
    },
    {
      name: "Pro Studio",
      id: "",
    },
    {
      name: "Scale Basic",
      id: "",
    },
    {
      name: "Scale Studio",
      id: "",
    },
  ];
  return (
    <div
     style={{
        marginTop:"-180px",
        transform: "scale(0.75)",
      }}
   className="mobiletabdiv col-md-11  d-flex flex-row"
    >
      <div
        className="tableimg col-md-2"
        style={{ marginLeft: "-65px", marginTop: "110px" }}
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
        <div className="col-md-12 d-flex justify-content-around">
          {item.map((i) => {
            return (
              <div
                id={i.second}
                style={{ width: "auto" ,marginRight:"40px"}}
                className="d-flex justify-content-center"
              >
                <Nav className="text-center">
                  <Nav.Link
                    style={{ backgroundColor: "#F4F6FB" ,fontSize:"14px"}}
                    className="getStartedButton12 text-purple"
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
          <h4 id="second">Plan Price</h4>
          <h4>$499</h4>
          <h4>$499</h4>

          <h4>$899</h4>
          <h4>$1350</h4>
          <h4>$1599</h4>
          <h4>$2399</h4>
        </div>

        <div className=" colstyle col-md-12 d-flex flex-row justify-content-between">
          <h4 id="second"># of Episodes</h4>
          <h4>02</h4> <h4>02</h4>
          <h4>04</h4>
          <h4>04</h4>
          <h4>08</h4>
          <h4>08</h4>
        </div>
        <div className=" colstyle col-md-12 d-flex flex-row justify-content-between">
          <h4 id="second">Slack Communication</h4>
          <h4>No</h4>

          <h4>No</h4>
          <h4>Yes</h4>
          <h4>Yes</h4>
          <h4>Yes</h4>
          <h4>Yes</h4>
        </div>

        <div className=" colstyle col-md-12 d-flex flex-row justify-content-between">
          <h4 id="second">Delivery Days</h4>

          <h4>04</h4>

          <h4>04</h4>
          <h4>03</h4>
          <h4>03</h4>
          <h4>24-48 hours</h4>
          <h4>2 days</h4>
        </div>
        <div className=" colstyle col-md-12 d-flex flex-row justify-content-between">
          <h4 id="second">Multicam Editing</h4>
          <h4>No</h4>

          <h4>YES</h4>
          <h4>No</h4>

          <h4>YES</h4>
          <h4>No</h4>

          <h4>YES</h4>
        </div>
        <div className=" colstyle col-md-12 d-flex flex-row justify-content-between">
          <h4 id="second">4K Editing </h4>
          <h4>No</h4>

          <h4>YES</h4>
          <h4>No</h4>

          <h4>YES</h4>
          <h4>No</h4>

          <h4>YES</h4>
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
          <h4 id="second">Show Notes</h4>
          <h4>#99</h4>

          <h4>#199</h4>
          <h4>#199</h4>
          <h4>08</h4>
          <h4>#199</h4>
          <h4>08</h4>
        </div>
        <div className=" colstyle col-md-12 d-flex flex-row justify-content-between">
          <h4 id="second">Episode Uploading</h4>
          <h4>#59</h4>

          <h4>#99</h4>
          <h4>#99</h4>
          <h4>#199</h4>
          <h4>08</h4>
          <h4>08</h4>
        </div>

        <div className=" colstyle col-md-12 d-flex flex-row justify-content-between">
          <h4 id="second">YouTube Thumbnails</h4>
          <h4>#79</h4>
          <h4>#199</h4>
          <h4>#199</h4>
          <h4>08</h4>
          <h4>#119</h4>
          <h4>08</h4>
        </div>
      </div>
    </div>
    
  );
};

export default Index;
