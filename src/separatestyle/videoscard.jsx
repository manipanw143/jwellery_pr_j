import React from "react";
import "./videoscard.css";
import aaimaa from '../img/aaimaa.jpg';
import playIcon from '../img/play.png';
const VideoCard = () => {
  return (
    <>
      <div className="image-container">
        <img
          src={aaimaa}
          alt="Shanto: Batters let us down with poor decisions"
          className="image"
        />
        <img
        src={playIcon}
        alt="Play Icon"
        className="play-icon"
      />
      </div>
    </>
  );
};
export default VideoCard;
