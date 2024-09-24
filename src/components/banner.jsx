import React from "react";
import {Link} from 'react-router-dom';

export const Banner = ({
    title,
    subtitle,
    button,
    link
}) => {
    return (
        <div id="banner">
            <div className="row">
            <div className="col-md-9">
                <h4>{title}</h4>

                <small>{subtitle }</small>
            </div>
                <div className={"col-md-3 align-right"}>{link && <Link to={link} className="btn btn-custom">{button}</Link>}
                </div>
        </div>
        </div>
    );
}