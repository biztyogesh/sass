import React from "react";
import "./cards.scss";
import { Icon } from "semantic-ui-react";

function Cards({rating}:any) {
  // const rating = 4;
  const starRating = Math.floor(Math.abs
    (rating));

  const renderStar = (item: number, index: any) => {
    return (
      <Icon
        size="small"
        name="star"
        color={item <= starRating ? "yellow" : "grey"}
      />
    );
  };

  return (
    <div className="container flex flex-justify-start flex-align-center flex-row">
      <div className="card flex flex-column padding-4">
        <div className="heading flex flex-row flex-justify-between text-word-break overflow-hidden">
          <div className="subheading flex flex-row">
            <img className="Icon" alt="group" src="/Group 11.png" />

            <div className="work flex flex-column flex-align-center">
              <span>DRS Workdesk </span>

              <a href="https://www.drsworkdesk.com">www.drsworkdesk.com</a>
            </div>
          </div>
          <img className="img" alt="High" src="/High Importance.png" />
        </div>
        <div className="CardDetails flex padding-b-4">
        <p >Category:
          <span>Design</span>
          <span>Development</span>
          <span>+3</span>
        </p>
        </div>
        <div className="ratings flex flex flex-justify-between">
          <div> {[1, 2, 3, 4, 5].map(renderStar)}</div>
          <div className="images flex-justify-between">
            <img src="/emp3.png" alt=""/>
            <img src="/emp3.png" alt=""/>
            <img src="/img.png" alt=""/>
            <img src="/emp3.png" alt=""/>
            <img src="/img.png" alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
