 import "semantic-ui-css/semantic.min.css";
import "./App.scss";
import React from "react";
// import { FormikForm } from "./Component/FormikForm";
import { CustomDropdown } from "./Component";
 

function App() {
  return (
    <div className="App">
       <CustomDropdown/>
       {/* <FormikForm/> */}
    </div>
  );
}

export default App;