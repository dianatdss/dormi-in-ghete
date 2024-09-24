import React from "react";

export const Image = ({ title, img }) => {
  return (
    <div className="portfolio-item">
      <div className="hover-bg">
        {" "}
          <div className="hover-text">
            <h4>{title}</h4>
          </div>
          <img src={img} className="img-responsive" alt={title} />{" "}
      </div>
    </div>
  );
};
