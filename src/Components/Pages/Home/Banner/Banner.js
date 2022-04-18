import React from "react";
import Carousel from "react-bootstrap/Carousel";
import gym1 from "../../../../Utilities/BannerImage/gym1.jpg"
import gym2 from "../../../../Utilities/BannerImage/gym2.png"
import gym3 from "../../../../Utilities/BannerImage/gym3.png"

const Banner = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item interval={1000}>
          <img
            style={{height:"500px"}}
            className="d-block w-100"
            src={gym1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            style={{height:"500px"}}
            className="d-block w-100"
            src={gym2}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
             style={{height:"500px"}}
            className="d-block w-100"
            src={gym3}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
