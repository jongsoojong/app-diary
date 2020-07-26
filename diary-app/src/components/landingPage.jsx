import React, { useEffect, useState } from "react";

import { navigate } from "hookrouter";
import { inject, observer } from "mobx-react";
import { toJS } from "mobx";

import Hero from "./Hero";
import Entry from "./Entry";
import Navbar from "./Navbar";

import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    // background-color: ${(props) =>
      props.toggle === true ? "#eeeeee" : "#000000"};
    background-color: #eeeeee;

    .inner-container {
        max-width: 768px;
        margin: 0 auto;
        padding: 0 20px;
    }

    .main_title {
        margin: 0;
        font-size: 40px;
        text-align: center;
        margin-bottom: 20px;
    }

    .btn {
        display: block;
        max-width: 300px;
        margin: 0 auto 20px;
        padding: 20px 40px;
        font-size: 18px;
        background-color: #df7116;
        color:  #ffffff;
        border: none;
        cursor: pointer;
        text-decoration: none;
    }
`;
const LandingPage = ({ AppStore }) => {
  const tempObject = AppStore.entryObject;

  const goToPage = (url) => {
    navigate(url);
  };

  return (
    <Container>
      <div className="main__inner-container">
        <Hero />
        <h1 className="main_title"> DIARY APP </h1>

        <div className="main__button-container">
          <button onClick={() => goToPage("/create-entry")} className="btn">
            Create an Entry
          </button>
          <button onClick={() => goToPage("/view-entries")} className="btn">
            View Your Entries
          </button>
        </div>

        <div className="dataArrayRender">
          {Object.entries(tempObject).map(([hash, entry]) => {
            return <Entry id={hash} data={entry} />;
          })}
        </div>
      </div>
    </Container>
  );
};

export default inject("AppStore")(observer(LandingPage));
