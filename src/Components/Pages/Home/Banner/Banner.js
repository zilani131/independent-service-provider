import React from "react";
import Carousel from "react-bootstrap/Carousel";
import gym1 from "../../../../Utilities/BannerImage/gym1.jpg"
import gym2 from "../../../../Utilities/BannerImage/gym2.png"
import gym3 from "../../../../Utilities/BannerImage/gym3.png"

const Banner = () => {
  return (
    <div>
      {/* React-Bootstrap carousel */}
      <Carousel fade>
        <Carousel.Item interval={1000}>
          <img
            style={{maxHeight:"700px"}}
            className="d-block w-100 "
            src={gym1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Don’t limit your challenges. Challenge your limits</h3>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            style={{maxHeight:"700px"}}
            className="d-block w-100 h-25"
            src={gym2}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>The body achieves what the mind believes.</h3>
         
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            style={{maxHeight:"700px"}}
            className="d-block w-100 h-25"
            src={gym3}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Good things come to those who sweat.</h3>
       
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
