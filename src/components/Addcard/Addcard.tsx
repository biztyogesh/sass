import React from "react";
import "./addcard.scss";

function Addcard() {
  return (
    <>
      {/* <h2>position: absolute;</h2> */}

    
      <div className="Maincontainer">
      <div className="relative">
        This div element has position: relative;
        <div className="absolute">
        <div className="container">This div element has position: absolute;</div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Addcard;
