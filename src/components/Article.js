import React from "react";
import { videoData } from "../data/data";
import VideoCard from "./VideoCard";

function Article() {
  return (
    <>
      <div className="article">
        <h2>NOS MESSAGES</h2>

        <div className="horizontal-scroll">
          {videoData.map((item) => (
            <VideoCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Article;
