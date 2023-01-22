import { Nav } from "react-bootstrap";
const Index = () => {
  return (
  
    <div className="soundImage">
      <div className="image-content">
        <p>THE REEL DEAL VIDEO EDITING</p>
        <h1>
          <b>
            Does it sound Link
            <br /> to much?
          </b>
        </h1>
        <p>
          Conquer TikTak, Instagram Facebook, Youtube and still be sibe to run
          your
          <br /> business successfully
        </p>
        <Nav  className=" main-button">
          <Nav.Link
          id="btncolor"
            className="border-white getStartedButton text-white"
            href="#getstarted"
          >
            Show Me the Reel Deal
          </Nav.Link>
        </Nav>
      </div>
    </div>

  );
};

export default Index;
