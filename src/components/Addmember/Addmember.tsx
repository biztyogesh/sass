import React from "react";
import "./addmember.scss";
function Card() {
  return (
    <div className="containerrr flex flex-justify-start flex-align-center flex-row overflow-hidden">
      <div className="cardsss flex text-word-break flex-column padding-3">
        <div className="subheadingss flex flex-align-center">
          <div className="Icon">
            <img alt="bcg" src="/BCG.png" />
          </div>
          <div className="work  flex flex-column flex-align-center text-word-breakoverflow-hidden padding-l-1">
            <span className="biz flex flex-justify-start">BOSTON .</span>
            <span>CONSULING GROUP</span>
            <span>since 2018</span>
          </div>
        </div>
        <div className="secondcontainerr flex flex-justify-center ">
          <div className="liveProjectss flex flex-column flex-align-center flex-justify-center">
            <span >12</span>
            <p>LIVE  PROJECT </p>
          </div>
          <div className="employeeContainerr flex flex-column flex-align-center">
            <span>30</span>
            <p>EMPLOYEES ENGAGED</p>
           </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
