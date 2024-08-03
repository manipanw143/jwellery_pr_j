import React from "react";
import "./card_2.css";
import VideosCarousel from "./carouselvideos";
import { FaShareAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
const InformativeCard = () => {
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="title">
            <strong className="uppercase">TEMPLE NAME</strong>
            <div className="subtitle">
              Address
    
            </div>
          </div>
          <div className="navigation">
            <a
              href="#"
              className="nav-link"
            >
              <FaChevronLeft className="icon" />
            </a>
            <a
              href="#"
              className="nav-link"
            >
              <FaChevronRight className="icon" />
            </a>
            <a
              href="#"
              className="nav-link"
            >
              <FaShareAlt className="icon" />
            </a>
          </div>
        </div>
        <div className="content">
          <div className="team-score">
            <div className="team">
              <img src="" alt="image" className="flag" />
              <a href="#" className="team-link"></a>

            </div>
            <div className="team">
              <img src="" alt="image" className="flag" />

            </div>
          </div>
          <p className="result">Upcoming Function</p>
        </div>
        <div className="sidebar">
          <div className="player">

            <a href="#" className="player-link">
              Related Videos
            </a>

          </div>
         
          <VideosCarousel />
        </div>
        <div className="tabs">
          <a href="#" className="tab">
            Videos
          </a>
          <a href="#" className="tab active">
            Photos
          </a>
          <a href="#" className="tab">
            Prasadhi
          </a>
          <a href="#" className="tab">
            Badhvi Bijh
          </a>
          
        </div>
      </div>
    </>
  );
};
export default InformativeCard;
