import "./App.scss";
import React from "react";
// import FormikRetain from "./Component/Formikretain/Formikretain";
// import { FormikForm } from "./Component/FormikForm";
import { CustomDropdown } from "./Component";
import "semantic-ui-css/semantic.min.css";
// import {}
 
function App() {
  return (
    <div className="App">
        <CustomDropdown/>
       {/* <FormikForm/> */}
       {/* <FormikRetain/> */}
    </div>
  );
}

export default App;