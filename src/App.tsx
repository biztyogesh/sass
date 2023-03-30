import React from "react";
import "./App.scss";
function App() {
  const master = [
    { id: 1, name: "Sumit" },
    { id: 2, name: "Dhanur" },
    { id: 3, name: "Husban" },
    { id: 4, name: "yogesh" },
    { id: 5, name: "anjali" },
    { id: 6, name: "Anshika" },
  ];
  return (
    <ul>
      <ul>
        {master.map(({ id, name }) => (
          <li key={id}> {name}</li>
        ))}
      </ul>
      <h2>Nested List</h2>

      <ul>
        <li className="logo">Household Items</li>
        <li>
          Kitchen/Grocery
          <ul>
            <li>Black tea</li>
            <li>Green tea</li>
            <li>Milk tea</li>
          </ul>
        </li>
        <li>
          Clearing
          <ul>
            <li>Black</li>
            <li>Green</li>
            <li>White</li>
          </ul>
        </li>
        <li>
          Shoping
          <ul>
            <li>Shirt</li>
            <li>Tshirt</li>
            <li>Hello</li>
          </ul>
        </li>
      </ul>
    </ul>
  );
}
export default App;
