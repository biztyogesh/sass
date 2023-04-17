import React from "react";
import "./App.scss";
import Cards from "./components/Cards/Cards";
 import Card from "./components/Card/Card";
function App() {
  return (
    <div className="App">

    <Cards rating={4}/>
    <Cards rating={4}/>
    <Card/>
    
    

    </div>
  );
}
export default App;
