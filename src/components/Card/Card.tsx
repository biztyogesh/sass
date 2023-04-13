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
            <div>AMAZON INC .</div>

            <a href="since 2018">since 2018</a>
          </div>
        </div>
        <div className="livecontainer">
          <div className="Live">
            <span>02</span>
            <span>LIVE PROJECTS </span>
          </div>
          <div className="EMPLOYEES">
            <span>08</span>
            <span>
              EMPLOYEES 
            </span>
            <span>ENGAGED</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
