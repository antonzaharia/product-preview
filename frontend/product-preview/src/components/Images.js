import React from "react";

export default function Images({ images }) {
  return (
    <div>
      {images ? (
        images.map((image) => (
          <img
            src={image}
            key={image.id}
            alt="preview"
            className="preview-image"
          />
        ))
      ) : (
        <div>No Preview Available</div>
      )}
    </div>
  );
}
