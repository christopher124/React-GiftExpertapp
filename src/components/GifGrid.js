import React from "react";
import useFetchGifs from "../hooks/useFetchGifs";
import GifGriditem from "./GifGriditem";

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn"> {category} </h3>

      {loading && <p className="animate__animated animate__flash">Loading</p>}

      <div className="card-grid">
        {images.map((img) => (
          <GifGriditem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
export default GifGrid;
