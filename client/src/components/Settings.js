import React from "react";
import typing from "../images/typing.svg";

const Settings = () => {
  return (
    <>
      <div className="top">
        <div className="dataTitle">Settings</div>
      </div>
      <div className="working">
        <div className="img">
          <img src={typing} />
        </div>
      </div>
    </>
  );
};

export default Settings;
