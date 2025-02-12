import React, { useState } from "react";
// import "./owl";
import "./News3.css";
import { NavLink } from "react-router-dom";
// import Data from "../Events/EventDesc";
import Data from "./FlashEvents"
import Slider from "react-slick";

const DataFunc = (data) => {
  if (data.id > 0) {
    return (
      <NavLink to={`/Events/${data.id}`} key={data.id} className="col-lg-3">
        <div
          style={{ height: "450px" }}
          className={`features-item ${data.feature}-feature wow fadeInUp`}
          data-wow-duration="1s"
          data-wow-delay="0s"
        >
          <div className={`${data.feature}-number number`}>
            <h6>0{data.id}</h6>
          </div>
          <img src={data.link} alt="" />
          <h4>{data.title}</h4>
          <div className="line-dec"></div>
          <p>{data.descShort}</p>
        </div>
      </NavLink>
    );
  }
};

const News = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  const [slider, setSlider] = useState(
    window.screen.width < 800 ? (
      <Slider {...settings}>
        {Data.map((data) => {
          return DataFunc(data);
        })}
      </Slider>
    ) : (
      <div className="row">
        {Data.map((data) => {
          return DataFunc(data);
        })}
      </div>
    )
  );

  const responsive = (media) => {
    if (media.matches)
      setSlider(
        <Slider {...settings}>
          {Data.map((data) => {
            return DataFunc(data);
          })}
        </Slider>
      );
    else
      setSlider(
        <div className="row">
          {Data.map((data) => {
            return DataFunc(data);
          })}
        </div>
      );
  };

  const media = window.matchMedia("(max-width: 800px)");
  media.addEventListener("change", responsive);
  window.onload = () => responsive(media);

  return (
    <>
      <h6 className="upcoming-event">Our Events</h6>
      <h2 className="my-4" style={{ fontSize: "20px", textAlign: "center" }}>
        Discover What We Do &amp; <span>Offer</span> To Our
        <em> Students</em>
      </h2>
      <div id="features" className="features section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="features-content">{slider}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
