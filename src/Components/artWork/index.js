import Accordion from "react-bootstrap/Accordion";
import price from "../../Images/price.png";
import price1 from "../../Images/price1.png";
import price2 from "../../Images/price2.png";
import price3 from "../../Images/price3.png";

const Index = () => {
  return (
    <div className="artnetwork text-white ">
      <div className="first-div second-div col-md-10">
        <div >
          <h1>
            <b>Our Artworks</b>
          </h1>
          <p style={{fontSize:"14px"}}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia. 
          </p>
        </div>
        <div>
          <img src={price} />
        </div>
      </div>
      <div className="second-div">
        <div className="d-flex imgart">
          <div className="m-2">
            <img src={price1} />
          </div>
          <div className="m-2">
            <img src={price2} />
          </div>

          <div className="m-2">
            <img src={price3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
