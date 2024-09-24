import React from "react";
import {Link} from 'react-router-dom';

export const Features = (props) => {
  return (
    <div id="features" className="text-center min-vh-50">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Ce facem</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((sport, index) => (
                <div key={`${sport.title}-${index}`} className="col-xs-12 col-md-4">
                    <div className="card">
                      {" "}
                      <i className={sport.icon}></i>
                      <h3>{sport.title}</h3>
                      <p>{sport.text}</p>
                        {sport.link && <Link to={sport.link}>Vezi detalii</Link>}
                    </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
