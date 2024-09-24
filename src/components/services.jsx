import React from "react";
import {Link} from 'react-router-dom';

export const Services = (props) => {
  return (
    <div id="services" >
      <div className="container">
        <div className="col-md-8">
          <h2>Nou</h2>
          <p>
            Hai cu noi in tabara de snowboard
          </p>
        </div>
        <div className="row">
         <div className={"col-xs-12 col-md-4"}>
           <div className="button-container">
                <Link to="/snowboard" className="btn btn-custom">Vreau sa aflu mai multe</Link>
           </div>
           </div>

        </div>
      </div>
    </div>
  );
};
