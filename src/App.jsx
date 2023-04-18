import React from "react";
import "./App.scss";
 import Addmember from "./components/Addmember/Addmember"
  import Cards from "./components/Cards/Cards";
  import Card from "./components/Card/Card";
//  import Invoice from "./components/Invoice/Invoice";
function App() {
  return (
    <div className="App">

       <Cards rating={4}/> 
    <Card/> 
     <Addmember/>  
    {/* <Invoice/>  */}


  
    
    

    </div>
  );
}
export default App;
