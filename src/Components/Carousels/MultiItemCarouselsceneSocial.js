import React from "react";
import Carousel from "react-elastic-carousel";

import scene from "../../Images/r1.png";
import scene2 from "../../Images/r2.png";

import scene3 from "../../Images/r3.png";
import scene4 from "../../Images/r4.png";
import scene5 from "../../Images/r5.png";
// import scene5 from "../../Images/r6.png";

import "./Carousels.css";

const MultiItemCarouselsceneSocial = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 1 },
    { width: 768, itemsToShow: 5 },
    { width: 1200, itemsToShow: 5 },
  ];
  return (
    <div className="carousel-wrapper third">
      <Carousel breakPoints={breakPoints}>
        <div className="ser-inerdiv3  ">
          <img src={scene} alt="scene" />
        </div>

        <div className="ser-inerdiv3 ">
          <img src={scene2} alt="scene" />
        </div>

        <div className="ser-inerdiv3 ">
          <img src={scene3} alt="scene" />
        </div>

        <div className="ser-inerdiv3  ">
          <img src={scene4} alt="scene" />
        </div>
        <div className="ser-inerdiv3  ">
          <img src={scene5} alt="scene" />
        </div>
        <div className="ser-inerdiv3  ">
          <img src={scene} alt="scene" />
        </div>
      </Carousel>
    </div>
  );
};

export default MultiItemCarouselsceneSocial;
