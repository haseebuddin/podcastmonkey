import React from "react";
import Carousel from "react-elastic-carousel";
import scene from "../../Images/MV1.png";
import scene2 from "../../Images/MV2.png";
import scene3 from "../../Images/MV3.png";

import "./Carousels.css";

const MultiItemCarouselscene = ({ a1, a2, a3 }) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 1 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];
  return (
    <div className="carousel-wrapper fourth">
      <Carousel breakPoints={breakPoints}>
        <div className="ser-inerdivN2">
          {a1 ?
          <div style={{transform:"scale(0.9)"}}>
             <img src={a1} alt="scene" /> 
 </div>
         : <img src={scene} alt="scene" />}
        </div>

        <div className="ser-inerdivN2 ">
          {a2 ? <div style={{transform:"scale(0.9)"}}>
             <img src={a2} alt="scene" /> 
 </div> : <img src={scene3} alt="scene" />}{" "}
        </div>

        <div className="ser-inerdivN2 ">
          {a3 ? <div style={{transform:"scale(0.9)"}}>
             <img src={a3} alt="scene" /> 
 </div> : <img src={scene2} alt="scene" />}{" "}
        </div>

        <div className="ser-inerdivN2">
          {a1 ?
          <div style={{transform:"scale(0.9)"}}>
             <img src={a1} alt="scene" /> 
 </div>
         : <img src={scene} alt="scene" />}
        </div>

        <div className="ser-inerdivN2   ">
          {a2 ? <div style={{transform:"scale(0.9)"}}>
             <img src={a2} alt="scene" /> 
 </div> : <img src={scene3} alt="scene" />}{" "}
        </div>

      </Carousel>
    </div>
  );
};

export default MultiItemCarouselscene;
