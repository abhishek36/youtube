import React from "react";
import "./Video.css";
import Play from "../../components/play/Play";
import Recommended from "../../components/recommended/Recommended";
import { useParams } from "react-router-dom";

const Video = () => {
  const { videoId, categoryId } = useParams();
  return (
    <div className="play-container">
      <Play videoId={videoId} />
      <Recommended categoryId={categoryId} />
    </div>
  );
};

export default Video;
