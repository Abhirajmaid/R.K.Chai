import React from "react";

const ImageCard = async ({ img, text }) => {
  return (
    <div className="bg-slate-300 mb-3">
      <img src={img} alt={text} />
    </div>
  );
};

export default ImageCard;
