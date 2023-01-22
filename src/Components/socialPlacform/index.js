import hero2 from "../../Images/home-bg.png";
import logoi1 from "../../Images/social1.png";
import logoi2 from "../../Images/social2.png";
import logoi3 from "../../Images/social3.png";
import logoi4 from "../../Images/social4.png";
const Index = () => {
  const logos = [logoi1, logoi2, logoi3, logoi4];
  return (
    <div id="logomb" className=" sociallogos" style={{marginTop:"153px"}}>
      <p>
        <p className="theme-primary-color ">
          <b>

          THE REEL DEAL VIDEO EDITING
          </b>
        </p>
      </p>
      <h1 style={{fontSize:"43px"}}>
        <b>
          What if we told you there
          <br /> is a way to be on every
          <span className="theme-primary-color"> platform?</span>
        </b>
      </h1>
      <p  style={{marginTop:"43px"}}>
        Conquer TikTak, Instagram Facebook, Youtube and still be sibe to run
        your<br/> business successfully
      </p>
      <div className=" home-logos text-center">
        {logos.map((item) => {
          return (
            <div className="social-icons">
              <img src={item} />
            </div>
          );
        })}{" "}
      </div>
    </div>
  );
};

export default Index;
