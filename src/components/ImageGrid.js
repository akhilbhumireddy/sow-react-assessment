import React from "react";
import "../App.css";

const ImageGrid = ({ data }) => {
  if (!Array.isArray(data)) {
    console.error("Expected 'data' to be an array but received:", data);
    return <p>Loading...</p>;
  }
  return (
    <div className="grid">
      {data.slice(0, 6).map((item) => (
        <div key={item.ID} className="grid-item">
          <img src={item.image_url} alt={item.post_title} />
          <h3>{item.post_title}</h3>
          <p>{item.post_excerpt}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
