import React, { useEffect, useState } from "react";

import firebase from "../firebase";

import { navigate } from "hookrouter";
import { inject, observer } from "mobx-react";
import { toJS } from "mobx";

import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";

import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) =>
    props.toggle === true ? "#eeeeee" : "#000000"};
  .create-entry__title-label,
  .create-entry__entry-label {
    color: ${(props) => (props.toggle === true ? "#df7116" : "#eeeeee")};
  }
  .create-entry__date {
    color: ${(props) => (props.toggle === true ? "#000000" : "#eeeeee")};
  }

  form,
  .example-container {
    max-width: 768px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 0 20px;

    label {
      text-align: left;
    }
  }

  .create-entry__date {
    text-align: right;
    margin-bottom: 20px;
    max-width: 768px;
    padding: 0 20px;
    margin: 0 auto 20px;
  }

  .create-entry__input-container {
    display: flex;
    flex-direction: column;
  }

  .create-entry__input-container {
    width: 100%;
    margin-bottom: 20px;
  }

  .create-entry-btn {
    background-color: #df7116;
    color: #ffffff;
  }

  .btn {
    padding: 20px 40px;
    font-size: 18px;
    border: none;
    margin: 0 auto 20px;
    cursor: pointer;
  }
`;

const StyledButton = styled.button`
  background-color: ${(props) => (props.toggle ? "#000000" : "#eeeeee")};
  color: ${(props) => (props.toggle ? "#eeeeee" : "#000000")};
`;

dayjs.extend(duration);
dayjs.extend(relativeTime);

const CreateEntry = ({ AppStore }) => {
  const now = dayjs();
  const previousDay = dayjs().subtract("88", "d");
  const howLong = dayjs.duration(previousDay.diff(now)).humanize();

  const hash = dayjs(now).format("HH:mm:ss");
  const todayDay = dayjs(now).format("DD");
  const todayMonth = dayjs(now).format("MM");
  const todayYear = dayjs(now).format("YYYY");
  const todayDate = `${todayMonth}/${todayDay}/${todayYear}`;
  const todayId = `${todayMonth}-${todayDay}-${todayYear}-${hash}`;

  const [toggleState, updateToggleState] = useState(true);
  const [inputTitle, updateInputTitle] = useState("");
  const [inputEntry, updateInputEntry] = useState("");

  const goToPage = (url) => {
    navigate(url);
  };

  const toggleMode = (e) => {
    let button = e.target;
    updateToggleState((toggleState) => !toggleState);

    if (toggleState) {
      button.innerHTML = "Day Mode";
    } else {
      button.innerHTML = "Night Mode";
    }
  };

  const tempObject = AppStore.entryObject;

  //refactor this entire component;
  const onSubmit = (e) => {
    e.preventDefault();

    const mobId = todayId;
    const date = todayDate;
    const title = inputTitle;
    const entry = inputEntry;

    AppStore.updateObject({
      mobId: mobId,
      date: date,
      title: title,
      entry: entry,
    });

    firebase.firestore().collection("diary-entries").doc(mobId).set({
      date: date,
      title: title,
      entry: entry,
    });
  };

  return (
    <Container toggle={toggleState}>
      <div className="create-entry__date">
        <span>Today's Date: </span>
        {todayMonth || "----"} {"/"} {todayDay || "----"} {"/"}{" "}
        {todayYear || "----"}
      </div>
      <form>
        <div className="create-entry__input-container">
          <label
            htmlFor="create-entry__title-input"
            className="create-entry__title-label"
          >
            Title:
          </label>
          <input
            onChange={(e) => updateInputTitle(e.target.value)}
            type="text"
            className="create-entry__title-input"
          />
        </div>
        <div className="create-entry__input-container">
          <label
            htmlFor="create-entry__entry-input"
            className="create-entry__entry-label"
          >
            Entry:
          </label>
          <textarea
            onChange={(e) => updateInputEntry(e.target.value)}
            className="create-entry__entry-input"
            placeholder="How was your Day?"
            rows="4"
            cols="50"
            name="entry"
          />
        </div>

        <input
          type="submit"
          onClick={(e) => onSubmit(e)}
          className="btn create-entry-btn"
        />
        <button onClick={() => goToPage("/view-entries")} className="btn">
          {" "}
          View Entries{" "}
        </button>
      </form>
      <div className="example-container">
        <StyledButton
          toggle={toggleState}
          className="create-entry__nightmode btn toggle-btn"
          onClick={(e) => {
            toggleMode(e);
          }}
        >
          Night Mode
        </StyledButton>
      </div>
    </Container>
  );
};

export default inject("AppStore")(observer(CreateEntry));
