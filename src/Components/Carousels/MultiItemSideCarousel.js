import React from 'react'
import Carousel from "react-elastic-carousel";
import "./Carousels.css"
// import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import c1 from '../../Images/c1.png';
import c2 from '../../Images/c2.png';
import c3 from '../../Images/c3.png';


const MultiItemSideCarousel = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 3, itemsToScroll: 1 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 }
  ];
  return (
    <div id="slider"  className='crousal_cont' >
      <div className="carousel-wrapper second">
      <Carousel breakPoints={breakPoints}  >
        <div className="ser-inerdiv2  ">
          <img src={c1} alt="c1" />
          <div className='content'>
          <h5><b>Producer Services</b></h5>
          <p>Co-writing scripts</p>

          </div>

        </div>

        <div className="ser-inerdiv2  ">
          <img src={c2} alt="c2" />
          <div className='content'>
          <h5><b>Producer Services</b></h5>
          <p>Co-writing scripts</p>

          </div>

        </div>
        <div className="ser-inerdiv2  ">
          <img src={c3} alt="c3" />
          <div className='content'>
          <h5><b>Producer Services</b></h5>
          <p>Co-writing scripts</p>

          </div>

        </div>
        <div className="ser-inerdiv2  ">
          <img src={c1} alt="c1" />
          <div className='content'>
          <h5><b>Producer Services</b></h5>
          <p>Co-writing scripts</p>

          </div>

        </div>
        <div className="ser-inerdiv2  ">
          <img src={c2} alt="c2" />
          <div className='content'>
          <h5><b>Producer Services</b></h5>
          <p>Co-writing scripts</p>

          </div>

        </div>
        <div className="ser-inerdiv2  ">
          <img src={c3} alt="c3" />
          <div className='content'>
          <h5><b>Producer Services</b></h5>
          <p>Co-writing scripts</p>

          </div>

        </div>
      </Carousel>
    </div>

    </div>
    
  )
}

export default MultiItemSideCarousel
