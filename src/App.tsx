import "./App.scss";
import "semantic-ui-css/semantic.min.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import FormikRetain from "./Component/Gender/Form";
import Formic from "./Component/Gender/Gender";
// import Gender from "./Component/Gender/Gender";
// import Form  from "./Component/Gender/Form";
 
function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route path="/form1" element={<FormikRetain/>}/>
          <Route path="/form2" element={<Formic/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;