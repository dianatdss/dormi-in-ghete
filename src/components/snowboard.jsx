import { Image } from "./image";
import React from "react";

export const Snowboard = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Tabere de snowboard</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        {props && props.data && <div className="row">
          <div className="row">
            <div className={"col-md-4 col-sm-12"}>
            <Image
                title={props.data.image.title}
                img={props.data.image.img}
            />
            </div>
            <div className={"col-md-4 col-sm-12"}>
                  <h3 className="mt-0">{props.data.included.title}</h3>
                  {props.data.included.paragraphs.map((paragraph, idx) =>
                      <p key={`include-${idx}`}>{paragraph}</p>)}
                </div>
              <div className={"col-md-4 col-sm-12"}>
                  <h3 className="mt-0">{props.data.notIncluded.title}</h3>
                  {props.data.notIncluded.paragraphs.map((paragraph, idx) =>
                      <p key={`notinclude-${idx}`}>{paragraph}</p>)}
                </div>
              </div>


          <div className={"col-sm-12"}>
          <div className={"row"}>
            <div className={"col-md-4 col-sm-12"}>
              <h3 className="mt-0">{props.data.accomodation.title}</h3>
              {props.data.accomodation.paragraphs.map((paragraph, idx) =>
                  <p key={`accomodation-${idx}`}>{paragraph}</p>)}
            </div>
            <div className={"col-md-4 col-sm-12"}>
              <h3 className="mt-0">{props.data.transport.title}</h3>
              {props.data.transport.paragraphs.map((paragraph, idx) =>
                  <p key={`transport-${idx}`}>{paragraph}</p>)}
            </div>
            <div className={"col-md-4 col-sm-12"}>
              <h3 className="mt-0">{props.data.equipment.title}</h3>
              {props.data.equipment.paragraphs.map((paragraph, idx) =>
                  <p key={`equipment-${idx}`}>{paragraph}</p>)}
            </div>
            </div>
            </div>
        </div>}
      </div>
    </div>
  );
};
