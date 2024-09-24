import React from "react";
import { useLocation} from 'react-router-dom';

export const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
              <a href={pathname === '/' ? '#page-top' : '/'} className="navbar-brand page-scroll">DORMI IN GHETE</a>
        </div>

        {pathname === '/' && <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                Ce facem
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                Cine suntem
              </a>
            </li>
            {/*<li>*/}
            {/*  <a href="#services" className="page-scroll">*/}
            {/*    Services*/}
            {/*  </a>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*  <a href="#portfolio" className="page-scroll">*/}
            {/*    Snowboard*/}
            {/*  </a>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*  <a href="#testimonials" className="page-scroll">*/}
            {/*    Testimonials*/}
            {/*  </a>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*  <a href="#team" className="page-scroll">*/}
            {/*    Team*/}
            {/*  </a>*/}
            {/*</li>*/}
            <li>
              <a href="#contact" className="page-scroll">
                Cum ne gasesti
              </a>
            </li>
          </ul>
        </div>}
      </div>
    </nav>
  );
};
