import React from "react";
import { TitleSm } from "./Title";
import { HiOutlineArrowRight } from "react-icons/hi";

export const Card = ({ data, caption, show }) => {
  return (
    <>
      <div className="card">
        <div className="card-img">
          <img src={data.cover} alt={data.title} />
        </div>
        <div className="card-details">
          {/* Apply CSS style to hide pointer on hover */}
          <div className="title-link" style={{ pointerEvents: "none" }}>
            <TitleSm title={data.title} />
          </div>
          {caption && (
            <div style={{ pointerEvents: "none" }}>
              {caption} <HiOutlineArrowRight className="link-icon" />
            </div>
          )}
          <div className="flex">
            <span> {data.category} </span>{" "}
            {data.date && <span> / {data.date}</span>}
          </div>

          {/* Check if data has a 'text' property and display it */}
          {data.text && <p>{data.text}</p>}
        </div>
      </div>
    </>
  );
};
