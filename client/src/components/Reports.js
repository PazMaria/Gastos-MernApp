import React from "react";
import typing from "../images/typing.svg";

const Reports = () => {
  return (
    <>
      <div className="top">
        <div className="dataTitle">Reports</div>
      </div>
      <div className="working">
        <div className="img">
          <img src={typing} />
        </div>
      </div>
    </>
  );
};

export default Reports;
