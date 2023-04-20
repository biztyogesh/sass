import React from "react";
import "./card.scss";
function Card() {
  return (
    <div className="containerr flex flex-justify-start flex-align-center flex-row overflow-hidden">
      <div className="cardss flex flex-column border-1 text-word-break padding-4">
        <div className="subheadings flex flex-align-center border-bottom">
          <div className="Icon">
            <img alt="amazon" src="/amazon.png" />
          </div>
          <div className="work overflow-hidden">
            <span>AMAZON INC .</span>
            <p>since 2018</p>
          </div>
        </div>
        <div className="secondcontainer flex  flex-justify-center margin-t padding-r">
          <div className="liveProjects flex flex-column flex-align-center ">
            <span >02</span>
            <p>LIVE  PROJECT </p>
          </div>
          <div className="employeeContainer">
            <span>08</span>
            <p>EMPLOYEES ENGAGED</p>
           </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
