import React from "react";

export const Contact = (props) => {
  return (
    <div>
      <div id="contact">
        <div className="container">
            <div className="col-md-12 section-title">
                <h2>Cum ne gasesti</h2>
            </div>
            <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.instagram : "/"} target="_blank">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};
