import React, {useState, useEffect, Fragment} from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";

import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Snowboard } from './components/snowboard';
import {Services} from './components/services';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
      <Fragment>
        <BrowserRouter>
            <Navigation/>
        <Routes>
            <Route
                exact
                path="/"
                element={
                <Fragment>
                    <Header data={landingPageData.Header} />
                    <Features data={landingPageData.Features} />
                    <Services data={landingPageData.Services} />
                    <About data={landingPageData.About} />
                    <Contact data={landingPageData.Contact} />
                </Fragment>
            }>


            </Route>
            <Route path="/snowboard" element={
                <Snowboard data={landingPageData.Snowboard} name={`Snowboard`} />
            }>
            </Route>
            </Routes>
        </BrowserRouter>
      </Fragment>
  );
};

export default App;
