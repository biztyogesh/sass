import React from "react";
import "./card.scss";
function Card() {
  return (
    <div className="containerr">
      <div className="cardss">
        <div className="subheadings">
          <div className="Icon">
            <img alt="amazon" src="/amazon.png" />
          </div>
          <div className="work">
            <span>AMAZON INC .</span>
            <p>since 2018</p>
          </div>
        </div>
        <div className="secondcontainer">
          <div className="liveProjects">
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
