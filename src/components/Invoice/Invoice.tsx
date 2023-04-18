import React from "react";
import "./invoice.scss";

function Invoice() {
  return (
    <div className="bigcontainer">
      <h6>PENDING INVOICES</h6>
      <div className="contain">
        <div className="Cont">
          <span>Project ID #01880</span>
          <span>Project ID #12009</span>
          <span>Project ID #46019</span>
        </div>
     

        <div className="Cont">
          <span>08-11-2022</span>
          <span>20-11-2022</span>
          <span>25-11-2022</span>
        </div>
      </div>
     
      <div className="link">
        <a href="google.com">View All</a>
        </div>
    </div>
  );
}

export default Invoice;
