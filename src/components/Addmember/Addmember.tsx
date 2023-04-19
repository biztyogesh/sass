import React from "react";
import "./addmember.scss";
function Card() {
  return (
    <div className="containerrr">
      <div className="cardsss">
        <div className="subheadingss">
          <div className="Icon">
            <img alt="bcg" src="/BCG.png" />
          </div>
          <div className="work">
            <span className="biz">BOSTON .</span>
            <span>CONSULING GROUP</span>
            <span>since 2018</span>
          </div>
        </div>
        <div className="secondcontainerr">
          <div className="liveProjectss">
            <span >12</span>
            <p>LIVE  PROJECT </p>
          </div>
          <div className="employeeContainerr">
            <span>30</span>
            <p>EMPLOYEES ENGAGED</p>
           </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
