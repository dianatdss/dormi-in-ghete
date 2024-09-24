import React from "react";

export const Header = (props) => {
  return (
    <header id="header" >
      <div className="intro min-vh-100">
        {/*<Banner button={"Vreau sa aflu mai multe"} title={"Nou"} link={"/snowboard"} subtitle={"Facem tabere de snowboard"}></Banner>*/}
        <div className="overlay min-vh-100">
          <div className="container">
            <div className="row">
              {props && props.data && <div className="col-md-8 col-md-offset-2 intro-text">
                {/*<p>{props.data ? props.data.paragraph : "Loading"}</p>*/}
                <img
                    alt={props.data.title}
                    src={props.data.image}
                    width="200px"
                />
              </div>}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
